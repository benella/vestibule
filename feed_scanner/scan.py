from datetime import datetime
from apscheduler.schedulers.background import BackgroundScheduler
from feed_scanner.feed_scanner import scan_torrents


def start():
    minutes_interval = 20
    scheduler = BackgroundScheduler()
    scheduler.start()
    scheduler.add_job(scan_torrents, 'interval', minutes=minutes_interval)

    print("[{time}] Scheduled Feed Scan routine started with {inter}m interval".format(
        time=datetime.now().strftime("%d/%b/%Y %H:%M:%S"), inter=minutes_interval))
