from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^list$', views.MovieList.as_view(), name='list'),
]
