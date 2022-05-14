import logging
from typing import Tuple

from django.utils import timezone
from dataclasses import dataclass
from datetime import timedelta

from torrents.models import TorrentBase
from common import Quality, Source

logger = logging.getLogger(__name__)

SCORE_LEVEL_UP = 100


@dataclass
class WaitValues:
    W_NONE = "N"
    W_1_DAY = "1D"
    W_2_DAY = "2D"
    W_3_DAY = "3D"
    W_4_DAY = "4D"
    W_5_DAY = "5D"
    W_6_DAY = "6D"
    W_1_WEEK = "1W"
    W_FOREVER = "F"

    WAIT_CHOICES = [
        (W_NONE, "Don't Wait"),
        (W_1_DAY, "Up to a Day"),
        (W_2_DAY, "Up to 2 Days"),
        (W_3_DAY, "Up to 3 Days"),
        (W_4_DAY, "Up to 4 Days"),
        (W_5_DAY, "Up to 5 Days"),
        (W_6_DAY, "Up to 6 Days"),
        (W_1_WEEK, "Up to a Week"),
        (W_FOREVER, "Forever"),
    ]


def should_download_wait(wait_value, first_torrent_created_at: timezone) -> bool:
    logger.info(f"should_download_wait, first_torrent_created_at: {first_torrent_created_at}")

    if wait_value == WaitValues.W_NONE:
        return False

    if wait_value == WaitValues.W_FOREVER:
        return True

    if wait_value == WaitValues.W_1_DAY:
        days = 1

    elif wait_value == WaitValues.W_2_DAY:
        days = 2

    elif wait_value == WaitValues.W_3_DAY:
        days = 3

    elif wait_value == WaitValues.W_4_DAY:
        days = 4

    elif wait_value == WaitValues.W_5_DAY:
        days = 5

    elif wait_value == WaitValues.W_6_DAY:
        days = 6

    elif wait_value == WaitValues.W_1_WEEK:
        days = 7

    else:
        return True

    if not first_torrent_created_at:
        return True

    return timezone.now() < first_torrent_created_at + timedelta(days=days)


def torrent_feed_score(subtitles_required: bool, torrent: TorrentBase) -> Tuple[bool, int]:
    score = 0
    match = False

    # If subtitles are not required, match
    if not subtitles_required:
        match = True

    # If subtitles are required, match only for feeds with subtitles
    if torrent.feed.has_subtitles and subtitles_required:
        match = True
        score += SCORE_LEVEL_UP

    return match, score + int(((torrent.feed.priority + 1) * 0.1 * SCORE_LEVEL_UP))


def torrent_quality_score(expected_quality: str, torrent: TorrentBase) -> Tuple[bool, int]:
    diff = Quality.difference(quality=torrent.quality, expected_quality=expected_quality)

    # Quality Match
    if diff == 0:
        return True, SCORE_LEVEL_UP

    # Quality lower
    if diff < 0:
        return False, diff * SCORE_LEVEL_UP

    # Quality Higher
    if diff > 0:
        return False, int(-0.3 * diff * SCORE_LEVEL_UP)


def torrent_source_score(high_quality_source_expected: bool, torrent: TorrentBase) -> Tuple[bool, int]:
    if not high_quality_source_expected:
        return True, 0

    source_score = Source.source_value(torrent.source_type)
    return source_score >= SCORE_LEVEL_UP, Source.source_value(torrent.source_type)


def torrent_match_score(
        torrent: TorrentBase,
        subtitles_required: bool,
        expected_quality: str,
        high_quality_source_expected: bool) -> Tuple[bool, int]:
    feed_match, feed_score = torrent_feed_score(subtitles_required=subtitles_required, torrent=torrent)
    quality_match, quality_score = torrent_quality_score(expected_quality=expected_quality, torrent=torrent)
    source_match, source_score = torrent_source_score(high_quality_source_expected=high_quality_source_expected, torrent=torrent)

    logger.info(f"{torrent} Scores - feed: {feed_score}, quality: {quality_score}, source: {source_score}")
    total_score = feed_score + quality_score + source_score
    total_match = feed_match and quality_match and source_match
    logger.info(f"> Total score: {total_score}, Total match: {total_match}")
    return total_match, total_score
