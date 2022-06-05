from rest_framework import serializers
from .models import Movie
from torrents.serializers import TorrentSerializer, TorrentByShowSerializer


class MovieListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = [
            'tmdb_id',
            'imdb_id',
            'title',
            'year',
            'release_date_text',
            'status',
            'poster_link',
            'palette_list'
        ]


class MovieDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = [
            'tmdb_id',
            'imdb_id',
            'title',
            'year',
            'release_date_text',
            'status',
            'poster_link',
            'palette_list',
            'crew',
            'runtime_text'
        ]


class MovieCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = ['tmdb_id']


class MovieTorrentsSerializer(serializers.ModelSerializer):
    torrents = TorrentSerializer(many=True)

    class Meta:
        model = Movie
        fields = ['torrents']
