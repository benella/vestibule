import re
import logging
import json

from datetime import datetime
from typing import List

from django.db import models
from django.utils import timezone

from .movie_profile import MovieProfile
from movies.utils import generate_movie_lookup_names
from torrents.models import MovieTorrent
from feeds.models import Feed
from feeds.feet_item import FeedItem
from common import DEFAULT_POSTER
from common.tmdb_client import TheMovieDBVestibuleClient
from common.poster_main_colors_util import get_poster_main_colors
from api_feeds import search_feeds_by_imdb_id

logger = logging.getLogger(__name__)


class Movie(models.Model):
    tmdb_id = models.IntegerField(default=0)
    imdb_id = models.CharField(max_length=24, blank=True)
    title = models.CharField(max_length=256, default="", blank=True)
    release_date = models.CharField(max_length=24, default="9999-99-99", blank=True)
    poster_link = models.URLField(default="", blank=True)
    status = models.CharField(max_length=256, default="", blank=True)
    palette = models.CharField(max_length=256, default="", blank=True, null=True)
    lookup_names = models.TextField(default="", blank=True, null=True)
    custom_lookup_names = models.TextField(default="", blank=True, null=True)
    profile = models.ForeignKey(MovieProfile, on_delete=models.CASCADE, null=True, blank=True)
    crew = models.JSONField(default=dict, blank=True, null=True)
    runtime = models.IntegerField(default=0, blank=True, null=True)

    class Meta:
        ordering = ("title", )

    def __str__(self):
        return f"{self.title} ({self.year})"

    def save(self, *args, **kwargs):
        self.update_movie_data()

        if self.profile is None:
            new_profile = MovieProfile()
            new_profile.save()
            self.profile = new_profile

        super(Movie, self).save(*args, **kwargs)

    def update_movie_data(self):
        with TheMovieDBVestibuleClient() as tmdb:
            data = tmdb.get_movie_data(self.tmdb_id)

            self.imdb_id = data.get("imdb_id", self.imdb_id).replace("tt", "")
            self.title = data.get("title", self.title)

            release_date = data.get("release_date", "")
            self.release_date = release_date if release_date else "9999-99-99"
            self.status = data.get("status", self.status)

            poster_path = data.get("poster_path")
            if poster_path:
                poster_path = tmdb.get_poster_full_url(poster_path, "w500")
            else:
                poster_path = DEFAULT_POSTER

            if (not self.poster_link) or (self.poster_link != poster_path) or (not self.palette):
                self.poster_link = poster_path
                self.extract_palette()

            self.generate_lookup_names()

            self.runtime = data.get("runtime", 0)
            self.crew = {
                "directors": tmdb.get_movie_directors(self.tmdb_id),
                "production": [company.get("name") for company in data.get("production_companies", [])],
            }

    def delete(self, using=None, keep_parents=False):
        self.profile.delete()

    @property
    def release_date_order_value(self):
        return int(self.release_date.replace("-", ""))

    @property
    def lookup_names_list(self) -> List[str]:
        """
        Returns the lookup names as a list of strings
        """
        return self.lookup_names.split("\n") + self.custom_lookup_names.lower().split("\n")

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

    @property
    def year(self) -> str:
        year = self.release_date.split("-")[0]
        return year if year != "9999" else ""

    @property
    def release_date_text(self) -> str:
        if self.release_date == "9999-99-99":
            return ""

        return datetime.strptime(self.release_date, "%Y-%m-%d").strftime("%b %-d, %Y")

    @property
    def runtime_text(self) -> str:
        if not self.runtime:
            return ""

        result = ""
        hours = self.runtime // 60
        minutes = self.runtime % 60

        if hours:
            result += f"{hours} hr "

        if minutes:
            result += f"{minutes} min"

        return result.strip()

    @property
    def downloading_torrents(self):
        return self.torrents.filter(download_status=MovieTorrent.DOWNLOADING)

    @property
    def formatted_imdb_id(self) -> str:
        return f"tt{self.imdb_id}"

    @property
    def imdb_url(self) -> str:
        if self.imdb_id:
            return f"https://www.imdb.com/title/{self.formatted_imdb_id}"

    @property
    def safe_folder_name(self) -> str:
        return re.sub("[:/]", "", self.title)

    def generate_lookup_names(self):
        formatted_aliases = generate_movie_lookup_names(title=self.title, year=self.year, tmdb_id=self.tmdb_id)
        self.lookup_names = "\n".join(formatted_aliases)

    def get_lookup_names_list(self) -> List[str]:
        """
        Returns the lookup names as a list of strings
        """
        return self.lookup_names.split("\n") + self.custom_lookup_names.lower().split("\n")

    def extract_palette(self):
        if not self.poster_link:
            return
        main_colors = get_poster_main_colors(self.poster_link)
        self.palette = str([color.raw for color in main_colors])

    def find_torrents(self):
        torrents = list()

        for feed in Feed.objects.filter(movies_feed=True):
            torrents += feed.read_feed()

        torrents += search_feeds_by_imdb_id(self.formatted_imdb_id, movie=True)

        relevant_items = list()
        lookup_names = self.get_lookup_names_list()

        for item in torrents:
            if item.parsed_values.movie_title.lower() in lookup_names:
                relevant_items.append(item)

        print("[{}] Found {} torrents for movie {}".format(
            timezone.now().strftime("%d/%b/%Y %H:%M:%S"), len(relevant_items), self.title))

        self.add_torrents_from_feed(relevant_items)

    def add_torrents_from_feed(self, feed_list: List[FeedItem]):
        for feed_item in feed_list:
            try:
                existing_torrent = self.torrents.all().get(title=feed_item.raw_title, feed=feed_item.feed)
                print(f"Torrent titled '{existing_torrent.title}' from {existing_torrent.feed} is not new")
                continue
            except MovieTorrent.DoesNotExist:
                pass

            torrent = MovieTorrent()
            torrent.title = feed_item.raw_title
            torrent.quality = feed_item.parsed_values.video_quality
            torrent.source_type = feed_item.parsed_values.source
            torrent.link = feed_item.link
            torrent.publication_time = feed_item.publication_time
            torrent.feed = feed_item.feed
            torrent.movie = self
            torrent.save()

            profile_match, profile_match_score = self.profile.get_torrent_match_score(torrent)
            torrent.profile_match_score = profile_match_score
            torrent.profile_match = profile_match
            torrent.save()
