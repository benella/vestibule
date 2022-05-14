"""VestibuleServer URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from . import views

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^api-auth/', include('rest_framework.urls'), name="rest_framework"),
    url(r'^api/shows/', include(('shows.urls', 'shows'), namespace='shows')),
    url(r'^api/movies/', include(('movies.urls', 'movies'), namespace='movies')),
    url(r'^api/torrents/', include(('torrents.urls', 'torrents'), namespace='torrents')),

    # url(r'^feeds/', include(('feeds.urls', 'feeds'), namespace='feeds')),
    url(r'^api/services-status$', views.services_status, name="services-status"),

    url(r'^$', views.Angular.as_view(), name='home'),
    url(r'^(?P<path>.*)$', views.Angular.as_view(), name='angular'),
]
