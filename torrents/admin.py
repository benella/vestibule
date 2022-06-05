from django.contrib import admin
from .models import Torrent, MovieTorrent


class TorrentAdmin(admin.ModelAdmin):
    pass


admin.site.register(Torrent, TorrentAdmin)


class MovieTorrentAdmin(admin.ModelAdmin):
    pass


admin.site.register(MovieTorrent, MovieTorrentAdmin)
