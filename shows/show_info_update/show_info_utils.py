from typing import Tuple
from imdb import IMDb, Movie
from datetime import datetime, timedelta
from dataclasses import dataclass


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
    def days_from_now(self) -> int:
        return self.time_from_now.days

    @property
    def time_from_now(self):
        return self.episode_air_time - datetime.now()

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

    for season_number, season_episodes in show["episodes"].items():
        for episode_number, episode in season_episodes.items():
            episode_air_time = datetime.now() + timedelta(days=365)

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
                    if episode_air_time >= datetime.now():
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

            # Moth Only
            for date_format in ["%b. %Y", "%b %Y"]:
                try:
                    episode_air_time = datetime.strptime(episode['original air date'], date_format)
                    if (episode_air_time.year >= datetime.now().year) and \
                            (episode_air_time.month >= datetime.now().month):
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
                if episode_air_time.year >= datetime.now().year:
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


def _released_status(datetime_object):
    difference = datetime.now() - datetime_object
    days = difference.days
    if days == 0:
        return "Released Today"
    if days == 1:
        return "Released Yesterday"
    if days <= 31:
        return "Released {days} days ago".format(days=days)

    return "Released on {date}".format(date=datetime_object.strftime("%d %b %Y"))


def get_movie_status(imdb_id):
    ia = IMDb()
    movie = ia.get_movie(imdb_id)
    release_date_str = movie.get("original air date").split(" (")[0]
    fake_future_episode = None
    # Full Date
    for date_format in ["%d %b. %Y", "%d %b %Y"]:
        try:
            release_date = datetime.strptime(release_date_str, date_format)
            if datetime.now() > release_date:
                return _released_status(release_date)
            if release_date >= datetime.now():
                fake_future_episode = FutureEpisode(
                    episode_data=None,
                    episode_air_time=release_date,
                    air_time_unknown=False,
                    month_only=False,
                    year_only=False,
                    show=movie
                )
        except ValueError:
            pass

    # Moth Only
    for date_format in ["%b. %Y", "%b %Y"]:
        try:
            release_date = datetime.strptime(release_date_str, date_format)
            if datetime.now() > release_date:
                return _released_status(release_date)
            fake_future_episode = FutureEpisode(
                episode_data=None,
                episode_air_time=release_date,
                air_time_unknown=False,
                month_only=True,
                year_only=False,
                show=movie
            )
        except ValueError:
            pass

    # Year Only
    try:
        release_date = datetime.strptime(release_date_str, "%Y")
        if datetime.now() > release_date:
            return _released_status(release_date)
        fake_future_episode = FutureEpisode(
            episode_data=None,
            episode_air_time=release_date,
            air_time_unknown=False,
            month_only=False,
            year_only=True,
            show=movie
        )
    except ValueError:
        pass

    if fake_future_episode is None:
        return "Unknown release date"

    return fake_future_episode.airs
