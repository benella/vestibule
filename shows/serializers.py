from rest_framework import serializers
from .models import Show, ShowProfile, Season, Episode
from torrents.serializers import TorrentSerializer, TorrentByShowSerializer


class ShowProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShowProfile
        fields = ['quality', 'subtitles', 'high_quality_source', 'download_automatically', 'wait']


class EpisodeSerializer(serializers.ModelSerializer):
    unmatching_torrents = TorrentSerializer(many=True)
    matching_torrents = TorrentSerializer(many=True)

    class Meta:
        model = Episode
        fields = [
            'id',
            'number',
            'title',
            'should_download',
            'is_downloaded',
            'is_aired',
            'air_time_code',
            'air_status',
            'matching_torrents',
            'unmatching_torrents'
        ]


class SeasonSerializer(serializers.ModelSerializer):
    episodes = EpisodeSerializer(many=True)
    season_matching_torrents = TorrentSerializer(many=True)
    season_unmatching_torrents = TorrentSerializer(many=True)

    class Meta:
        model = Season
        fields = [
            'id',
            'number',
            'title',
            'should_download',
            'is_downloaded',
            'episodes',
            'season_matching_torrents',
            'season_unmatching_torrents'
        ]


class ShowListItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Show
        fields = ['imdb_id', 'title', 'year', 'status', 'network', 'thumbnail_link', 'palette_list']


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
                  'number_of_seasons_as_int',
                  'runtime',
                  'network',
                  'status_line',
                  'next_episode',
                  'next_episode_time_code',
                  'imdb_rating',
                  'imdb_url',
                  'poster_link',
                  'thumbnail_link',
                  'palette_list',
                  'profile',
                  'formatted_imdb_id',
                  'custom_lookup_names'
                  ]


class ShowUpcomingEpisodesSerializer(serializers.ModelSerializer):

    recent_torrents_found = TorrentByShowSerializer(source='last_found_torrents', many=True)
    recent_torrents_active = TorrentByShowSerializer(source='last_active_torrents', many=True)

    class Meta:
        model = Show
        fields = ['imdb_id',
                  'title',
                  'next_episode',
                  'next_episode_time_code',
                  'next_episode_season_status',
                  'imdb_url',
                  'poster_link',
                  'thumbnail_link',
                  'palette_list',
                  'recent_torrents_found',
                  'recent_torrents_active'
                  ]


class ShowTorrentsSerializer(serializers.ModelSerializer):
    seasons = SeasonSerializer(read_only=True, many=True)
    downloading_torrents = TorrentSerializer(many=True)

    class Meta:
        model = Show
        fields = ['seasons', 'downloading_torrents']
