import re
from common.tmdb_client import TheMovieDBVestibuleClient


def generate_movie_lookup_names(title: str, year: str, tmdb_id: int):
    """
    Creates list of possible torrent movie titles
    Example: ["thor.love.and.thunder", "thor.love.and.thunder.2022", "thor.4", "thor.4.2022"]
    """
    aliases = [title]
    with TheMovieDBVestibuleClient() as tmdb:
        aliases += tmdb.get_movie_alternative_titles(tmdb_id)

    aliases += [alias.replace("-", " ") for alias in aliases if "-" in alias]
    formatted_aliases = list()

    for name in aliases:
        formatted_name = re.sub("\([\w\s]+\)", "", name.strip())
        formatted_name = re.sub("[-_\s,]", ".", formatted_name.strip())
        formatted_name = re.sub("[:(),'?!]", "", formatted_name).lower()
        formatted_name = re.sub("\.+", ".", formatted_name.strip())
        formatted_aliases.append(formatted_name)
        formatted_aliases.append(f"{formatted_name}.{year}")

    return formatted_aliases