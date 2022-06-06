from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^download/(?P<id>\d+)$', views.DownloadTorrent.as_view(), name='download-torrent'),
    url(r'^download-movie/(?P<id>\d+)$', views.DownloadMovieTorrent.as_view(), name='download-movie-torrent'),
    url(r'^list$', views.TorrentList.as_view(), name='list'),
]
