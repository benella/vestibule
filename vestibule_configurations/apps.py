import socket
import logging
from django.apps import AppConfig

logger = logging.getLogger(__name__)


class VestibuleConfigurationsConfig(AppConfig):

    name = 'vestibule_configurations'

    def ready(self):
        # self.update_host_address()
        pass

    def update_host_address(self):
        from .models import VestibuleConfiguration

        hostname = socket.gethostname()
        ip_address = socket.gethostbyname(hostname)
        logger.info(f"Using {ip_address} as Host Address (hostname: {hostname})")

        try:
            host = VestibuleConfiguration.objects.get(name="Host Address")
            host.value = ip_address
        except VestibuleConfiguration.DoesNotExist:
            host = VestibuleConfiguration(name="Host Address", value=ip_address)

        host.save()
