import logging
from typing import Tuple

from django.db import models
from django.utils import timezone

from torrents.models import MovieTorrent
from common import Quality
from common.profile_utils import WaitValues, should_download_wait, torrent_match_score

logger = logging.getLogger(__name__)


class MovieProfile(models.Model):
    subtitles = models.BooleanField(default=True, help_text="Are subtitles required")
    high_quality_source = models.BooleanField(default=True, help_text="Wait for high quality torrents sources")
    download_automatically = models.BooleanField(default=False)
    wait = models.CharField(choices=WaitValues.WAIT_CHOICES, default=WaitValues.W_1_WEEK, max_length=4,
                            help_text="How long to wait before downloading best available match, "
                                      "if full match not found")
    quality = models.CharField(choices=Quality.QUALITY_CHOICES, default=Quality.QUALITY_1080P, max_length=10,
                               help_text="Movie video quality")

    def save(self, *args, **kwargs):
        super(MovieProfile, self).save(*args, **kwargs)
        for movie in self.movie_set.all():
            for torrent in movie.torrents.all():
                profile_match, profile_match_score = self.get_torrent_match_score(torrent)
                torrent.profile_match_score = profile_match_score
                torrent.profile_match = profile_match
                torrent.save()

    def should_wait(self, first_torrent_created_at: timezone) -> bool:
        return should_download_wait(wait_value=self.wait, first_torrent_created_at=first_torrent_created_at)

    @property
    def movie(self):
        try:
            return self.movie_set.all()[0]
        except IndexError:
            return "Movie-less"

    def __str__(self):
        return f"{self.movie} - Movie Profile"

    def get_torrent_match_score(self, torrent: MovieTorrent) -> Tuple[bool, int]:
        return torrent_match_score(
            torrent=torrent,
            subtitles_required=self.subtitles,
            expected_quality=self.quality,
            high_quality_source_expected=self.high_quality_source
        )