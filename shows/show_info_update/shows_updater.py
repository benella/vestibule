import logging
from shows.models import Show

logger = logging.getLogger(__name__)


def update_shows():

    for show in Show.objects.all():
        logger.info(f"Updating '{show}' info")
        show.update_show_info()
