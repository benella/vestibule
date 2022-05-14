import logging
import re
from typing import Tuple, List
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
from common import Quality, DEFAULT_POSTER
from common.tvdb_client import TVDBVestibuleClient
from common.profile_utils import WaitValues, should_download_wait, torrent_match_score
from shows.show_info_update.show_info_utils import extract_episode_time, generate_show_lookup_names, \
    update_entity_torrents
from common.poster_main_colors_util import get_poster_main_colors
from api_feeds import search_feeds_by_imdb_id

logger = logging.getLogger(__name__)


class ShowProfile(models.Model):
    subtitles = models.BooleanField(default=True, help_text="Are subtitles required")
    high_quality_source = models.BooleanField(default=True, help_text="Wait for high quality torrents sources")
    download_automatically = models.BooleanField(default=False)
    wait = models.CharField(choices=WaitValues.WAIT_CHOICES, default=WaitValues.W_1_WEEK, max_length=4,
                            help_text="How long to wait before downloading best available match, "
                                      "if full match not found")
    quality = models.CharField(choices=Quality.QUALITY_CHOICES, default=Quality.QUALITY_1080P, max_length=10,
                               help_text="Show video quality")

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
        return should_download_wait(wait_value=self.wait, first_torrent_created_at=first_torrent_created_at)

    def __str__(self):
        return f"{self.show} - Show Profile"

    def get_torrent_match_score(self, torrent: Torrent) -> Tuple[bool, int]:
        return torrent_match_score(
            torrent=torrent,
            subtitles_required=self.subtitles,
            expected_quality=self.quality,
            high_quality_source_expected=self.high_quality_source
        )


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
    custom_lookup_names = models.TextField(default="", blank=True, null=True)
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
        formatted_aliases = generate_show_lookup_names(imdb_show_data)
        self.lookup_names = "\n".join(formatted_aliases)

    def get_lookup_names_list(self) -> List[str]:
        """
        Returns the lookup names as a list of strings
        """
        return self.lookup_names.split("\n") + self.custom_lookup_names.lower().split("\n")

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

        if (not self.poster_link) or (self.poster_link != poster_link) or (not self.palette):
            self.poster_link = poster_link
            self.extract_palette()

        self.number_of_seasons = imdb_show_data.get("number of seasons", "Unknown")
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
            self.next_episode = f"S{next_episode.season.number} E{next_episode.number} " \
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

        if "episodes" not in show_imdb_data:
            return

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

            # Looking for dead episodes
            for saved_episode in season.episodes.all():
                if saved_episode.number not in season_episodes.keys():
                    print(f"Saved Episode {saved_episode} ({saved_episode.number}) not found in {season_episodes.keys()}")
                    if not saved_episode.torrents.all():
                        print(f"It has no torrents {saved_episode.torrents.all()}, deleting it")
                        saved_episode.delete()


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

        for season in self.seasons.all():
            if season.downloadable:
                downloaded = update_entity_torrents(season, self.profile)
                if downloaded:
                    continue

            for episode in season.episodes.all():
                if episode.downloadable:
                    update_entity_torrents(episode, self.profile)



class Season(models.Model):
    show = models.ForeignKey("shows.Show", related_name="seasons", on_delete=models.CASCADE)
    number = models.IntegerField()
    title = models.CharField(default="", max_length=256)
    should_download = models.BooleanField(default=True)

    @property
    def downloaded_season_torrents(self) -> List[Torrent]:
        return self.torrents.filter(
            episode_data=None, download_status__in=[Torrent.DOWNLOADING, Torrent.READY, Torrent.STOPPED])

    @property
    def is_downloaded(self) -> bool:
        return bool(self.downloaded_season_torrents)

    @property
    def season_matching_torrents(self):
        return self.torrents.filter(episode="", profile_match=True).order_by('-profile_match_score')

    @property
    def season_unmatching_torrents(self):
        return self.torrents.filter(episode="", profile_match=False).order_by('-profile_match_score')

    @property
    def downloadable(self):
        any_episodes_downloaded = any(episode.is_downloaded for episode in self.episodes.all())
        return self.should_download and not self.is_downloaded and self.torrents and not any_episodes_downloaded

    @property
    def first_torrent_created_at(self):
        if self.torrents.filter(episode=""):
            return self.torrents.filter(episode="").order_by('-created')[0].created
        return None

    def __str__(self):
        return f"{self.show} - {self.title}"

    class Meta:
        ordering = ('show', '-number', )

    def prime_torrent(self, must_match_profile=True):
        if self.season_matching_torrents:
            return self.season_matching_torrents[0]

        if not must_match_profile and self.season_unmatching_torrents:
            return self.season_unmatching_torrents[0]

        return None


class Episode(models.Model):
    show = models.ForeignKey("shows.Show", related_name="show_episodes", on_delete=models.CASCADE)
    season = models.ForeignKey("shows.Season", related_name="episodes", on_delete=models.CASCADE)
    number = models.IntegerField()
    title = models.CharField(default="", max_length=256)
    should_download = models.BooleanField(default=True)
    is_aired = models.BooleanField(default=False)
    air_time_code = models.CharField(editable=False, max_length=24, default="9999-99-99")
    air_status = models.CharField(editable=False, max_length=256, default="")

    @property
    def downloaded_torrents(self) -> List[Torrent]:
        return self.torrents.filter(download_status__in=[Torrent.DOWNLOADING, Torrent.READY, Torrent.STOPPED])

    @property
    def is_downloaded(self) -> bool:
        return self.season.is_downloaded or bool(self.downloaded_torrents)

    @property
    def matching_torrents(self):
        return self.torrents.filter(profile_match=True).order_by('-profile_match_score')

    @property
    def unmatching_torrents(self):
        return self.torrents.filter(profile_match=False).order_by('-profile_match_score')

    @property
    def downloadable(self):
        return self.should_download and not self.is_downloaded and self.torrents

    @property
    def first_torrent_created_at(self):
        if self.torrents.all():
            return self.torrents.order_by('-created')[0].created
        return None

    def __str__(self):
        return f"{self.season} - Episode {self.number} - {self.title}"

    class Meta:
        ordering = ('show', '-season', '-number', )

    def prime_torrent(self, must_match_profile=True):
        if self.matching_torrents:
            return self.matching_torrents[0]

        if not must_match_profile and self.unmatching_torrents:
            return self.unmatching_torrents[0]

        return None
