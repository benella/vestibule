import os
from typing import List
from clutch.client import Client
from datetime import timedelta
from requests.exceptions import ConnectionError
from pathlib import Path

from common import ip_utils
from plex_manager.plex_client import PlexClient
from notifications import pushover
from vestibule_configurations.models import VestibuleConfiguration
from torrents.models import Torrent


class TransmissionClient:
    """
    Using Transmission wed client on localhost to manage torrents downloads
    """

    TRANSMISSION_API_ADDRESS = "http://{host}:9091/transmission/rpc"
    TRANSMISSION_WEB_ADDRESS = "http://{host}:9091"
    ACTION_SUCCESS = "success"

    def __init__(self):

        host = ip_utils.get_local_ip()
        if host is None:
            host = "localhost"

        try:
            self._rpc_username = VestibuleConfiguration.objects.get(name="Transmission RPC Username").value
        except VestibuleConfiguration.DoesNotExist:
            self._rpc_username = ""

        try:
            self._rpc_password = VestibuleConfiguration.objects.get(name="Transmission RPC Password").value
        except VestibuleConfiguration.DoesNotExist:
            self._rpc_password = ""

        self._api_address = TransmissionClient.TRANSMISSION_API_ADDRESS.format(host=host)
        self._web_address = TransmissionClient.TRANSMISSION_WEB_ADDRESS.format(host=host)

        try:
            self.keep_media_folder_organised = VestibuleConfiguration.objects.get(
                name="Keep Media Folder Organised").bool_value
        except VestibuleConfiguration.DoesNotExist:
            self.keep_media_folder_organised = False

        try:
            self.media_folder_path = VestibuleConfiguration.objects.get(name="Media Folder Path").value
        except VestibuleConfiguration.DoesNotExist:
            self.keep_media_folder_organised = False
            self.media_folder_path = ""

        try:
            days_to_share = int(VestibuleConfiguration.objects.get(name="Default Seeding Time (Days)").value)
        except (VestibuleConfiguration.DoesNotExist, ValueError):
            days_to_share = 10

        try:
            share_ratio = float(VestibuleConfiguration.objects.get(name="Default Share Ratio").value)
        except (VestibuleConfiguration.DoesNotExist, ValueError):
            share_ratio = 4

        self.default_share_time = timedelta(days=days_to_share)
        self.default_share_ratio = share_ratio

    def __enter__(self):
        self.client = Client(address=self._api_address, username=self._rpc_username, password=self._rpc_password)
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

    def get_shows_download_directory(self):
        return os.path.join(self.media_folder_path, "Shows")

    def get_show_torrent_download_directory(self, torrent: Torrent) -> str:
        """
        Find, and generate if needed, a download directory for the given Torrent
        """
        path = os.path.join(self.get_shows_download_directory(),
                            torrent.show.safe_folder_name,
                            f"Season {torrent.season}")
        Path(path).mkdir(exist_ok=True, parents=True)
        return path

    def download_torrent(self, torrent: Torrent):
        """
        Start a torrent download on Transmission with the torrent's link, and update torrent's status.
        """
        arguments = {"filename": torrent.link}
        if self.keep_media_folder_organised:
            download_dir = self.get_show_torrent_download_directory(torrent)
            print(f"Downloading {torrent} to {download_dir}")
            arguments["download_dir"] = download_dir

        response = self.client.torrent.add(arguments=arguments)
        transmission_torrent_id = response.arguments["torrent_added"]["id"]

        if response.result != TransmissionClient.ACTION_SUCCESS:
            return False, f"Failed to download torrent {torrent}"

        torrent.transmission_torrent_id = transmission_torrent_id
        torrent.update_download_status(Torrent.DOWNLOADING)

        return True, f"Downloading {torrent}"

    def update_torrent(self, torrent_info: dict):
        """
        Remove, copy files and update Vestibule torrent as needed according to torrent info
        """
        transmission_torrent_id = int(torrent_info.get('id'))
        try:
            percent_done = int(torrent_info.get('percent_done') * 100)
        except ValueError:
            percent_done = 0

        seeding_time = timedelta(seconds=torrent_info.get('seconds_seeding'))
        upload_ratio = float(torrent_info.get('upload_ratio'))

        print(f"Torrent: {torrent_info.get('name')} (ID {transmission_torrent_id})")

        print(f"> Done: {percent_done}%, "
              f"Ratio: {upload_ratio}, "
              f"Shred for: {seeding_time}"
              )

        torrents = Torrent.objects.filter(transmission_torrent_id=transmission_torrent_id).order_by("-modified")
        if len(torrents) == 0:
            print(f"Torrent not found in Vestibule, doing nothing")
            return

        torrent = torrents[0]
        print(f"Matched with Torrent in Vestibule - {torrent}")

        is_ready = percent_done == 100
        can_delete = (seeding_time >= self.default_share_time) or (upload_ratio > self.default_share_ratio)
        torrent.update_percent_done(percent_done)

        if is_ready and torrent.download_status != Torrent.READY:
            torrent.update_download_status(Torrent.READY)
            print(f"Download finished for {torrent}, seeding")
            PlexClient().update_library()
            pushover.send_message(
                title=f"{torrent.show.title} - New episode is ready",
                message=f"{torrent.short_title}"
            )

        if can_delete:
            print(f"Shared for {seeding_time} ({upload_ratio}), removing from Transmission (not deleting files)")
            self.remove_torrent(transmission_torrent_id=transmission_torrent_id)
            torrent.update_download_status(Torrent.STOPPED)

    def remove_torrent(self, transmission_torrent_id: int, delete_data: bool = False):
        """
        Remove Torrent from list
        """
        self.client.torrent.remove(arguments={
            "ids": [transmission_torrent_id], "delete_local_data": delete_data})

    def update_live_torrents(self):
        """
        List all Transmission torrents and update each one
        """
        torrents = self.list_torrents()
        print(f"Found {len(torrents)} torrents on Transmission")

        for torrent_info in torrents:
            self.update_torrent(torrent_info)
