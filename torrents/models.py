from django.utils import timezone
from django.db import models


class Torrent(models.Model):

    NEVER_STARTED = "N"
    DOWNLOADING = "D"
    READY = "R"
    STOPPED = "S"

    DOWNLOAD_STATUS_CHOICES = [
        (NEVER_STARTED, "Never Started"),
        (DOWNLOADING, "Downloading"),
        (READY, "Ready"),
        (STOPPED, "Stopped"),
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
    percent_done = models.IntegerField(default=0)
    profile_match_score = models.IntegerField(default=0)
    profile_match = models.BooleanField(default=False)


    class Meta:
        ordering = ('show', '-season', '-episode', '-profile_match_score', 'feed')

    @property
    def was_downloaded(self):
        return self.download_status != Torrent.NEVER_STARTED

    @property
    def is_ready(self):
        return self.download_status == Torrent.READY

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

        if new_status == Torrent.STOPPED:
            self.transmission_torrent_id = None

        self.save()

    def update_percent_done(self, percent_done):
        self.percent_done = percent_done
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

    @property
    def season_episode_title(self):
        return "{season}{episode}".format(
            season=" S{}".format(self.season),
            episode=" E{}".format(self.episode) if self.episode else ""
        )

    @property
    def dashboard_title(self):
        return "{show}{season}{episode} ({quality})".format(
            show=self.show.title,
            season=" S{}".format(self.season),
            episode=" E{}".format(self.episode) if self.episode else "",
            quality=self.quality
        )
