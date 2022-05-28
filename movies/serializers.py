from rest_framework import serializers
from .models import Movie


class MovieListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ['tmdb_id', 'imdb_id', 'title', 'year', 'release_date', 'status', 'poster_link', 'palette_list']
