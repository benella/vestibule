from datetime import datetime
from apscheduler.schedulers.background import BackgroundScheduler
from torrents_manager.torrents_updater import update_torrents


def start():
    minutes_interval = 1
    scheduler = BackgroundScheduler()
    scheduler.start()
    scheduler.add_job(update_torrents, 'interval', minutes=minutes_interval)

    print("[{time}] Scheduled Torrents Manager routine started with {inter}m interval".format(
        time=datetime.now().strftime("%d/%b/%Y %H:%M:%S"), inter=minutes_interval))
