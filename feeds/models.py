import requests
import datetime
import xml.etree.ElementTree as ET
from collections import namedtuple

from django.utils.text import slugify
from django.db import models

FeedItem = namedtuple("FeedItem", "raw_title link publication_time feed")


class Feed(models.Model):
    name = models.CharField(max_length=40)
    rss_url = models.URLField()
    last_read = models.DateTimeField(blank=True, null=True)
    feed_time_format = models.CharField(max_length=256, default="", blank=True)
    slug = models.SlugField(max_length=20, default="", editable=False)
    priority = models.IntegerField(default=0)

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

        for item in root[0].findall("item"):

            feed_item = FeedItem(
                raw_title=item.find("title").text,
                link=item.find("link").text,
                publication_time=self._formatted_publication_time(item.find("pubDate").text),
                feed=self
            )

            print("Found show {title} ({time})".format(
                title=feed_item.raw_title,
                time=feed_item.publication_time
            ))
            feed_items.append(feed_item)

        self.last_read = datetime.datetime.now()
        self.save()

        return feed_items

    def _formatted_publication_time(self, raw_publication_time):
        """
        :type raw_publication_time: str
        :rtype: str
        """
        to_datetime = datetime.datetime.strptime(raw_publication_time, self.feed_time_format)
        return to_datetime.strftime("%d.%m.%Y %H:%M")

    def find_items_for_subscribed_show(self, show_name):
        """
        :type show_name: str
        :rtype: list of FeedItem
        """
        lookup_name = show_name.replace(" ", ".").replace("-", ".").replace("_", ".").replace(":", ".")
        relevant_items = list()

        for item in self.read_feed():
            if lookup_name in item.raw_title:
                relevant_items.append(item)

        return relevant_items
