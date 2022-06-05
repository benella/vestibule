import re
import json
from dataclasses import dataclass
from typing import TYPE_CHECKING, Optional
from common import Quality, Source

if TYPE_CHECKING:
    from feeds.models import Feed


@dataclass
class ShowTorrentValues:
    show_title: Optional[str] = None
    season: Optional[int] = None
    episode: Optional[int] = None
    video_quality: Optional[str] = None
    source: Optional[str] = None
    other: Optional[str] = None

    @property
    def is_full_season(self) -> bool:
        return self.episode is None

    def has_expected_keys(self) -> bool:
        return self.show_title is not None \
               and self.source is not None \
               and self.video_quality is not None

    def get_episode(self) -> str:
        if self.episode is not None:
            return str(self.episode)
        return ""

    def get_season(self) -> str:
        if self.season is not None:
            return str(self.season)
        return ""


@dataclass
class MovieTorrentValues:
    movie_title: Optional[str] = None
    video_quality: Optional[str] = None
    source: Optional[str] = None
    other: Optional[str] = None

    def has_expected_keys(self) -> bool:
        return self.movie_title is not None \
               and self.source is not None \
               and self.video_quality is not None


class FeedItem:

    SHOW_TORRENT_RE = re.compile(
        r"(?P<title>[\w.-]+).(S(?P<season>\d\d))(E(?P<episode>\d\d))?(.(?P<episode_name>[\w.-]+))?"
        r"((?P<quality>.\d\d\d\d?p)).(?P<source>[\w\.-]+)")

    def __init__(self, raw_title: str, link: str, publication_time: str, feed: 'Feed'):
        self.raw_title = raw_title
        self.link = link
        self.publication_time = publication_time
        self.feed = feed
        self.parsed_values: Optional[ShowTorrentValues] = None

    def has_expected_keys(self) -> bool:
        """
        Return True if Torrent values were parsed as expected, and has minimal values
        """
        if self.parsed_values is None:
            return False
        return self.parsed_values.has_expected_keys()

    def parse_title(self):
        """
        Matches raw title to Show or Movie patten, and parses values accordingly
        """
        match = FeedItem.SHOW_TORRENT_RE.search(self.raw_title)
        if match is not None:
            self._parse_show_title(match)

    def _parse_show_title(self, match: re.Match):
        self.parsed_values = ShowTorrentValues()

        self.parsed_values.show_title = match.group('title').strip()
        self.parsed_values.season = int(match.group('season'))
        try:
            self.parsed_values.episode = int(match.group('episode'))
        except TypeError:
            self.parsed_values.episode = None
            pass

        self.parsed_values.video_quality = Quality.parse_quality_form_phrase(
            phrase=match.group('quality').replace(".", " ").strip())

        self.parsed_values.other = match.group('source').replace(".", " ").strip()
        self.parsed_values.source = Source.pare_source_from_phrase(phrase=self.parsed_values.other)

    def __dict__(self):
        return {
            "raw_title": self.raw_title,
            "link": self.link,
            "publication_time": self.publication_time,
            "feed": self.feed.name,
            "show_title": self.parsed_values.show_title,
            "season": self.parsed_values.get_season(),
            "episode": self.parsed_values.get_episode(),
            "video_quality": self.parsed_values.video_quality,
            "source": self.parsed_values.source,
            "other": self.parsed_values.other,
            "has_subtitles": self.feed.has_subtitles,
            "full_season": self.parsed_values.is_full_season,
        }


class MovieFeedItem:
    MOVIE_TORRENT_RE = re.compile(
        r"(?P<title>[\w.-]+(.(?P<year>\d{4})))(.(?P<version>[\w]+))?.(?P<quality>\d{3,4}p).(?P<source>[\w\.-]+)-(?P<encoder>[\w]+)")

    def __init__(self, raw_title: str, link: str, publication_time: str, feed: 'Feed'):
        self.raw_title = raw_title
        self.link = link
        self.publication_time = publication_time
        self.feed = feed
        self.parsed_values: Optional[MovieTorrentValues] = None

    def has_expected_keys(self) -> bool:
        """
        Return True if Torrent values were parsed as expected, and has minimal values
        """
        if self.parsed_values is None:
            return False
        return self.parsed_values.has_expected_keys()

    def parse_title(self):
        """
        Matches raw title to Movie patten, and parses values accordingly
        """
        match = MovieFeedItem.MOVIE_TORRENT_RE.search(self.raw_title)
        if match is not None:
            self._parse_movie_title(match)

    def _parse_movie_title(self, match: re.Match):
        self.parsed_values = MovieTorrentValues()

        self.parsed_values.movie_title = match.group('title').strip()
        self.parsed_values.video_quality = Quality.parse_quality_form_phrase(
            phrase=match.group('quality').replace(".", " ").strip())

        self.parsed_values.other = match.group('source').replace(".", " ").strip()
        self.parsed_values.source = Source.pare_source_from_phrase(phrase=self.parsed_values.other)
