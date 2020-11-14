from .models import Show
from django.views import generic
from django.urls import reverse
from django.http import HttpResponseRedirect
from django.http import JsonResponse
from rest_framework import generics
from rest_framework import viewsets

from .serializers import ShowListItemSerializer, ShowDetailsSerializer, ShowCreateSerializer
from torrents.serializers import TorrentSerializer
from torrents.models import Torrent

from imdb import IMDb


def search_show(request, title):
    ia = IMDb()
    subscribed_shows_imdb_ids = [show.imdb_id for show in Show.objects.all()]
    results = ia.search_movie(title)
    filtered_results = list()

    for result in results:
        if result.get("kind") not in ["tv series", "tv miniseries"]:
            print("skipping {} (kind: {})".format(result.get("title"), result.get("kind")))
            continue

        filtered_results.append({
            "title": result.get("title"),
            "year": result.get("year", "Unknown Year"),
            "full-size cover url": result.get("cover url"),
            "imdb_id": result.getID(),
            "imdb_link": "https://www.imdb.com/title/tt{id}".format(id=result.getID()),
            "subscribed": result.getID() in subscribed_shows_imdb_ids
        })

    return JsonResponse({"filtered": filtered_results})


def find_torrents(request, title):
    show = Show.objects.get(slug=title)
    show.find_show_torrents(request)
    return HttpResponseRedirect(reverse("shows:details", kwargs={'slug': show.slug}))


def update_show_info(request, title):
    show = Show.objects.get(slug=title)
    show.update_show_info(request)
    return HttpResponseRedirect(reverse("shows:details", kwargs={'slug': show.slug}))


class AddShowView(generic.CreateView):
    model = Show
    template_name = "show/add_show.html"
    fields = ["imdb_id"]

    def get_success_url(self):
        return reverse("shows:details", kwargs={'slug': self.object.slug})


class ShowList(generics.ListAPIView):
    queryset = Show.objects.all()
    serializer_class = ShowListItemSerializer


class ShowListCreate(generics.ListCreateAPIView):
    queryset = Show.objects.all()
    serializer_class = ShowCreateSerializer


class ShowRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Show.objects.all()
    serializer_class = ShowDetailsSerializer
    lookup_field = "imdb_id"


class ShowTorrentsList(generics.ListAPIView):
    queryset = Torrent.objects.all()
    serializer_class = TorrentSerializer

    def get_queryset(self):
        return self.queryset.filter(show__slug=self.kwargs.get('show_slug'))


class ShowViewSet(viewsets.ModelViewSet):
    queryset = Show.objects.all()
    serializer_class = ShowDetailsSerializer
    lookup_field = 'slug'
