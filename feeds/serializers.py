from rest_framework import serializers
from .models import Feed


class FeedNameSerializer(serializers.ModelSerializer):

    class Meta:
        model = Feed
        fields = ['name']
