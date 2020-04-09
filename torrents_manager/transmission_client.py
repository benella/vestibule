from typing import List
from clutch.client import Client
from datetime import timedelta
from torrents.models import Torrent


class TransmissionClient:
    """
    Using Transmission wed client on localhost to manage torrents downloads
    """

    DEFAULT_SHARE_TIME = timedelta(days=3)
    DEFAULT_SHARE_RATIO = 2
    ACTION_SUCCESS = "success"

    def __enter__(self):
        self.client = Client(address="http://localhost:9091/transmission/rpc")
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        pass

    def list_torrents(self) -> List[dict]:
        response = self.client.torrent.accessor(all_fields=True)
        return response.arguments.get("torrents", [])

    def download_torrent(self, torrent: Torrent):
        response = self.client.torrent.add(arguments={"filename": torrent.link})

        if response.result != TransmissionClient.ACTION_SUCCESS:
            return False, f"Failed to download torrent {torrent}"

        torrent.transmission_torrent_id = response.arguments["torrent_added"]["id"]
        torrent.download_status = Torrent.DOWNLOADING
        torrent.save()

        return True, f"Downloading {torrent}"

    def update_torrent(self, torrent_info: dict):
        transmission_torrent_id = int(torrent_info.get('id'))
        seeding_time = timedelta(seconds=torrent_info.get('seconds_seeding'))

        print(f"Torrent: {torrent_info.get('name')} (ID {transmission_torrent_id})")

        print(f"> Done: {100 * torrent_info.get('percent_done')}%, "
              f"Ratio: {torrent_info.get('upload_ratio')}, "
              f"Shred for: {seeding_time}"
              )

        try:
            torrent = Torrent.objects.get(transmission_torrent_id__exact=transmission_torrent_id)
        except Torrent.DoesNotExist:
            print(f"Torrent not found in Vestibule, doing nothing")
            return

        is_ready = torrent_info.get('percent_done') == 1
        can_delete = seeding_time >= TransmissionClient.DEFAULT_SHARE_TIME

        if is_ready and torrent.download_status != Torrent.READY:
            torrent.download_status = Torrent.READY
            torrent.save()
            print(f"Download finished, copying files to library")

        if can_delete:
            print(f"Shared for {seeding_time}, deleting torrents and files")

    def update_live_torrents(self):
        torrents = self.list_torrents()
        print(f"Found {len(torrents)} torrents on Transmission")

        for torrent_info in torrents:
            self.update_torrent(torrent_info)
