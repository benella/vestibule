from plexapi.server import PlexServer
from plexapi.exceptions import BadRequest
from requests.exceptions import ConnectionError
from typing import Union

from vestibule_configurations.models import VestibuleConfiguration
from common import ip_utils


class PlexClient:
    PLEX_BASE_URL = "http://{host}:32400"

    def __init__(self):
        try:
            plex_token = VestibuleConfiguration.objects.get(name="Plex Token").value

        except VestibuleConfiguration.DoesNotExist:
            plex_token = None

        host = ip_utils.get_local_ip()
        if host is None:
            host = "localhost"

        self._base_url = PlexClient.PLEX_BASE_URL.format(host=host)
        self._token = plex_token

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        pass

    @property
    def is_up(self) -> bool:
        return self._get_instance() is not None

    def status(self) -> dict:
        return {
            "up": self.is_up,
            "url": self._base_url
        }

    def update_library(self) -> None:
        plex = self._get_instance()
        if plex is not None:
            print("Updating Plex library")
            plex.library.update()

    def _get_instance(self) -> Union[PlexServer, None]:
        try:
            plex = PlexServer(baseurl=self._base_url, token=self._token)
            return plex
        except (ConnectionError, BadRequest) as e:
            print(f"Plex is down - {e}")
            return None
