from datetime import datetime
from apscheduler.schedulers.background import BackgroundScheduler
from .shows_updater import update_shows


def start():
    minutes_interval = 30
    scheduler = BackgroundScheduler()
    scheduler.start()
    scheduler.add_job(update_shows, 'interval', minutes=minutes_interval)

    print("[{time}] Scheduled Show Info Updater routine started with {inter}m interval".format(
        time=datetime.now().strftime("%d/%b/%Y %H:%M:%S"), inter=minutes_interval))
