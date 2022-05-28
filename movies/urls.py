from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^list$', views.MovieList.as_view(), name='list'),
    url(r'^(?P<tmdb_id>.+)$', views.MovieRetrieveUpdateDestroy.as_view(), name='details')
]
