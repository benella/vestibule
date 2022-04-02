from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^list$', views.ShowList.as_view(), name='list'),
    url(r'^upcoming_episodes$', views.ShowsUpcomingEpisodes.as_view(), name='upcoming_episodes'),
    url(r'^subscribe$', views.ShowSubscribe.as_view(), name='list_create'),
    url(r'^search/(?P<title>.+)$', views.search_show, name='search-show'),
    url(r'^enrich/(?P<imdb_id>.+)$', views.show_enriched_info, name='enrich-show-info'),
    url(r'^find_preview_show_torrents/(?P<imdb_id>.+)$', views.find_preview_show_torrents, name='find-preview-show-torrents'),
    url(r'^update_profile/(?P<imdb_id>.+)$', views.ShowProfileUpdate.as_view(), name='update_profile'),
    url(r'^update_info/(?P<imdb_id>.+)$', views.ShowUpdateInfo.as_view(), name='update-info'),
    url(r'^find_torrents/(?P<imdb_id>.+)$', views.ShowFindTorrents.as_view(), name='find-torrents'),

    url(r'^torrents/(?P<imdb_id>.+)$', views.ShowTorrentsRetrieve.as_view(), name='torrents'),
    url(r'^update_torrents/(?P<imdb_id>.+)$', views.ShowTorrentsUpdate.as_view(), name='update-torrents'),
    url(r'^download_current_best/(?P<imdb_id>.+)$', views.ShowTorrentsDownloadCurrentBest.as_view(), name='download-best'),
    url(r'^(?P<imdb_id>.+)$', views.ShowRetrieveUpdateDestroy.as_view(), name='detail'),
]
