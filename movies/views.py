from rest_framework import generics

from .models import Movie
from .serializers import MovieListItemSerializer, MovieDetailsSerializer


class MovieList(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieListItemSerializer

    def get_queryset(self):
        return sorted(Movie.objects.all(), key=lambda m: m.release_date_order_value)


class MovieRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieDetailsSerializer
    lookup_field = "tmdb_id"
