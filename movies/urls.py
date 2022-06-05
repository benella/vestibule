from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^list$', views.MovieList.as_view(), name='list'),
    url(r'^subscribe$', views.MovieSubscribe.as_view(), name='subscribe'),
    url(r'^search/(?P<title>.+)$', views.search_movie, name='search'),
    url(r'^update_info/(?P<tmdb_id>.+)$', views.MovieUpdateInfo.as_view(), name='update-info'),
    url(r'^find_torrents/(?P<tmdb_id>.+)$', views.MovieFindTorrents.as_view(), name='find-torrents'),
    url(r'^torrents/(?P<tmdb_id>.+)$', views.MovieTorrentsRetrieve.as_view(), name='torrents'),
    url(r'^(?P<tmdb_id>.+)$', views.MovieRetrieveUpdateDestroy.as_view(), name='details')
]
