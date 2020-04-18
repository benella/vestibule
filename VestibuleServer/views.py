from django.views import generic
from django.http import JsonResponse

from shows.models import Show
from torrents.models import Torrent
from torrents_manager.transmission_client import TransmissionClient
from plex_manager.plex_client import PlexClient


class Home(generic.TemplateView):
    template_name = "dashboard.html"

    def get_context_data(self, **kwargs):
        context = super(Home, self).get_context_data(**kwargs)
        context['shows'] = Show.objects.all()
        context['recently_found'] = Torrent.objects.all().order_by("-created")[:10]
        context['recent_activity'] = Torrent.objects.exclude(download_status=Torrent.NEVER_STARTED).order_by("-modified")[:10]
        return context


def services_status(request):

    with TransmissionClient() as transmission:
        transmission_status = transmission.status()

    with PlexClient() as plex:
        plex_status = plex.status()

    return JsonResponse({"services_status": {"plex": plex_status, "transmission": transmission_status}})
