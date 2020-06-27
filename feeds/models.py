import logging
import requests
import datetime
import xml.etree.ElementTree as ET
from typing import List

from django.utils.text import slugify
from django.db import models
from feeds.feet_item import FeedItem

logger = logging.getLogger(__name__)


class Feed(models.Model):
    name = models.CharField(max_length=40)
    rss_url = models.URLField()
    last_read = models.DateTimeField(blank=True, null=True)
    feed_time_format = models.CharField(max_length=256, default="", blank=True)
    slug = models.SlugField(max_length=20, default="", editable=False)
    priority = models.IntegerField(default=0)
    has_subtitles = models.BooleanField(default=False)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ('-priority', )

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)
        super(Feed, self).save(*args, **kwargs)

    def read_feed(self) -> List[FeedItem]:
        """
        Read RSS feed, and return a a list of FeedItem
        """
        feed = requests.get(self.rss_url)
        root = ET.fromstring(feed.text)
        feed_items = list()

        print(f"Reading {self.name} feed")
        for item in root[0].findall("item"):

            feed_item = FeedItem(
                raw_title=item.find("title").text,
                link=item.find("link").text,
                publication_time=self._formatted_publication_time(item.find("pubDate").text),
                feed=self
            )

            feed_item.parse_title()

            if not feed_item.has_expected_keys():
                logger.warning(f"- Skipping item {feed_item.raw_title} ({feed_item.publication_time})")
                continue

            logger.info(f"+ Found item {feed_item.raw_title} ({feed_item.publication_time})")
            feed_items.append(feed_item)

        return feed_items

    def _formatted_publication_time(self, raw_publication_time: str) -> str:
        """
        Parse publication time according to Feed time format and return a formatted sting
        """
        to_datetime = datetime.datetime.strptime(raw_publication_time, self.feed_time_format)
        return to_datetime.strftime("%d.%m.%Y %H:%M")
