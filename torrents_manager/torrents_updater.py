from .transmission_client import TransmissionClient


def update_torrents():

    with TransmissionClient() as transmission:
        if transmission.is_up:
            transmission.update_live_torrents()
