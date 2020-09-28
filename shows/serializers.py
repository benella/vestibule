from rest_framework import serializers
from .models import Show


class ShowListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = ['imdb_id', 'title', 'year', 'network', 'thumbnail_link']


class ShowDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = ['imdb_id',
                  'title',
                  'year',
                  'number_of_seasons',
                  'runtime',
                  'network',
                  'status',
                  'next_episode',
                  'next_episode_time_code',
                  'poster_link',
                  'thumbnail_link',
                  'profile',
                  'lookup_names'
                  ]
