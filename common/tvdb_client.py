from typing import Optional
from tvdb_api_client import TVDBClient
from vestibule_configurations.models import VestibuleConfiguration


class TVDBVestibuleClient:

    def __init__(self):
        try:
            username = VestibuleConfiguration.objects.get(name="TVDB Username").value
        except VestibuleConfiguration.DoesNotExist:
            username = ""

        try:
            user_key = VestibuleConfiguration.objects.get(name="TVDB User Key").value
        except VestibuleConfiguration.DoesNotExist:
            user_key = ""

        try:
            api_key = VestibuleConfiguration.objects.get(name="TVDB API Key").value
        except VestibuleConfiguration.DoesNotExist:
            api_key = ""

        self._username = username
        self._user_key = user_key
        self._api_key = api_key

        self.client: Optional[TVDBClient] = None

    @property
    def has_credentials(self):
        return self._username != "" and self._api_key != "" and self._user_key != ""

    def __enter__(self):
        if self.has_credentials:
            self.client = TVDBClient(username=self._username, user_key=self._user_key, api_key=self._api_key)
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        pass

    def get_show_by_imdb_id(self, imdb_id) -> dict:
        if not self.has_credentials:
            return {}
        return self.client.get_series_by_imdb_id(imdb_id=f"tt{imdb_id}")

    def get_show_original_network(self, imdb_id) -> str:
        try:
            return self.get_show_by_imdb_id(imdb_id).get("network", "")
        except ConnectionRefusedError as e:
            print("Failed connecting to tvdb: ", e)
            return ""

        except LookupError:
            return ""
