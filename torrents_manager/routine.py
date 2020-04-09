from datetime import datetime
from apscheduler.schedulers.background import BackgroundScheduler
from torrents_manager.transmission_updater import update_transmission


def start():
    minutes_interval = 60
    scheduler = BackgroundScheduler()
    scheduler.start()
    scheduler.add_job(update_transmission, 'interval', minutes=minutes_interval)

    print("[{time}] Scheduled Torrents Manager routine started with {inter}m interval".format(
        time=datetime.now().strftime("%d/%b/%Y %H:%M:%S"), inter=minutes_interval))
