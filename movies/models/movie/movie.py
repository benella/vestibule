import re
import logging
import json

from typing import List

from django.db import models

from .movie_profile import MovieProfile
from movies.utils import generate_movie_lookup_names
from torrents.models import MovieTorrent
from common import DEFAULT_POSTER
from common.tmdb_client import TheMovieDBVestibuleClient
from common.poster_main_colors_util import get_poster_main_colors

logger = logging.getLogger(__name__)


class Movie(models.Model):
    tmdb_id = models.IntegerField(default=0)
    imdb_id = models.CharField(max_length=24, blank=True)
    title = models.CharField(max_length=256, default="", blank=True)
    release_date = models.CharField(max_length=24, default="", blank=True)
    poster_link = models.URLField(default="", blank=True)
    status = models.CharField(max_length=256, default="", blank=True)
    palette = models.CharField(max_length=256, default="", blank=True, null=True)
    lookup_names = models.TextField(default="", blank=True, null=True)
    custom_lookup_names = models.TextField(default="", blank=True, null=True)
    imdb_rating = models.CharField(max_length=24, default="", blank=True)
    profile = models.ForeignKey(MovieProfile, on_delete=models.CASCADE, null=True, blank=True)

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
            self.release_date = data.get("release_date", self.release_date)
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

    def delete(self, using=None, keep_parents=False):
        self.profile.delete()

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
        return self.release_date.split("-")[0]

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

    def extract_palette(self):
        if not self.poster_link:
            return
        main_colors = get_poster_main_colors(self.poster_link)
        self.palette = str([color.raw for color in main_colors])