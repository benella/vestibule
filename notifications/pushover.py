from notifications import PUSHOVER_API_TOKEN, PUSHOVER_USER_TOKEN
import requests


def send_message(title, message=""):
    """
    Sending a test message over Pushover API to Vestibule app
    :type message: str
    :type title: str
    """
    data = {
        "token": PUSHOVER_API_TOKEN,
        "user": PUSHOVER_USER_TOKEN,
        "title": title,
        "message": message
    }

    print("Sending message to Pushover: {title} - {msg}".format(title=title, msg=message))
    requests.post(url="https://api.pushover.net/1/messages.json", data=data)
