from rest_framework import serializers
from .models import Torrent


class TorrentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Torrent
        fields = '__all__'
