from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^list$', views.ShowList.as_view(), name='list'),
    url(r'^list_create$', views.ShowListCreate.as_view(), name='list_create'),
    url(r'^update_profile/(?P<imdb_id>.+)$', views.ShowProfileUpdate.as_view(), name='update_profile'),
    url(r'^update_info/(?P<imdb_id>.+)$', views.ShowUpdateInfo.as_view(), name='update-info'),
    url(r'^find_torrents/(?P<imdb_id>.+)$', views.ShowFindTorrents.as_view(), name='find-torrents'),

    url(r'^torrents/(?P<imdb_id>.+)$', views.ShowTorrentsRetrieve.as_view(), name='torrents'),
    url(r'^(?P<imdb_id>.+)$', views.ShowRetrieveUpdateDestroy.as_view(), name='detail'),

    url(r'^search/(?P<title>.+)$', views.search_show, name='search-show'),
    url(r'^add$', views.AddShowView.as_view(), name='add-show'),
]
