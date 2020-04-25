import re
from django.utils import timezone
from django.db import models
from common import Quality, Source

SEASON_RE = re.compile("\.S(?P<season>\d+)")
EPISODE_RE = re.compile("E(?P<episode>\d+)")


class Torrent(models.Model):

    NEVER_STARTED = "N"
    DOWNLOADING = "D"
    READY = "R"

    DOWNLOAD_STATUS_CHOICES = [
        (NEVER_STARTED, "Never Started"),
        (DOWNLOADING, "Downloading"),
        (READY, "Ready"),
    ]

    created = models.DateTimeField(editable=False, default=timezone.now)
    modified = models.DateTimeField(default=timezone.now)

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
    profile_match_score = models.IntegerField(default=0)
    profile_match = models.BooleanField(default=False)


    class Meta:
        ordering = ('show', '-season', '-episode', '-profile_match_score', 'feed')

    @property
    def was_downloaded(self):
        return self.download_status != Torrent.NEVER_STARTED

    def __str__(self):
        return "{show}{season}{episode} ({quality}) ({source}) ({feed})".format(
            show=self.show.title,
            season=" S{}".format(self.season),
            episode=" E{}".format(self.episode) if self.episode else "",
            quality=self.quality,
            source=self.source_type,
            feed=self.feed.name
        )

    def save(self, *args, **kwargs):
        if not self.id:
            self.created = timezone.now()

        return super(Torrent, self).save(*args, **kwargs)

    def update_download_status(self, new_status):
        self.download_status = new_status
        self.modified = timezone.now()
        self.save()

    @property
    def download_status_display(self):
        if self.download_status == Torrent.NEVER_STARTED:
            return "Download"
        return self.get_download_status_display()

    @property
    def short_title(self):
        return "{show}{season}{episode}".format(
            show=self.show.title,
            season=" S{}".format(self.season),
            episode=" E{}".format(self.episode) if self.episode else ""
        )

    @staticmethod
    def parse_torrent_details(raw_title):
        season = "Unknown"
        episode = ""

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

        quality = Quality.parse_quality_form_phrase(raw_title)
        source = Source.pare_source_from_phrase(raw_title)

        return season, episode, quality, source
