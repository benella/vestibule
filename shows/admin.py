from django.contrib import admin
from shows.models import Show


class ShowAdmin(admin.ModelAdmin):
    pass


admin.site.register(Show, ShowAdmin)
