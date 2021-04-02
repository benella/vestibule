from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.views import generic
from rest_framework import generics
from rest_framework.response import Response

from .models import Torrent
from .serializers import TorrentSerializer
from shows.models import Show
from torrents_manager.transmission_client import TransmissionClient


class TorrentList(generic.TemplateView):
    model = Torrent
    template_name = "torrent/torrent_list.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)

        context['downloading'] = Torrent.objects.all().filter(
            download_status=Torrent.DOWNLOADING).order_by("-percent_done")

        context['seeding'] = Torrent.objects.all().filter(
            download_status=Torrent.READY).order_by("-modified")

        found_shows = [show for show in Show.objects.all() if show.last_torrent_found is not None]
        context['recently_found'] = sorted(found_shows, key=lambda s: s.last_torrent_found, reverse=True)

        active_shows = [show for show in Show.objects.all() if show.last_torrent_activity is not None]
        context['recent_activity'] = sorted(active_shows, key=lambda s: s.last_torrent_activity, reverse=True)

        return context


class DownloadTorrent(generics.RetrieveAPIView):
    queryset = Torrent.objects.all()
    serializer_class = TorrentSerializer
    lookup_field = "id"

    def retrieve(self, request, *args, **kwargs):
        torrent = self.get_object()

        if torrent.download_status != torrent.DOWNLOADING:

            with TransmissionClient() as transmission:
                if transmission.is_up:
                    successful, message = transmission.download_torrent(torrent)
                else:
                    successful = False
                    message = "Transmission client seems to be down"
        else:
            successful = False
            message = f"{torrent} is already downloading"

        serializer = self.get_serializer(torrent)
        return Response(dict(
            torrent=serializer.data,
            successful=successful,
            message=message)
        )


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
