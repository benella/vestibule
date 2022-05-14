from rest_framework import generics

from .models import Movie
from .serializers import MovieListItemSerializer


class MovieList(generics.ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieListItemSerializer
