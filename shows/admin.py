from django.contrib import admin
from shows.models import Show, ShowProfile, Season, Episode


class ShowAdmin(admin.ModelAdmin):
    pass


admin.site.register(Show, ShowAdmin)


class ShowProfileAdmin(admin.ModelAdmin):
    pass


admin.site.register(ShowProfile, ShowProfileAdmin)


class SeasonAdmin(admin.ModelAdmin):
    pass


admin.site.register(Season, SeasonAdmin)


class EpisodeAdmin(admin.ModelAdmin):
    pass


admin.site.register(Episode, EpisodeAdmin)
