from rest_framework import serializers
from .models import Torrent

TIME_FORMAT = "%d.%m.%Y %H:%M"


class TorrentSerializer(serializers.ModelSerializer):

    created = serializers.DateTimeField(format=TIME_FORMAT)
    modified = serializers.DateTimeField(format=TIME_FORMAT)
    feed = serializers.CharField(source='feed.name')
    download_status = serializers.CharField(source='get_download_status_display')

    class Meta:
        model = Torrent
        fields = [
            'id',
            'created',
            'modified',
            'link',
            'title',
            'feed',
            'publication_time',
            'source_type',
            'quality',
            'download_status',
            'percent_done',
            'profile_match_score',
            'profile_match'
        ]
