from django.apps import AppConfig


class FeedsConfig(AppConfig):

    name = 'feeds'

    def ready(self):
        print("FeedsConfig Ready")
        from feed_scanner import scan
        scan.start()
