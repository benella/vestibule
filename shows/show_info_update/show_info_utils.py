from typing import Tuple
from imdb import IMDb, Movie
from datetime import datetime, timedelta
from dataclasses import dataclass


def get_today():
    return datetime.now().replace(hour=0, minute=0, second=0, microsecond=0)


@dataclass
class FutureEpisode:
    show: Movie
    episode_data: Movie
    episode_air_time: datetime
    air_time_unknown: bool
    month_only: bool
    year_only: bool


    def __str__(self):
        return f"Season {self.episode_data['season']} Episode {self.episode_data['episode']} - " \
               f"'{self.episode_data['title']}', {self.airs}."

    @property
    def absolute_episode_air_time_code(self):
        """
        Used to compare Shoes air times. Converts episode airtime into code:
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

        return f"airs in {self.days_from_now} days"


def get_next_episode(show_id: str) -> Tuple[FutureEpisode, str]:
    ia = IMDb()
    show = ia.get_movie(show_id)
    ia.update(show, "episodes")
    future_episodes = list()

    now = get_today()

    for season_number, season_episodes in show["episodes"].items():
        for episode_number, episode in season_episodes.items():
            episode_air_time = datetime.max

            # No Date
            if 'original air date' not in episode.keys():
                future_episodes.append(FutureEpisode(
                    episode_data=episode,
                    episode_air_time=episode_air_time,
                    air_time_unknown=True,
                    month_only=False,
                    year_only=False,
                    show=show
                ))
                continue

            # Full Date
            for date_format in ["%d %b. %Y", "%d %b %Y"]:
                try:
                    episode_air_time = datetime.strptime(episode['original air date'], date_format)
                    if episode_air_time >= now:
                        future_episodes.append(FutureEpisode(
                            episode_data=episode,
                            episode_air_time=episode_air_time,
                            air_time_unknown=False,
                            month_only=False,
                            year_only=False,
                            show=show
                        ))
                    continue
                except ValueError:
                    pass

            # Month Only
            for date_format in ["%b. %Y", "%b %Y"]:
                try:
                    episode_air_time = datetime.strptime(episode['original air date'], date_format)
                    if (episode_air_time.year >= now.year) and \
                            (episode_air_time.month >= now.month):
                        future_episodes.append(FutureEpisode(
                            episode_data=episode,
                            episode_air_time=episode_air_time,
                            air_time_unknown=False,
                            month_only=True,
                            year_only=True,
                            show=show
                        ))
                        continue
                except ValueError:
                    pass

            # Year Only
            try:
                episode_air_time = datetime.strptime(episode['original air date'], "%Y")
                if episode_air_time.year >= now.year:
                    future_episodes.append(FutureEpisode(
                        episode_data=episode,
                        episode_air_time=episode_air_time,
                        air_time_unknown=False,
                        month_only=False,
                        year_only=True,
                        show=show
                    ))
                    continue
            except ValueError:
                pass

    if not future_episodes:
        return None, f"Done or not renewed yet, has no upcoming episodes."

    future_episodes.sort(key=lambda x: x.episode_value)
    return future_episodes[0], f"Continuing, has {len(future_episodes)} upcoming episodes."
