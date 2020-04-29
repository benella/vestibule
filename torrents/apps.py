from django.apps import AppConfig


class TorrentsConfig(AppConfig):

    name = 'torrents'

    def ready(self):
        from torrents_manager import routine
        routine.start()
