import logging
import re
from typing import TYPE_CHECKING, Tuple, Union
from imdb import Movie
from datetime import datetime
from dataclasses import dataclass

if TYPE_CHECKING:
    from shows.models import Season, Episode, ShowProfile
from torrents_manager.transmission_client import TransmissionClient

logger = logging.getLogger(__name__)


def get_today():
    return datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)


@dataclass
class EpisodeTimeData:
    episode_data: Movie
    episode_air_time: datetime
    air_time_unknown: bool
    month_only: bool
    year_only: bool

    @property
    def absolute_episode_air_time_code(self):
        """
        Used to compare Show air times. Converts episode airtime into code:
            '2020-07-24', '2020-99-99', '2020-10-99', '9999-99-99'
        """
        if self.air_time_unknown:
            return "9999-99-99"

        if self.month_only:
            return f"{self.episode_air_time.year}-{self.episode_air_time.strftime('%m')}-99"

        if self.year_only:
            return f"{self.episode_air_time.year}-99-99"

        return f"{self.episode_air_time.year}-" \
               f"{self.episode_air_time.strftime('%m')}-" \
               f"{self.episode_air_time.strftime('%d')}"

    @property
    def days_from_now(self) -> int:
        return self.time_from_now.days

    @property
    def time_from_now(self):
        return self.episode_air_time - get_today()

    @property
    def episode_value(self) -> int:
        return (self.episode_data["season"] * 1000) + self.episode_data["episode"]

    @property
    def airs(self) -> str:
        if self.air_time_unknown:
            return "air time unknown"

        if self.month_only:
            return f"airs sometime in {self.episode_air_time.strftime('%B')} {self.episode_air_time.year}"

        if self.year_only:
            return f"airs sometime in {self.episode_air_time.year}"

        if self.days_from_now == 0:
            return "airs today"

        if self.days_from_now == 1:
            return "airs tomorrow"

        if self.days_from_now > 0:
            return f"airs in {self.days_from_now} days"

        if abs(self.days_from_now) < 15:
            return f"aired {abs(self.days_from_now)} days ago"

        return f"aired on {self.episode_air_time.strftime('%B %-d, %Y')}"


def extract_episode_time(episode: Movie) -> Tuple[bool, EpisodeTimeData]:
    """
    Extract Episode timing data from IMDB episode data.
    Returns <bool> if the episode was aired, and the episode
    """
    now = get_today()
    episode_air_time = datetime.max

    # No Date
    if 'original air date' not in episode.keys():
        return False, EpisodeTimeData(
            episode_data=episode,
            episode_air_time=episode_air_time,
            air_time_unknown=True,
            month_only=False,
            year_only=False,
        )

    # Full Date
    for date_format in ["%d %b. %Y", "%d %b %Y"]:
        try:
            episode_air_time = datetime.strptime(episode['original air date'], date_format)
            if episode_air_time >= now:
                return False, EpisodeTimeData(
                    episode_data=episode,
                    episode_air_time=episode_air_time,
                    air_time_unknown=False,
                    month_only=False,
                    year_only=False
                )

        except ValueError:
            pass

    # Month Only
    for date_format in ["%b. %Y", "%b %Y"]:
        try:
            episode_air_time = datetime.strptime(episode['original air date'], date_format)
            if (episode_air_time.year >= now.year) and (episode_air_time.month >= now.month):
                return False, EpisodeTimeData(
                    episode_data=episode,
                    episode_air_time=episode_air_time,
                    air_time_unknown=False,
                    month_only=True,
                    year_only=True
                )
        except ValueError:
            pass

    # Year Only
    try:
        episode_air_time = datetime.strptime(episode['original air date'], "%Y")
        if episode_air_time.year >= now.year:
            return False, EpisodeTimeData(
                episode_data=episode,
                episode_air_time=episode_air_time,
                air_time_unknown=False,
                month_only=False,
                year_only=True
            )
    except ValueError:
        pass

    return True, EpisodeTimeData(
        episode_data=episode,
        episode_air_time=episode_air_time,
        air_time_unknown=False,
        month_only=False,
        year_only=False,
    )


def generate_show_lookup_names(imdb_show_data: dict):
    """
    Creates list of possible torrent show titles
    Example: ["primal", "primal.2019", "genndy.tartakovskys.primal", "genndy.tartakovskys.primal.2019"]
    """
    aliases = [imdb_show_data.get("title", "")] + imdb_show_data.get("akas", [])
    additional_aliases = [alias.replace("-", " ") for alias in aliases if "-" in alias]
    aliases += additional_aliases
    year = imdb_show_data.get("year", "")
    formatted_aliases = list()

    for name in aliases:
        formatted_name = re.sub("\([\w\s]+\)", "", name.strip())
        formatted_name = re.sub("[-_\s,]", ".", formatted_name.strip())
        formatted_name = re.sub("[:(),'?!]", "", formatted_name).lower()
        formatted_name = re.sub("\.+", ".", formatted_name.strip())
        formatted_aliases.append(formatted_name)
        formatted_aliases.append(f"{formatted_name}.{year}")

    return formatted_aliases


def update_entity_torrents(entity: Union['Season', 'Episode'], showProfile: 'ShowProfile') -> bool:
    should_wait = showProfile.should_wait(entity.first_torrent_created_at)
    prime_torrent = entity.prime_torrent(must_match_profile=should_wait)

    if prime_torrent:
        logger.info(f'{entity} - Prime torrent found - {prime_torrent}')
        with TransmissionClient() as transmission:
            if transmission.is_up:
                downloaded, message = transmission.download_torrent(prime_torrent)
                logger.info(message)
                return downloaded

    logger.info(f'{entity} - Could not download prime torrent')
    return False
