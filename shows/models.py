import logging
import re
from typing import Tuple, List
from datetime import timedelta
from collections import defaultdict

from django.utils import timezone
from django.db import models
from django.utils.text import slugify
from django.contrib import messages

import json
from imdb import IMDb
from feeds.models import Feed
from feeds.feet_item import FeedItem
from torrents.models import Torrent
from torrents_manager.transmission_client import TransmissionClient
from common import Quality, Source, DEFAULT_POSTER
from common.tvdb_client import TVDBVestibuleClient
from shows.show_info_update.show_info_utils import extract_episode_time
from shows.show_info_update.poster_main_colors_util import get_poster_main_colors
from api_feeds import search_feeds_by_imdb_id

logger = logging.getLogger(__name__)


class ShowProfile(models.Model):

    SCORE_LEVEL_UP = 100

    QUALITY_CHOICES = [
        (Quality.QUALITY_720P, Quality.QUALITY_720P),
        (Quality.QUALITY_1080P, Quality.QUALITY_1080P),
        (Quality.QUALITY_4K, Quality.QUALITY_4K),
    ]

    quality = models.CharField(choices=QUALITY_CHOICES, default=Quality.QUALITY_1080P, max_length=10,
                               help_text="Show video quality")
    subtitles = models.BooleanField(default=True, help_text="Are subtitles required")
    high_quality_source = models.BooleanField(default=True, help_text="Wait for high quality torrents sources")

    W_NONE = "N"
    W_1_DAY = "1D"
    W_2_DAY = "2D"
    W_3_DAY = "3D"
    W_4_DAY = "4D"
    W_5_DAY = "5D"
    W_6_DAY = "6D"
    W_1_WEEK = "1W"
    W_FOREVER = "F"

    WAIT_CHOICES = [
        (W_NONE, "Don't Wait"),
        (W_1_DAY, "Up to a Day"),
        (W_2_DAY, "Up to 2 Days"),
        (W_3_DAY, "Up to 3 Days"),
        (W_4_DAY, "Up to 4 Days"),
        (W_5_DAY, "Up to 5 Days"),
        (W_6_DAY, "Up to 6 Days"),
        (W_1_WEEK, "Up to a Week"),
        (W_FOREVER, "Forever"),
    ]

    download_automatically = models.BooleanField(default=False)
    wait = models.CharField(choices=WAIT_CHOICES, default=W_1_WEEK, max_length=4,
                            help_text="How long to wait before downloading best available match, "
                                      "if full match not found")

    @property
    def show(self):
        try:
            return self.show_set.all()[0]
        except IndexError:
            return "Show-less"

    def save(self, *args, **kwargs):
        super(ShowProfile, self).save(*args, **kwargs)
        for show in self.show_set.all():
            for torrent in show.torrents.all():
                profile_match, profile_match_score = self.get_torrent_match_score(torrent)
                torrent.profile_match_score = profile_match_score
                torrent.profile_match = profile_match
                torrent.save()

    def should_wait(self, first_torrent_created_at: timezone) -> bool:
        if self.wait == ShowProfile.W_NONE:
            return False

        if self.wait == ShowProfile.W_FOREVER:
            return True

        if self.wait == ShowProfile.W_1_DAY:
            days = 1

        elif self.wait == ShowProfile.W_2_DAY:
            days = 2

        elif self.wait == ShowProfile.W_3_DAY:
            days = 3

        elif self.wait == ShowProfile.W_4_DAY:
            days = 4

        elif self.wait == ShowProfile.W_5_DAY:
            days = 5

        elif self.wait == ShowProfile.W_6_DAY:
            days = 6

        elif self.wait == ShowProfile.W_1_WEEK:
            days = 7

        else:
            return True

        return timezone.now() < first_torrent_created_at + timedelta(days=days)


    def __str__(self):
        return f"{self.show} - Show Profile"

    def get_torrent_match_score(self, torrent: Torrent) -> Tuple[bool, int]:
        feed_match, feed_score = self._feed_score(torrent)
        quality_match, quality_score = self._quality_score(torrent)
        source_match, source_score = self._source_score(torrent)

        logger.info(f"{torrent} Scores - feed: {feed_score}, quality: {quality_score}, source: {source_score}")
        total_score = feed_score + quality_score + source_score
        total_match = feed_match and quality_match and source_match
        logger.info(f"> Total score: {total_score}, Total match: {total_match}")
        return total_match, total_score

    def _feed_score(self, torrent: Torrent) -> Tuple[bool, int]:
        score = 0
        match = False

        # If subtitles are not required, match
        if not self.subtitles:
            match = True

        # If subtitles are required, match only for feeds with subtitles
        if torrent.feed.has_subtitles and self.subtitles:
            match = True
            score += ShowProfile.SCORE_LEVEL_UP

        return match, score + int(((torrent.feed.priority + 1) * 0.1 * ShowProfile.SCORE_LEVEL_UP))

    def _quality_score(self, torrent: Torrent) -> Tuple[bool, int]:
        diff = Quality.difference(quality=torrent.quality, expected_quality=self.quality)

        # Quality Match
        if diff == 0:
            return True, ShowProfile.SCORE_LEVEL_UP

        # Quality lower
        if diff < 0:
            return False, diff * ShowProfile.SCORE_LEVEL_UP

        # Quality Higher
        if diff > 0:
            return False, int(-0.3 * diff * ShowProfile.SCORE_LEVEL_UP)

    def _source_score(self, torrent: Torrent) -> Tuple[bool, int]:
        if not self.high_quality_source:
            return True, 0

        source_score = Source.source_value(torrent.source_type)
        return source_score >= ShowProfile.SCORE_LEVEL_UP, Source.source_value(torrent.source_type)



