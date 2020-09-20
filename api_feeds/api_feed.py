import datetime
from typing import List
from abc import abstractmethod
from feeds.feet_item import FeedItem
from feeds.models import Feed


class TorrentsAPIFeed:
    """
    Base class for Torrent API Feeds
    """

    TIME_FORMAT = "%Y-%m-%d %H:%M:%S %z"
    NAME = "TorrentsAPIFeed"
    PRIORITY = 0
    HAS_SUBTITLES = False

    def _get_or_create_feed(self) -> Feed:
        """
        Creating a matching
        """
        feed, created = Feed.objects.get_or_create(
            name=self.name,
            priority=self.priority,
            has_subtitles=self.has_subtitles,
            feed_time_format=self.time_format,
            api_feed=True,
            rss_url=""
        )

        return feed

    @property
    def has_subtitles(self):
        return self.HAS_SUBTITLES

    @property
    def priority(self):
        return self.PRIORITY

    @property
    def name(self):
        return self.NAME

    @property
    def time_format(self):
        return self.TIME_FORMAT

    @abstractmethod
    def __enter__(self):
        pass

    @abstractmethod
    def __exit__(self, exc_type, exc_val, exc_tb):
        pass

    @abstractmethod
    def search_by_imdb_id(self, imdb_id: str) -> List[FeedItem]:
        pass

    @abstractmethod
    def search_by_string(self, string_term: str) -> List[FeedItem]:
        pass

    def _formatted_publication_time(self, raw_publication_time: str) -> str:
        """
        Parse publication time according to Feed time format and return a formatted sting
        """
        to_datetime = datetime.datetime.strptime(raw_publication_time, self.TIME_FORMAT)
        return to_datetime.strftime("%d.%m.%Y %H:%M")
