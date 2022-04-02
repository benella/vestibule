import rarbgapi
import time
import logging

from typing import List, Callable
from api_feeds.api_feed import TorrentsAPIFeed
from feeds.feet_item import FeedItem

logger = logging.getLogger(__name__)


class RarbgTorrentsAPIFeed(TorrentsAPIFeed):
    """
    RARBG Torrents API Feed
    """

    TIME_FORMAT = "%Y-%m-%d %H:%M:%S %z"
    API_REQUEST_GAP = 3
    NAME = "RARBG API"
    PRIORITY = 8
    HAS_SUBTITLES = False

    def __init__(self):
        self._client = None
        self._last_api_request = time.time()

    def __enter__(self):
        self._client = rarbgapi.RarbgAPI()
        self._feed = self._get_or_create_feed()
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        pass

    def _api_request(self, method: Callable, arguments: dict) -> List[rarbgapi.Torrent]:
        """
        Making client requests while keeping 1 request / 2 seconds
        """
        sleep_time = (self._last_api_request + self.API_REQUEST_GAP) - time.time()
        if sleep_time > 0:
            time.sleep(sleep_time)

        try:
            result = method(**arguments)
            if not result:
                time.sleep(self.API_REQUEST_GAP * 2)
                result = method(**arguments)

        except ValueError as e:
            logger.warning(f"Got error: {str(e)}")
            result = []

        self._last_api_request = time.time()
        return result

    def search_by_imdb_id(self, imdb_id: str) -> List[FeedItem]:
        print(f"Searching {self.name} with {imdb_id}")
        arguments = {"search_imdb": imdb_id, "extended_response": True}
        try:
            torrents = self._api_request(method=self._client.search, arguments=arguments)
        except Exception as e:
            print(f"Failed to get torrents ({e})")
            torrents = []
        return self._convert_api_torrents_to_feed_items(api_torrents=torrents)

    def search_by_string(self, string_term: str) -> List[FeedItem]:
        arguments = {"search_string": string_term, "extended_response": True}
        torrents = self._api_request(method=self._client.search, arguments=arguments)
        return self._convert_api_torrents_to_feed_items(api_torrents=torrents)

    def _convert_api_torrents_to_feed_items(self, api_torrents: List[rarbgapi.Torrent]) -> List[FeedItem]:
        """
        Converting a list of rarbgapi.Torrent to a list of FeedItem
        """
        feed_items = list()

        for torrent in api_torrents:
            feed_item = FeedItem(
                raw_title=torrent.title,
                link=torrent.download,
                publication_time=self._formatted_publication_time(raw_publication_time=torrent.pubdate),
                feed=self._feed
            )

            feed_item.parse_title()

            if not feed_item.has_expected_keys():
                logger.warning(f"- Skipping item {feed_item.raw_title} ({feed_item.publication_time})")
                continue

            logger.info(f"+ Found item {feed_item.raw_title} ({feed_item.publication_time})")
            feed_items.append(feed_item)

        return feed_items