class Show(models.Model):

    imdb_id = models.CharField(max_length=24)
    title = models.CharField(max_length=256, default="", blank=True)
    year = models.CharField(max_length=24, default="", blank=True)
    number_of_seasons = models.CharField(max_length=24, default="", blank=True)
    runtime = models.CharField(max_length=24, default="", blank=True)
    network = models.CharField(max_length=24, default="", blank=True)
    status = models.CharField(max_length=256, default="", blank=True)
    status_line = models.CharField(max_length=256, default="", blank=True)
    next_episode = models.CharField(max_length=256, default="", blank=True)
    next_episode_season_status = models.CharField(max_length=256, default="", blank=True)
    next_episode_time_code = models.CharField(editable=False, max_length=24, default="9999-99-99")
    poster_link = models.URLField(default="", blank=True)
    thumbnail_link = models.URLField(default="", blank=True)
    palette = models.CharField(max_length=256, default="", blank=True, null=True)
    slug = models.SlugField(max_length=20, default="", editable=False)
    profile = models.ForeignKey(ShowProfile, on_delete=models.CASCADE, null=True, blank=True)
    lookup_names = models.TextField(default="", blank=True, null=True)
    imdb_rating = models.CharField(max_length=24, default="", blank=True)

    class Meta:
        ordering = ('title', )

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):

        ia = IMDb()
        imdb_show_data = ia.get_movie(self.imdb_id)

        if not self.title:
            self.title = imdb_show_data.get("title")

        if self.profile is None:
            new_profile = ShowProfile()
            new_profile.save()
            self.profile = new_profile

        self.update_show_meta_data(imdb_show_data)

        self.slug = slugify(self.title)
        super(Show, self).save(*args, **kwargs)

    def delete(self, using=None, keep_parents=False):
        self.profile.delete()

    @property
    def downloading_torrents(self):
        return self.torrents.filter(download_status=Torrent.DOWNLOADING)

    @property
    def formatted_imdb_id(self) -> str:
        return f"tt{self.imdb_id}"

    @property
    def imdb_url(self) -> str:
        if self.imdb_id:
            return f"https://www.imdb.com/title/{self.formatted_imdb_id}"

    @property
    def number_of_seasons_as_int(self) -> int:
        try:
            return int(self.number_of_seasons)
        except ValueError:
            return 0

    @property
    def palette_list(self) -> dict:
        if self.palette:
            palette = json.loads(self.palette)
            base = {
                "primary": palette[0],
                "light": palette[1],
                "dark": palette[2],
            }
            if len(palette) == 4:
                base["secondary"] = palette[3]
            return base
        return {}

    def generate_lookup_names(self, imdb_show_data: dict):
        """
        Creates list of possible torrent show titles, and keeps it
        Example: ["primal", "primal.2019", "genndy.tartakovskys.primal", "genndy.tartakovskys.primal.2019"]
        """
        aliases = [self.title] + imdb_show_data.get("akas", [])
        formatted_aliases = list()

        for name in aliases:
            formatted_name = re.sub("\([\w\s]+\)", "", name.strip())
            formatted_name = re.sub("[-_\s,]", ".", formatted_name.strip())
            formatted_name = re.sub("[:(),'?!]", "", formatted_name).lower()
            formatted_name = re.sub("\.+", ".", formatted_name.strip())
            formatted_aliases.append(formatted_name)
            formatted_aliases.append(f"{formatted_name}.{self.year}")

        self.lookup_names = "\n".join(formatted_aliases)

    def get_lookup_names_list(self) -> List[str]:
        """
        Returns the lookup names as a list of strings
        """
        return self.lookup_names.split("\n")

    @property
    def safe_folder_name(self) -> str:
        return re.sub("[:/]", "", self.title)

    # Torrents listing
    def latest_torrents_activity(self, limit=10):
        return self.torrents.exclude(
            download_status=Torrent.NEVER_STARTED).order_by("-modified")[:limit]

    @property
    def last_active_torrents(self):
        return self.latest_torrents_activity(limit=3)

    @property
    def last_torrent_activity(self):
        try:
            return self.latest_torrents_activity(limit=1)[0].modified
        except IndexError:
            return None


    def latest_torrents_found(self, limit=10):
        return self.torrents.exclude().order_by("-created")[:limit]

    @property
    def last_found_torrents(self):
        return self.latest_torrents_found(limit=3)

    @property
    def last_torrent_found(self):
        try:
            return self.latest_torrents_found(limit=1)[0].created
        except IndexError:
            return None

    @property
    def next_episode_order_value(self):
        return int(self.next_episode_time_code.replace("-", ""))

    @property
    def episodes_by_seasons(self):
        """
        Get show's episode torrents grouped by season
        """
        seasons = defaultdict(dict)

        for torrent in self.torrents.all():
            if torrent.episode not in seasons[torrent.season].keys():
                seasons[torrent.season][torrent.episode] = list()
            seasons[torrent.season][torrent.episode].append(torrent)

        return dict(seasons)

    @property
    def _show_torrents_titles(self):
        return [torrent.title for torrent in self.torrents.all()]

    def update_show_meta_data(self, imdb_show_data=None):

        if imdb_show_data is None:
            ia = IMDb()
            imdb_show_data = ia.get_movie(self.imdb_id)

        with TVDBVestibuleClient() as tvdb_client:
            self.network = tvdb_client.get_show_original_network(self.imdb_id)
            self.status = tvdb_client.get_show_status(self.imdb_id)

        self.thumbnail_link = imdb_show_data.get("cover url", DEFAULT_POSTER)
        poster_link = imdb_show_data.get("full-size cover url", DEFAULT_POSTER)

        self.poster_link = poster_link
        self.extract_palette()

        # if not self.poster_link or self.poster_link != poster_link:
        #     self.poster_link = poster_link
        #     self.extract_palette()

        self.number_of_seasons = imdb_show_data.get("number of seasons")
        self.year = imdb_show_data.get("year", "Year Unknown")
        self.imdb_rating = imdb_show_data.get("rating", "Rating Unknown")
        self.generate_lookup_names(imdb_show_data)

        try:
            self.runtime = imdb_show_data.get("runtimes")[0]
        except (KeyError, TypeError):
            pass

    def extract_palette(self):
        if not self.poster_link:
            return
        main_colors = get_poster_main_colors(self.poster_link)
        self.palette = str([color.raw for color in main_colors])

    def update_show_info(self):
        ia = IMDb()
        imdb_show_data = ia.get_movie(self.imdb_id)

        self.update_show_meta_data(imdb_show_data)
        self.map_seasons(imdb_show_data)

        for torrent in self.torrents.all():
            self.match_torrent_to_season_and_episode(torrent)

        upcoming_episodes = self.show_episodes.all().filter(is_aired=False).order_by('air_time_code')

        if upcoming_episodes:
            self.status_line = f"{self.status}, has {len(upcoming_episodes)} upcoming episodes"
            next_episode = upcoming_episodes[0]
            count_upcoming_episodes_in_season = len(upcoming_episodes.filter(season=next_episode.season))

            if next_episode.number == 1:
                self.next_episode_season_status = "Show debut" if next_episode.season.number == 1 \
                    else f"{next_episode.season.title} premier"
            else:
                if count_upcoming_episodes_in_season == 1:
                    self.next_episode_season_status = f"{next_episode.season.title} finale"
                else:
                    self.next_episode_season_status = f"{count_upcoming_episodes_in_season} episodes left in season"

            self.next_episode_time_code = next_episode.air_time_code
            self.next_episode = f"{str(next_episode.season.title)} Episode {next_episode.number} " \
                                f"- '{next_episode.title}', {next_episode.air_status}"
        else:
            self.status_line = f"{self.status}, no upcoming episodes"
            self.next_episode_time_code = "9999-99-99"
            self.next_episode = ""
            self.next_episode_season_status = ""

        self.save()

    def match_torrent_to_season_and_episode(self, torrent: Torrent):
        self.match_torrent_with_season(torrent)
        self.match_torrent_with_episode(torrent)

    def match_torrent_with_season(self, torrent: Torrent):
        """
        Returns True if updated
        """
        if torrent.season_data:
            return

        try:
            season_number = int(torrent.season)
        except ValueError:
            season_number = 0

        try:
            season = self.seasons.get(number=season_number)
        except Season.DoesNotExist:
            print(f"{torrent} does not match any known season")
            return

        torrent.season_data = season
        torrent.save()

    def match_torrent_with_episode(self, torrent: Torrent):
        """
        Returns True if updated
        """
        if (not torrent.episode) or (not torrent.season) or (not torrent.season_data) or torrent.episode_data:
            return

        try:
            episode_number = int(torrent.episode)
        except ValueError:
            episode_number = 0

        try:
            episode = torrent.season_data.episodes.get(number=episode_number)
        except Episode.DoesNotExist:
            print(f"{torrent} does not match any known episode")
            return

        torrent.episode_data = episode
        torrent.save()

    def map_seasons(self, show_imdb_data=None):
        ia = IMDb()

        if show_imdb_data is None:
            show_imdb_data = ia.get_movie(self.imdb_id)

        ia.update(show_imdb_data, "episodes")

        for season_number, season_episodes in show_imdb_data["episodes"].items():
            try:
                season = self.seasons.get(number=season_number)
            except Season.DoesNotExist:
                season = Season()
                season.show = self
                season.number = season_number
                season.title = f"Season {season_number}" if season_number > 0 else "Unknown Season"
                season.save()

            for episode_number, episode_data in season_episodes.items():
                try:
                    episode = season.episodes.get(number=episode_number)
                except Episode.DoesNotExist:
                    episode = Episode()
                    episode.show = self
                    episode.season = season
                    episode.number = episode_number

                episode.title = episode_data.get("title", "")
                is_aired, episode_time_data = extract_episode_time(episode_data)

                episode.is_aired = is_aired
                episode.air_time_code = episode_time_data.absolute_episode_air_time_code
                episode.air_status = episode_time_data.airs
                episode.save()

    def find_show_torrents(self, request=None, torrents: List[FeedItem] = None):
        """
        Read or get Feeds, find and add torrents matching the show
        """
        if torrents is None:
            torrents = list()
            for feed in Feed.objects.all():
                torrents += feed.read_feed()

        torrents += search_feeds_by_imdb_id(imdb_id=self.formatted_imdb_id)

        relevant_items = list()
        lookup_names = self.get_lookup_names_list()

        for item in torrents:
            if item.parsed_values.show_title.lower() in lookup_names:
                relevant_items.append(item)

        print("[{}] Found {} torrents for show {}".format(
            timezone.now().strftime("%d/%b/%Y %H:%M:%S"), len(relevant_items), self.title))

        self.add_torrents_from_feed(relevant_items, request)

    def add_torrents_from_feed(self, feed_list: List[FeedItem], request=None):
        """
        Add show torrents from given filtered list
        """
        new_torrents = list()

        for feed_item in feed_list:

            try:
                existing_torrent = self.torrents.all().get(title=feed_item.raw_title, feed=feed_item.feed)
                print(f"Torrent titled '{existing_torrent.title}' from {existing_torrent.feed} is not new")
                continue
            except Torrent.DoesNotExist:
                pass

            torrent = Torrent()
            torrent.title = feed_item.raw_title
            torrent.season = str(feed_item.parsed_values.season)
            torrent.episode = feed_item.parsed_values.get_episode()
            torrent.quality = feed_item.parsed_values.video_quality
            torrent.source_type = feed_item.parsed_values.source
            torrent.link = feed_item.link
            torrent.publication_time = feed_item.publication_time
            torrent.feed = feed_item.feed
            torrent.show = self
            torrent.save()

            profile_match, profile_match_score = self.profile.get_torrent_match_score(torrent)
            torrent.profile_match_score = profile_match_score
            torrent.profile_match = profile_match
            torrent.save()

            new_torrents.append(torrent)

        if request is not None:
            if new_torrents:
                messages.add_message(request, messages.SUCCESS,
                                     f"{len(new_torrents)} new torrents found for {self}")

            else:
                messages.add_message(request, messages.INFO, f"No new Torrents found for {self}")

    def update_show_downloads(self):
        """
        Update the show's torrents according to the installation profile.
        Download torrent if needed.
        """
        if not self.profile.download_automatically:
            logger.info(f"> '{self}' profile is set to 'Don't Download Automatically' - doing nothing")
            return

        logger.info(f"> Updating '{self}' Torrent Downloads")
        for season, episodes in self.episodes_by_seasons.items():
            for episode, torrents in episodes.items():
                if not episode:
                    continue
                self._update_episode_downloads(season=season, episode=episode, torrents=torrents)

    def _update_episode_downloads(self, season: str, episode: str, torrents: List[Torrent]):
        """
        Check if an episode requires torrents downloads, according to profile.
        """
        logger.info(f"{season}-{episode} has {len(torrents)} torrents")

        if len(torrents) == 0:
            return

        downloaded = [torrent for torrent in torrents if torrent.was_downloaded]

        if len(downloaded) != 0:
            logger.info(f"{len(downloaded)} torrents already downloaded - doing nothing")
            return

        matched = Torrent.objects.filter(
            show=self, season=season, episode=episode, profile_match=True).order_by('-profile_match_score')
        logger.info(f"{len(matched)} torrents match the profile")

        if len(matched) == 0:

            first_torrent_created_at = Torrent.objects.filter(
                show=self, season=season, episode=episode).order_by('-created')[0].created

            if self.profile.should_wait(first_torrent_created_at=first_torrent_created_at):
                logger.info("Waiting for a profile match - doing nothing")
                return

            logger.info("Not waiting for match (profile setting) - downloading best available")
            best_match = Torrent.objects.filter(
                show=self, season=season, episode=episode).order_by('-profile_match_score')[0]

        else:
            best_match = matched[0]

        with TransmissionClient() as transmission:
            if transmission.is_up:
                _, message = transmission.download_torrent(best_match)
                logger.info(message)


