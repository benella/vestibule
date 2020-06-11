import socket


def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('8.8.8.8', 1027))  # this does not actually connect.
    except socket.error:
        return None
    return s.getsockname()[0]
