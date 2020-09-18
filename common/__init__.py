import math
from dataclasses import dataclass
from collections import OrderedDict
from VestibuleServer.settings import STATIC_URL

DEFAULT_POSTER = f"{STATIC_URL}/images/vestibule_default-13.jpg"


@dataclass
class Quality:

    QUALITY_720P = "720P"
    QUALITY_1080P = "1080P"
    QUALITY_4K = "4K"

    QUALITY_KEYS = {
        "720": QUALITY_720P,
        "1080": QUALITY_1080P,
        "2160": QUALITY_4K
    }

    QUALITY_VALUES = {
        QUALITY_4K: 2160,
        QUALITY_1080P: 1080,
        QUALITY_720P: 720
    }

    @staticmethod
    def parse_quality_form_phrase(phrase: str) -> str:
        phrase = phrase.lower()

        for key, quality in Quality.QUALITY_KEYS.items():
            if key in phrase:
                return quality

    @staticmethod
    def greater_or_equal(quality, expected_quality) -> bool:
        return Quality.QUALITY_VALUES.get(quality, 0) >= Quality.QUALITY_VALUES.get(expected_quality, 0)

    @staticmethod
    def difference(quality, expected_quality) -> int:

        diff = math.ceil(
            abs(Quality.QUALITY_VALUES.get(quality, 0) - Quality.QUALITY_VALUES.get(expected_quality, 0)) / 1080)

        return diff if Quality.greater_or_equal(quality, expected_quality) else diff * -1


@dataclass
class Source:

    WEB = "Web"
    NETFLIX = "Netflix"
    HDTV = "HDTV"
    AMAZON = "Amazon"
    HULU = "Hulu"
    BLUE_RAY = "BlueRay"

    SOURCE_KEYS = OrderedDict([
        ("amzn", AMAZON),
        ("amazon", AMAZON),
        ("hulu", HULU),
        ("nf", NETFLIX),
        ("bluray", BLUE_RAY),
        ("web", WEB),
        ("hdtv", HDTV),
    ])

    SOURCES_VALUES = {
        AMAZON: 110,
        NETFLIX: 110,
        HULU: 110,
        BLUE_RAY: 100,
        WEB: 100,
        HDTV: 40
    }

    @staticmethod
    def pare_source_from_phrase(phrase: str):
        phrase = phrase.lower()

        for key, source in Source.SOURCE_KEYS.items():
            if key in phrase:
                return source

    @staticmethod
    def source_value(source):
        return Source.SOURCES_VALUES.get(source, 0)
