from django.contrib import admin
from .models import VestibuleConfiguration


class VestibuleConfigurationAdmin(admin.ModelAdmin):
    pass


admin.site.register(VestibuleConfiguration, VestibuleConfigurationAdmin)
