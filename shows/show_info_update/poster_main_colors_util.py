import requests
from typing import List, Tuple
from io import BytesIO
from colorthief import ColorThief
import colorsys


class Color:
    RGB_THRESHOLD = 70
    SATURATION_THRESHOLD = 0.4

    def __init__(self, rgb: List[int]):
        self.r, self.g, self.b = rgb
        self.avg = int(sum(rgb) / 3)
        self.raw = rgb
        self.h, self.l, self.s = colorsys.rgb_to_hls(self.r, self.g, self.b)

    @property
    def is_light(self) -> bool:
        return (256 - self.RGB_THRESHOLD) < self.avg

    @property
    def is_dark(self) -> bool:
        return self.avg < self.RGB_THRESHOLD

    @property
    def is_saturated(self) -> bool:
        return abs(self.s) >= self.SATURATION_THRESHOLD

    def __eq__(self, other):
        return self.raw == other.raw

    def __str__(self):
        return f"{self.raw} - A: {self.avg} S: {abs(self.s)}, L: {self.l} ({self.is_light}), D: {self.is_dark}"


def _url_image_palette(image_url: str) -> List[List[int]]:
    """
    Get a list of main colors found in image, colors in RGB values
    """
    response = requests.get(image_url)
    color_thief = ColorThief(BytesIO(response.content))

    return [list(color) for color in color_thief.get_palette(color_count=10, quality=7)]


def _range_colors(colors_raw: List[List[int]]) -> Tuple[Color, Color, Color, Color]:
    """
    Given a list of main image colors in RGB, returns a list of four Colors -
        Primary, Light, Dark and Secondary
    """
    colors = [Color(rgb) for rgb in colors_raw]

    saturated_colors = list(filter(lambda x: not x.is_light and not x.is_dark and x.is_saturated, colors))
    medium_colors = list(filter(lambda x: not x.is_light and not x.is_dark, colors))
    light_colors = list(filter(lambda x: x.is_light, colors))
    dark_colors = list(filter(lambda x: x.is_dark, colors))

    if saturated_colors:
        primary = saturated_colors.pop(0)
        medium_colors.remove(primary)
    elif medium_colors:
        primary = medium_colors.pop(0)
    else:
        if light_colors:
            # Get darkest light color
            primary = sorted(light_colors, key=lambda x: x.avg)[0]
            light_colors.remove(primary)
        else:
            # Get lightest dark color
            primary = sorted(dark_colors, key=lambda x: x.avg, reverse=True)[0]
            dark_colors.remove(primary)

    if light_colors:
        light = light_colors.pop(0)
    else:
        if medium_colors:
            light = sorted(medium_colors, key=lambda x: x.avg, reverse=True)[0]
            medium_colors.remove(light)
        else:
            light = sorted(dark_colors, key=lambda x: x.avg, reverse=True)[0]
            dark_colors.remove(light)

    if dark_colors:
        dark = dark_colors.pop(0)
    else:
        if medium_colors:
            dark = sorted(medium_colors, key=lambda x: x.avg)[0]
            medium_colors.remove(dark)
        else:
            dark = sorted(light_colors, key=lambda x: x.avg)[0]
            light_colors.remove(dark)

    saturated_colors = list(filter(lambda x: not x.is_saturated, medium_colors))

    if saturated_colors:
        secondary = saturated_colors.pop(0)
    elif medium_colors:
        secondary = medium_colors.pop(0)
    else:
        if light_colors:
            secondary = sorted(light_colors, key=lambda x: x.avg)[0]
        else:
            secondary = sorted(dark_colors, key=lambda x: x.avg, reverse=True)[0]

    return primary, light, dark, secondary


def get_poster_main_colors(url: str) -> Tuple[Color, Color, Color, Color]:
    """
    Returns the Primary, Light, Dark and Secondary colors of the given image
    """
    palette = _url_image_palette(url)
    return _range_colors(palette)
