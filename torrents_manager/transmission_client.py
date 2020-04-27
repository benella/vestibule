from typing import List
from clutch.client import Client
from datetime import timedelta
from requests.exceptions import ConnectionError

from notifications import pushover
from vestibule_configurations.models import VestibuleConfiguration
from torrents.models import Torrent


class TransmissionClient:
    """
    Using Transmission wed client on localhost to manage torrents downloads
    """

    TRANSMISSION_API_ADDRESS = "http://{host}:9091/transmission/rpc"
    TRANSMISSION_WEB_ADDRESS = "http://{host}:9091"
    DEFAULT_SHARE_TIME = timedelta(days=7)
    DEFAULT_SHARE_RATIO = 2
    ACTION_SUCCESS = "success"


    def __init__(self):

        try:
            host = VestibuleConfiguration.objects.get(name="Host Address").value
        except VestibuleConfiguration.DoesNotExist:
            host = "localhost"

        self._api_address = TransmissionClient.TRANSMISSION_API_ADDRESS.format(host=host)
        self._web_address = TransmissionClient.TRANSMISSION_WEB_ADDRESS.format(host=host)

    def __enter__(self):
        self.client = Client(address=self._api_address)
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        pass

    @property
    def is_up(self) -> bool:
        try:
            stats = self.client.session.stats()
            return stats.result == TransmissionClient.ACTION_SUCCESS

        except ConnectionError as e:
            print(f"Transmission is down - {e}")
            return False

    def status(self) -> dict:
        return {
            "up": self.is_up,
            "url": self._web_address
        }

    @property
    def web_interface_link(self) -> str:
        """
        Link used to access Transmission web interface
        """
        return self._web_address


    def list_torrents(self) -> List[dict]:
        """
        List all existing torrents on Transmission
        """
        response = self.client.torrent.accessor(all_fields=True)
        return response.arguments.get("torrents", [])


    def download_torrent(self, torrent: Torrent):
        """
        Start a torrent download on Transmission with the torrent's link, and update torrent's status.
        """
        response = self.client.torrent.add(arguments={"filename": torrent.link})

        if response.result != TransmissionClient.ACTION_SUCCESS:
            return False, f"Failed to download torrent {torrent}"

        torrent.transmission_torrent_id = response.arguments["torrent_added"]["id"]
        torrent.update_download_status(Torrent.DOWNLOADING)

        return True, f"Downloading {torrent}"


    def update_torrent(self, torrent_info: dict):
        """
        Remove, copy files and update Vestibule torrent as needed according to torrent info
        """
        transmission_torrent_id = int(torrent_info.get('id'))
        seeding_time = timedelta(seconds=torrent_info.get('seconds_seeding'))

        print(f"Torrent: {torrent_info.get('name')} (ID {transmission_torrent_id})")

        print(f"> Done: {100 * torrent_info.get('percent_done')}%, "
              f"Ratio: {torrent_info.get('upload_ratio')}, "
              f"Shred for: {seeding_time}"
              )

        torrents = Torrent.objects.filter(transmission_torrent_id=transmission_torrent_id).order_by("-modified")
        if len(torrents) == 0:
            print(f"Torrent not found in Vestibule, doing nothing")
            return

        torrent = torrents[0]
        print(f"Matched with Torrent in Vestibule - {torrent}")

        is_ready = torrent_info.get('percent_done') == 1
        can_delete = seeding_time >= TransmissionClient.DEFAULT_SHARE_TIME

        if is_ready and torrent.download_status != Torrent.READY:
            torrent.update_download_status(Torrent.READY)
            print(f"Download finished, copying files to library")
            pushover.send_message(
                title=f"{torrent.show.title} - New episode is ready",
                message=f"{torrent.short_title}"
            )

        if can_delete:
            print(f"Shared for {seeding_time}, deleting torrents and files")

    def update_live_torrents(self):
        """
        List all Transmission torrents and update each one
        """
        torrents = self.list_torrents()
        print(f"Found {len(torrents)} torrents on Transmission")

        for torrent_info in torrents:
            self.update_torrent(torrent_info)
