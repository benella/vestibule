from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^download/(?P<torrent_id>\d+)$', views.download_torrent, name='download-torrent'),
]
