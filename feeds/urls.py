from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^(?P<slug>.+)$', views.FeedDetails.as_view(), name='details'),
    url(r'^$', views.FeedList.as_view(), name='list'),
]
