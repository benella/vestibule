from django.views import generic
from django.http import JsonResponse, HttpResponseNotAllowed, HttpResponseNotFound
from django.views.decorators.csrf import csrf_exempt

from shows.models import Show
from torrents.models import Torrent
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


@csrf_exempt
def service_status(request):
    if request.method != "POST":
        return HttpResponseNotAllowed(["POST"])

    service = request.POST["service"]

    if service == "transmission":
        with TransmissionClient() as transmission:
            status = transmission.status()
    elif service == "plex":
        with PlexClient() as plex:
            status = plex.status()
    else:
        return HttpResponseNotFound("No service named {service}".format(service=service))

    return JsonResponse(status)


def services(request):
    return JsonResponse({"services": ["plex", "transmission"]})
