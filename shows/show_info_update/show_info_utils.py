from typing import Tuple
from imdb import Movie
from datetime import datetime
from dataclasses import dataclass


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
