from django.views import generic
from django.http import JsonResponse

from shows.models import Show
from torrents_manager.transmission_client import TransmissionClient
from plex_manager.plex_client import PlexClient


class Home(generic.TemplateView):
    template_name = "dashboard.html"

    def get_context_data(self, **kwargs):
        context = super(Home, self).get_context_data(**kwargs)

        context['upcoming_shows'] = sorted(Show.objects.exclude(
            next_episode_time_code="9999-99-99"), key=lambda s: s.next_episode_order_value)

        active_shows = [show for show in Show.objects.all() if show.last_torrent_activity is not None]
        context['recent_activity'] = sorted(active_shows, key=lambda s: s.last_torrent_activity, reverse=True)

        found_shows = [show for show in Show.objects.all() if show.last_torrent_found is not None]
        context['recently_found'] = sorted(found_shows, key=lambda s: s.last_torrent_found, reverse=True)

        return context


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
