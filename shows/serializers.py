from rest_framework import serializers
from .models import Show, ShowProfile


class ShowProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShowProfile
        fields = '__all__'


class ShowListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = ['imdb_id', 'title', 'year', 'network', 'thumbnail_link', 'palette_list']


class ShowCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = ['imdb_id']


class ShowDetailsSerializer(serializers.ModelSerializer):
    profile = ShowProfileSerializer(read_only=True)

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
                  'palette_list',
                  'profile',
                  'lookup_names',
                  'formatted_imdb_id',
                  ]
