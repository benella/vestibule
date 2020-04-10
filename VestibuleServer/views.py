from django.views import generic
from django.http import JsonResponse

from shows.models import Show
from torrents_manager.transmission_client import TransmissionClient
from plex_manager.plex_client import PlexClient


class Home(generic.TemplateView):
    template_name = "main.html"

    def get_context_data(self, **kwargs):
        context = super(Home, self).get_context_data(**kwargs)
        context['shows'] = Show.objects.all()

        return context


def services_status(request):

    with TransmissionClient() as transmission:
        transmission_status = transmission.status()

    with PlexClient() as plex:
        plex_status = plex.status()

    return JsonResponse({"services_status": {"plex": plex_status, "transmission": transmission_status}})
