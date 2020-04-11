from django.db import models
from django.utils.text import slugify
from imdb import IMDb
from feeds.models import Feed
from torrents.models import Torrent
from django.contrib import messages
from notifications import pushover
from datetime import datetime


class Show(models.Model):
    STATUS_OPTIONS = (
        ('r', 'Running'),
        ('e', 'Ended'),
        ('u', 'Unknown'),
        ('w', 'Waiting')
    )

    imdb_id = models.CharField(max_length=24)
    title = models.CharField(max_length=256, default="", blank=True)
    year = models.CharField(max_length=24, default="", blank=True)
    number_of_seasons = models.CharField(max_length=24, default="", blank=True)
    runtime = models.CharField(max_length=24, default="", blank=True)
    status = models.CharField(max_length=24, default="u", choices=STATUS_OPTIONS)
    poster_link = models.URLField(default="", blank=True)
    slug = models.SlugField(max_length=20, default="", editable=False)

    class Meta:
        ordering = ('title', )

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):

        ia = IMDb()
        imdb_show_data = ia.get_movie(self.imdb_id)
        self.poster_link = imdb_show_data.get("full-size cover url")

        if not self.title:
            self.title = imdb_show_data.get("title")

        self.year = imdb_show_data.get("year")
        self.number_of_seasons = imdb_show_data.get("number of seasons")

        try:
            self.runtime = imdb_show_data.get("runtimes")[0]
        except KeyError:
            pass

        self.slug = slugify(self.title)
        super(Show, self).save(*args, **kwargs)


    @property
    def _show_torrents_titles(self):
        return [torrent.title for torrent in self.torrents.all()]

    def find_show_torrents(self, request=None, torrents: list = None):

        if torrents is None:
            torrents = list()
            for feed in Feed.objects.all():
                torrents += feed.read_feed()

        lookup_name = self.title.replace(" ", ".").replace("-", ".").replace("_", ".").replace(":", ".")
        relevant_items = list()

        for item in torrents:
            if lookup_name in item.raw_title:
                relevant_items.append(item)

        print("[{}] Found {} torrents for show {}".format(
            datetime.now().strftime("%d/%b/%Y %H:%M:%S"), len(relevant_items), self.title))

        self.add_torrents_from_feed(relevant_items, request)

    def add_torrents_from_feed(self, feed_list, request=None):
        """
        :type feed_list: list of feeds.models.FeedItem
        """

        new_torrents = list()

        for feed_item in feed_list:

            if feed_item.raw_title in self._show_torrents_titles:
                print("Torrent titled {} is not new".format(feed_item.raw_title))
                continue

            season, episode, quality = Torrent.parse_torrent_details(feed_item.raw_title)

            torrent = Torrent()
            torrent.title = feed_item.raw_title
            torrent.season = season
            torrent.episode = episode
            torrent.quality = quality
            torrent.link = feed_item.link
            torrent.publication_time = feed_item.publication_time
            torrent.feed = feed_item.feed
            torrent.show = self
            torrent.save()

            new_torrents.append(torrent)

        if request is not None:
            if new_torrents:
                messages.add_message(request, messages.SUCCESS, "{count} new torrents found for {show}".format(
                    count=len(new_torrents), show=self.title))

            else:
                messages.add_message(request, messages.INFO, "No new Torrents found for {show}".format(show=self.title))

        else:
            if new_torrents:
                pushover.send_message(title="New {show} Torrents found".format(show=self.title),
                                      message="\n".join([str(torrent) for torrent in new_torrents]))
