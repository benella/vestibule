import logging
import requests
import datetime
import xml.etree.ElementTree as ET
from dataclasses import dataclass

from common import Quality, Source
from django.utils.text import slugify
from django.db import models

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

    def read_feed(self):
        """
        :rtype: list of FeedItem
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

            if not feed_item.has_expected_keys():
                logger.warning(f"- Skipping item {feed_item.raw_title} ({feed_item.publication_time})")
                continue

            logger.info(f"+ Found item {feed_item.raw_title} ({feed_item.publication_time})")
            feed_items.append(feed_item)

        return feed_items

    def _formatted_publication_time(self, raw_publication_time):
        """
        :type raw_publication_time: str
        :rtype: str
        """
        to_datetime = datetime.datetime.strptime(raw_publication_time, self.feed_time_format)
        return to_datetime.strftime("%d.%m.%Y %H:%M")


@dataclass
class FeedItem:

    raw_title: str
    link: str
    publication_time: str
    feed: Feed

    def has_expected_keys(self):

        if Quality.parse_quality_form_phrase(self.raw_title) is None:
            return False

        if Source.pare_source_from_phrase(self.raw_title) is None:
            return False

        return True
