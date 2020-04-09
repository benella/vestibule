from .transmission_client import TransmissionClient


def update_transmission():

    with TransmissionClient() as transmission:
        transmission.update_live_torrents()
