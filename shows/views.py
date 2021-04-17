from .models import Show, ShowProfile
from django.http import JsonResponse
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.response import Response

from .serializers import (
    ShowListItemSerializer, ShowDetailsSerializer, ShowCreateSerializer, ShowProfileSerializer, ShowTorrentsSerializer,
    ShowUpcomingEpisodesSerializer
)

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
            "cover_url": result.get("cover url"),
            "full_cover_url": result.get("full-size cover url"),
            "imdb_id": result.getID(),
            "imdb_link": "https://www.imdb.com/title/tt{id}".format(id=result.getID()),
            "subscribed": result.getID() in subscribed_shows_imdb_ids
        })

    return JsonResponse({"results": filtered_results})


class ShowList(generics.ListAPIView):
    queryset = Show.objects.all()
    serializer_class = ShowListItemSerializer


class ShowsUpcomingEpisodes(generics.ListAPIView):
    serializer_class = ShowUpcomingEpisodesSerializer

    def get_queryset(self):
        return sorted(Show.objects.exclude(next_episode_time_code="9999-99-99"),
                      key=lambda s: s.next_episode_order_value)


class ShowSubscribe(generics.CreateAPIView):
    queryset = Show.objects.all()
    serializer_class = ShowCreateSerializer


class ShowUpdateInfo(generics.RetrieveAPIView):
    queryset = Show.objects.all()
    serializer_class = ShowDetailsSerializer
    lookup_field = "imdb_id"

    def retrieve(self, request, *args, **kwargs):
        show = self.get_object()
        show.update_show_info()
        serializer = self.get_serializer(show)
        return Response(serializer.data)


class ShowFindTorrents(generics.RetrieveAPIView):
    queryset = Show.objects.all()
    serializer_class = ShowDetailsSerializer
    lookup_field = "imdb_id"

    def retrieve(self, request, *args, **kwargs):
        show = self.get_object()
        show.find_show_torrents()
        serializer = self.get_serializer(show)
        return Response(serializer.data)


class ShowProfileUpdate(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ShowProfileSerializer
    lookup_url_kwarg = 'imdb_id'

    def get_queryset(self):
        return ShowProfile.objects.filter(show__imdb_id=self.kwargs.get('imdb_id'))

    def get_object(self):
        return self.get_queryset()[0]


class ShowRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Show.objects.all()
    serializer_class = ShowDetailsSerializer
    lookup_field = "imdb_id"


class ShowTorrentsRetrieve(generics.RetrieveAPIView):
    queryset = Show.objects.all()
    serializer_class = ShowTorrentsSerializer
    lookup_field = "imdb_id"


class ShowViewSet(viewsets.ModelViewSet):
    queryset = Show.objects.all()
    serializer_class = ShowDetailsSerializer
    lookup_field = 'slug'
