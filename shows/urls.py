from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^search/(?P<title>.+)$', views.search_show, name='search-show'),
    url(r'^find_torrents/(?P<title>.+)$', views.find_torrents, name='find-torrents'),
    url(r'^add$', views.AddShowView.as_view(), name='add-show'),
    url(r'^(?P<slug>.+)$', views.ShowDetails.as_view(), name='details'),
]
