from datetime import datetime
from rest_framework import generics
from common.tmdb_client import TheMovieDBVestibuleClient
from django.http import JsonResponse
from common import DEFAULT_EMPTY_POSTER

from .models import Movie
from .serializers import MovieListItemSerializer, MovieDetailsSerializer, MovieCreateSerializer


class MovieList(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieListItemSerializer

    def get_queryset(self):
        return sorted(Movie.objects.all(), key=lambda m: m.release_date_order_value)


class MovieRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieDetailsSerializer
    lookup_field = "tmdb_id"


class MovieSubscribe(generics.CreateAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieCreateSerializer


def search_movie(request, title):
    results = []
    subscribed_movies_ids = [m.tmdb_id for m in Movie.objects.all()]

    with TheMovieDBVestibuleClient() as tmdb:
        for movie in tmdb.search_movie(term=title):
            tmdb_id = movie.get("id")
            if tmdb_id in subscribed_movies_ids:
                continue

            release_date_text = movie.get("release_date", "")
            if release_date_text:
                release_date_text = datetime.strptime(release_date_text, "%Y-%m-%d").strftime("%b %-d, %Y")

            poster_path = movie.get("poster_path")
            if poster_path:
                poster_path = tmdb.get_poster_full_url(poster_path, "w500")
            else:
                poster_path = DEFAULT_EMPTY_POSTER

            results.append({
                "tmdb_id": tmdb_id,
                "title": movie.get("title"),
                "release_date_text": release_date_text,
                "poster_link": poster_path,
                # "palette_list"
            })

    return JsonResponse({"movies": results})
