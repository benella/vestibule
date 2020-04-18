from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib import messages
from .models import Torrent
from torrents_manager.transmission_client import TransmissionClient


def download_torrent(request, torrent_id):
    torrent = Torrent.objects.get(id=torrent_id)
    if torrent.download_status != torrent.NEVER_STARTED:
        messages.add_message(
            request=request,
            level=messages.WARNING,
            message=f"Torrent {torrent} download status is {torrent.get_download_status_display()}"
        )

    else:
        with TransmissionClient() as transmission:
            if transmission.is_up:
                successful, message = transmission.download_torrent(torrent)

                messages.add_message(
                    request=request,
                    level=messages.SUCCESS if successful else message.ERROR,
                    message=message
                )
            else:
                messages.add_message(
                    request=request,
                    level=messages.WARNING,
                    message=f"Transmission seems to be down. Set it up and try again."
                )

    return HttpResponseRedirect(reverse("shows:details", kwargs={'slug': torrent.show.slug}))
