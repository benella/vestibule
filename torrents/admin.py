from django.contrib import admin
from .models import Torrent


class TorrentAdmin(admin.ModelAdmin):
    pass


admin.site.register(Torrent, TorrentAdmin)