class Season(models.Model):
    show = models.ForeignKey("shows.Show", related_name="seasons", on_delete=models.CASCADE)
    number = models.IntegerField()
    title = models.CharField(default="", max_length=256)
    should_download = models.BooleanField(default=True)
    downloaded = models.BooleanField(default=False)

    @property
    def season_matching_torrents(self):
        return self.torrents.filter(episode="", profile_match=True)

    @property
    def season_unmatching_torrents(self):
        return self.torrents.filter(episode="", profile_match=False)

    def __str__(self):
        return f"{self.show} - {self.title}"

    class Meta:
        ordering = ('show', '-number', )


class Episode(models.Model):
    show = models.ForeignKey("shows.Show", related_name="show_episodes", on_delete=models.CASCADE)
    season = models.ForeignKey("shows.Season", related_name="episodes", on_delete=models.CASCADE)
    number = models.IntegerField()
    title = models.CharField(default="", max_length=256)
    should_download = models.BooleanField(default=True)
    is_downloaded = models.BooleanField(default=False)
    is_aired = models.BooleanField(default=False)
    air_time_code = models.CharField(editable=False, max_length=24, default="9999-99-99")
    air_status = models.CharField(editable=False, max_length=256, default="")

    @property
    def matching_torrents(self):
        return self.torrents.filter(profile_match=True)

    @property
    def unmatching_torrents(self):
        return self.torrents.filter(profile_match=False)

    def __str__(self):
        return f"{self.season} - Episode {self.number} - {self.title}"

    class Meta:
        ordering = ('show', '-season', '-number', )
