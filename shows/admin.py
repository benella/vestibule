from django.contrib import admin
from shows.models import Show, ShowProfile


class ShowAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {'fields': (
            'type', 'imdb_id', ('title', 'year'), 'status', 'runtime', 'poster_link', 'thumbnail_link', 'profile')}),
        ("Show Only", {'fields': ('network', 'number_of_seasons', 'next_episode')}),
        ("Movie Only", {'fields': ('release_date',)}),
    )
    pass


admin.site.register(Show, ShowAdmin)


class ShowProfileAdmin(admin.ModelAdmin):
    pass


admin.site.register(ShowProfile, ShowProfileAdmin)
