from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^list$', views.MovieList.as_view(), name='list'),
    url(r'^subscribe$', views.MovieSubscribe.as_view(), name='subscribe'),
    url(r'^search/(?P<title>.+)$', views.search_movie, name='search'),
    url(r'^(?P<tmdb_id>.+)$', views.MovieRetrieveUpdateDestroy.as_view(), name='details')
]
