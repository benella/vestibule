from django.contrib import admin
from movies.models import Movie, MovieProfile


class MovieAdmin(admin.ModelAdmin):
    pass


admin.site.register(Movie, MovieAdmin)


class MovieProfileAdmin(admin.ModelAdmin):
    pass


admin.site.register(MovieProfile, MovieProfileAdmin)
