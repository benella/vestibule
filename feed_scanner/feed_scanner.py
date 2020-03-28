from shows.models import Show
from datetime import datetime


def scan_torrents():

    print("[{}] Scanning for torrents".format(datetime.now().strftime("%d/%b/%Y %H:%M:%S")))

    for show in Show.objects.all():
        show.find_show_torrents()
