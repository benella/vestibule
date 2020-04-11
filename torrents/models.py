import re
from django.db import models

SEASON_RE = re.compile("\.S(?P<season>\d+)")
EPISODE_RE = re.compile("E(?P<episode>\d+)")
QUALITIES = {"720p": "720P", "1080p": "1080P", "2160p": "4K"}


class Torrent(models.Model):

    NEVER_STARTED = "N"
    DOWNLOADING = "D"
    READY = "R"

    DOWNLOAD_STATUS_CHOICES = [
        (NEVER_STARTED, "Never Started"),
        (DOWNLOADING, "Downloading"),
        (READY, "Ready"),
    ]

    link = models.CharField(default="", blank=True, max_length=500)
    title = models.CharField(max_length=2160, default="")
    show = models.ForeignKey("shows.Show", related_name="torrents", on_delete=models.CASCADE)
    feed = models.ForeignKey("feeds.Feed", related_name="torrents", on_delete=models.PROTECT, blank=True, null=True)
    season = models.CharField(max_length=20, default="", blank=True)
    episode = models.CharField(max_length=20, default="", blank=True)
    publication_time = models.CharField(max_length=64, blank=True)
    source_type = models.CharField(max_length=40, default="", blank=True)
    quality = models.CharField(max_length=20, default="", blank=True)

    transmission_torrent_id = models.IntegerField(default=0, blank=True)
    download_status = models.CharField(choices=DOWNLOAD_STATUS_CHOICES, default=NEVER_STARTED, max_length=1)

    class Meta:
        ordering = ('show', '-season', '-episode', 'feed')

    def __str__(self):
        return "{show}{season}{episode}{quality} ({feed})".format(
            show=self.show.title,
            season=" S{}".format(self.season),
            episode="E{}".format(self.episode) if self.episode else "",
            quality=" ({})".format(self.quality),
            feed=self.feed.name
        )

    @property
    def download_status_display(self):
        if self.download_status == Torrent.NEVER_STARTED:
            return ""
        return self.get_download_status_display()

    @property
    def short_title(self):
        return "{show}{season}{episode}".format(
            show=self.show.title,
            season=" S{}".format(self.season),
            episode="E{}".format(self.episode) if self.episode else ""
        )

    @staticmethod
    def parse_torrent_details(raw_title):
        season = "Unknown"
        episode = ""
        quality = "Unknown"

        season_match = SEASON_RE.search(raw_title)
        if season_match:
            try:
                season = season_match.group("season")
            except AttributeError:
                pass

        episode_match = EPISODE_RE.search(raw_title)
        if episode_match:
            try:
                episode = episode_match.group("episode")
            except AttributeError:
                pass

        for quality_option in QUALITIES.keys():
            if quality_option in raw_title:
                quality = QUALITIES[quality_option]
                break

        return season, episode, quality
