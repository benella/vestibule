from typing import List
from feeds.feet_item import FeedItem
from api_feeds.rarbg_api_feed import RarbgTorrentsAPIFeed

API_FEEDS = [RarbgTorrentsAPIFeed]


def search_feeds_by_imdb_id(imdb_id: str, movie: bool = False) -> List[FeedItem]:
    """
    Searching for torrents by IMDB ID in all API feeds
    """
    feed_items = list()

    for api_feed in API_FEEDS:
        with api_feed() as feed:
            feed_items += feed.search_by_imdb_id(imdb_id=imdb_id, movie=movie)

    return feed_items
