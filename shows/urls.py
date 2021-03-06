from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^search/(?P<title>.+)$', views.search_show, name='search-show'),
    url(r'^find_torrents/(?P<title>.+)$', views.find_torrents, name='find-torrents'),
    url(r'^update_info/(?P<title>.+)$', views.update_show_info, name='update-info'),
    url(r'^add$', views.AddShowView.as_view(), name='add-show'),
    url(r'^(?P<slug>.+)$', views.ShowDetails.as_view(), name='details'),
    url(r'^$', views.ShowList.as_view(), name='list'),
]
