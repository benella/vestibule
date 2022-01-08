from common.tmdb_client import TheMovieDBVestibuleClient
from .models import Show, ShowProfile
from django.http import JsonResponse
from rest_framework import generics
from rest_framework import viewsets
from rest_framework.response import Response
from torrents_manager.transmission_client import TransmissionClient
from common.tvdb_client import TVDBVestibuleClient
from feeds.models import Feed
from api_feeds import search_feeds_by_imdb_id
from shows.show_info_update.show_info_utils import generate_show_lookup_names
from .serializers import (
    ShowListItemSerializer, ShowDetailsSerializer, ShowCreateSerializer, ShowProfileSerializer, ShowTorrentsSerializer,
    ShowUpcomingEpisodesSerializer
)

from imdb import IMDb
ia = IMDb()


def search_show(request, title):
    subscribed_shows_imdb_ids = [show.imdb_id for show in Show.objects.all()]
    results = []

    with TheMovieDBVestibuleClient() as tmdb_client:
        for imdb_id, tvdb_info in tmdb_client.search_show(term=title):
            results.append({
                "title": tvdb_info.get("name"),
                "year": tvdb_info.get("first_air_date", "Unknown Year-").split("-")[0],
                "small_poster_path": tmdb_client.get_poster_full_url(tvdb_info.get("poster_path"), "w154"),
                "large_poster_path": tmdb_client.get_poster_full_url(tvdb_info.get("poster_path"), "w342"),
                "imdb_id": imdb_id,
                "imdb_link": "https://www.imdb.com/title/tt{id}".format(id=imdb_id),
                "subscribed": imdb_id in subscribed_shows_imdb_ids
            })

    return JsonResponse({"results": results})


def show_enriched_info(request, imdb_id):
    imdb_show_data = ia.get_movie(imdb_id)
    enriched_info = dict()

    with TVDBVestibuleClient() as tvdb_client:
        enriched_info["network"] = tvdb_client.get_show_original_network(imdb_id)
        enriched_info["status"] = tvdb_client.get_show_status(imdb_id)
        enriched_info["number_of_seasons"] = imdb_show_data.get("number of seasons", "Unknown Number")

    return JsonResponse(enriched_info)


def find_preview_show_torrents(request, imdb_id):
    imdb_show_data = ia.get_movie(imdb_id)
    torrents = list()

    for feed in Feed.objects.all():
        torrents += feed.read_feed()

    torrents += search_feeds_by_imdb_id(imdb_id=f"tt{imdb_id}")
    lookup_names = generate_show_lookup_names(imdb_show_data=imdb_show_data)
    relevant_items = list()

    for item in torrents:
        if item.parsed_values.show_title.lower() in lookup_names:
            relevant_items.append(item)

    return JsonResponse({"results": [relevant_item.__dict__() for relevant_item in relevant_items]})


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


class ShowTorrentsUpdate(generics.UpdateAPIView):
    queryset = Show.objects.all()
    serializer_class = ShowTorrentsSerializer
    lookup_field = "imdb_id"

    def update(self, request, *args, **kwargs):
        show = self.get_object()

        if "season" in request.data:
            update_data = request.data["season"]
            season = show.seasons.get(id=update_data["id"])
            if season:
                season.should_download = update_data["should_download"]
                season.save()

                for episode in season.episodes.all():
                    episode.should_download = update_data["should_download"]
                    episode.save()

        if "episode" in request.data:
            update_data = request.data["episode"]
            episode = show.show_episodes.get(id=update_data["id"])

            if episode:
                episode.should_download = update_data["should_download"]
                episode.save()

        serializer = self.get_serializer(show)
        return Response(serializer.data)


class ShowTorrentsDownloadCurrentBest(generics.UpdateAPIView):
    queryset = Show.objects.all()
    serializer_class = ShowTorrentsSerializer
    lookup_field = "imdb_id"

    def update(self, request, *args, **kwargs):
        show = self.get_object()

        if "episode" in request.data:
            update_data = request.data["episode"]
            episode = show.show_episodes.get(id=update_data["id"])

            if episode:
                prime_torrent = episode.prime_torrent(must_match_profile=False)

                if prime_torrent:
                    if prime_torrent.download_status != prime_torrent.DOWNLOADING:

                        with TransmissionClient() as transmission:
                            if transmission.is_up:
                                transmission.download_torrent(prime_torrent)

        serializer = self.get_serializer(show)
        return Response(serializer.data)


class ShowTorrentsRetrieve(generics.RetrieveAPIView):
    queryset = Show.objects.all()
    serializer_class = ShowTorrentsSerializer
    lookup_field = "imdb_id"


class ShowViewSet(viewsets.ModelViewSet):
    queryset = Show.objects.all()
    serializer_class = ShowDetailsSerializer
    lookup_field = 'slug'
