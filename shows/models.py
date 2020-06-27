import logging
import re
from typing import Tuple, List
from datetime import timedelta
from django.utils import timezone
from collections import defaultdict

from django.db import models
from django.utils.text import slugify
from django.contrib import messages

from imdb import IMDb
from feeds.models import Feed
from feeds.feet_item import FeedItem
from torrents.models import Torrent
from torrents_manager.transmission_client import TransmissionClient
from common import Quality, Source
from common.tvdb_client import TVDBVestibuleClient
from shows.show_info_update.show_info_utils import get_next_episode

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
    next_episode = models.CharField(max_length=256, default="", blank=True)
    poster_link = models.URLField(default="", blank=True)
    thumbnail_link = models.URLField(default="", blank=True)
    slug = models.SlugField(max_length=20, default="", editable=False)
    profile = models.ForeignKey(ShowProfile, on_delete=models.CASCADE, null=True, blank=True)
    lookup_names = models.TextField(default="", blank=True, null=True)

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

        self.update_show_meta_data()

        self.slug = slugify(self.title)
        super(Show, self).save(*args, **kwargs)

    def generate_lookup_names(self, imdb_show_data: dict):
        """
        Creates list of possible torrent show titles, and keeps it
        Example: ["primal", "primal.2019", "genndy.tartakovskys.primal", "genndy.tartakovskys.primal.2019"]
        """
        aliases = [self.title] + imdb_show_data["akas"]
        formatted_aliases = list()

        for name in aliases:
            formatted_name = re.sub("\([\w\s]+\)", "", name.strip())
            formatted_name = re.sub("[-_\s,]", ".", formatted_name.strip())
            formatted_name = re.sub("[:(),']", "", formatted_name).lower()
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
    def seasons(self):
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

    def update_show_meta_data(self):
        ia = IMDb()
        imdb_show_data = ia.get_movie(self.imdb_id)

        if not self.network:
            with TVDBVestibuleClient() as tvdb_client:
                self.network = tvdb_client.get_show_original_network(self.imdb_id)

        self.poster_link = imdb_show_data.get("full-size cover url")
        self.thumbnail_link = imdb_show_data.get("cover url")
        self.number_of_seasons = imdb_show_data.get("number of seasons")
        self.year = imdb_show_data.get("year")
        self.generate_lookup_names(imdb_show_data)

        try:
            self.runtime = imdb_show_data.get("runtimes")[0]
        except (KeyError, TypeError):
            pass

    def update_show_info(self, request=None):
        self.update_show_meta_data()
        next_episode, show_status = get_next_episode(self.imdb_id)
        self.status = show_status

        if next_episode:
            self.next_episode = str(next_episode)
        else:
            self.next_episode = ""
        self.save()

        if request is not None:
            messages.add_message(request, messages.SUCCESS, f"'{self}' info updated")

    def find_show_torrents(self, request=None, torrents: List[FeedItem] = None):
        """
        Read or get Feeds, find and add torrents matching the show
        """
        if torrents is None:
            torrents = list()
            for feed in Feed.objects.all():
                torrents += feed.read_feed()

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

            if feed_item.raw_title in self._show_torrents_titles:
                print("Torrent titled {} is not new".format(feed_item.raw_title))
                continue

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
        for season, episodes in self.seasons.items():
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
