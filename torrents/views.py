from django.urls import reverse
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.views import generic
from .models import Torrent
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
            download_status=Torrent.READY).order_by("modified")

        found_shows = [show for show in Show.objects.all() if show.last_torrent_found is not None]
        context['recently_found'] = sorted(found_shows, key=lambda s: s.last_torrent_found, reverse=True)

        active_shows = [show for show in Show.objects.all() if show.last_torrent_activity is not None]
        context['recent_activity'] = sorted(active_shows, key=lambda s: s.last_torrent_activity, reverse=True)

        return context


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
