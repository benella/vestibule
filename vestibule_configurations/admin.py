from django.contrib import admin
from .models import VestibuleConfiguration


class VestibuleConfigurationAdmin(admin.ModelAdmin):
    list_display = ('name', 'value')


admin.site.register(VestibuleConfiguration, VestibuleConfigurationAdmin)
