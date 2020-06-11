from plexapi.server import PlexServer
from requests.exceptions import ConnectionError

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
        try:
            PlexServer(baseurl=self._base_url, token=self._token)
            return True
        except ConnectionError as e:
            print(f"Plex is down - {e}")
            return False

    def status(self) -> dict:
        return {
            "up": self.is_up,
            "url": self._base_url
        }
