from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^list$', views.ShowList.as_view(), name='list'),
    url(r'^list_create$', views.ShowListCreate.as_view(), name='list_create'),
    url(r'^(?P<show_slug>.+)/torrents$', views.ShowTorrentsList.as_view(), name='torrents'),
    url(r'^(?P<slug>.+)$', views.ShowRetrieveUpdateDestroy.as_view(), name='detail'),

    url(r'^search/(?P<title>.+)$', views.search_show, name='search-show'),
    url(r'^find_torrents/(?P<title>.+)$', views.find_torrents, name='find-torrents'),
    url(r'^update_info/(?P<title>.+)$', views.update_show_info, name='update-info'),
    url(r'^add$', views.AddShowView.as_view(), name='add-show'),
]
