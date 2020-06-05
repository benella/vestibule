from vestibule_configurations.models import VestibuleConfiguration
import requests


class Pushover:
    def __init__(self):
        try:
            self._api_token = VestibuleConfiguration.objects.get(name="Pushover API Token").value
        except VestibuleConfiguration.DoesNotExist:
            self._api_token = ""

        try:
            self._rpc_username = VestibuleConfiguration.objects.get(name="Pushover User Token").value
        except VestibuleConfiguration.DoesNotExist:
            self._user_token = ""

    def has_credentials(self):
        return self._api_token != "" and self._user_token != ""

    def send_message(self, title, message=""):
        """
        Sending a message over Pushover API to Vestibule app
        :type message: str
        :type title: str
        """
        data = {
            "token": self._api_token,
            "user": self._user_token,
            "title": title,
            "message": message
        }
        requests.post(url="https://api.pushover.net/1/messages.json", data=data)


def send_message(title, message=""):
    """
    Sending a message over Pushover API to Vestibule app
    :type message: str
    :type title: str
    """

    pushover = Pushover()
    if pushover.has_credentials():
        print("Sending message to Pushover: {title} - {msg}".format(title=title, msg=message))
        pushover.send_message(title, message)
    else:
        print("No pushover credentials, not sending push notification")
