import requests
from typing import List, Tuple

import tmdbsimple as tmdb
from vestibule_configurations.models import VestibuleConfiguration

DEFAULT_IMAGES_BASE_URL = "http://image.tmdb.org/t/p/"

class TheMovieDBVestibuleClient:

    def __init__(self):
        try:
            api_key = VestibuleConfiguration.objects.get(name="TMDB API Key").value
        except VestibuleConfiguration.DoesNotExist:
            api_key = ""

        self._api_key = api_key

        self.client = tmdb
        self.images_base_url = DEFAULT_IMAGES_BASE_URL

    @property
    def has_credentials(self):
        return self._api_key != ""

    @property
    def search(self):
        return self.client.Search()

    def __enter__(self):
        if self.has_credentials:
            self.client.API_KEY = self._api_key
            self.images_base_url = self.client.Configuration().info().get('images').get('base_url')
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        pass

    def get_show_imdb_id(self, tmdb_id: int) -> str:
        try:
            return self.client.TV(tmdb_id).external_ids().get('imdb_id', '').replace('tt', '')
        except (requests.exceptions.HTTPError, AttributeError):
            return ''

    def get_poster_full_url(self, image_url, poster_size: str = 'w185') -> str:
        """
        'poster_sizes': ['w92', 'w154', 'w185', 'w342', 'w500', 'w780', 'original']
        """
        return f"{self.images_base_url}{poster_size}{image_url}"

    def search_show(self, term) -> List[Tuple[str, dict]]:
        results = []

        try:
            shows = self.search.tv(query=term).get('results', [])
            results = [(self.get_show_imdb_id(show.get('id')), show) for show in shows]
        except ConnectionRefusedError as e:
            print("Failed connecting to TMDB: ", e)

        return results
