from django.views import generic
from django.http import JsonResponse

from torrents_manager.transmission_client import TransmissionClient
from plex_manager.plex_client import PlexClient


class Angular(generic.TemplateView):
    template_name = "index.html"


def services_status(request):

    clients = [PlexClient, TransmissionClient]
    response = dict()

    for client in clients:
        with client() as service_client:
            status = service_client.status()
            response[status.get("name")] = status

    return JsonResponse({"services": response})
