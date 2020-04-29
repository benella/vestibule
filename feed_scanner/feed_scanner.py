from datetime import datetime

from shows.models import Show
from feeds.models import Feed


def scan_torrents():

    print("[{}] Scanning for new torrents".format(datetime.now().strftime("%d/%b/%Y %H:%M:%S")))

    torrents = list()
    for feed in Feed.objects.all():
        torrents += feed.read_feed()

    for show in Show.objects.all():
        show.find_show_torrents(torrents=torrents)
        show.update_show_downloads()
