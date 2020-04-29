from django.contrib import admin
from shows.models import Show, ShowProfile


class ShowAdmin(admin.ModelAdmin):
    pass


admin.site.register(Show, ShowAdmin)


class ShowProfileAdmin(admin.ModelAdmin):
    pass


admin.site.register(ShowProfile, ShowProfileAdmin)
