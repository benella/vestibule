from django.apps import AppConfig


class ShowsConfig(AppConfig):
    name = 'shows'

    def ready(self):
        from shows.show_info_update import routine
        routine.start()
