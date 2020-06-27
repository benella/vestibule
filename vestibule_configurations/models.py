from django.db import models


class VestibuleConfiguration(models.Model):
    name = models.CharField(max_length=256)
    value = models.CharField(max_length=256, default="")

    def __str__(self):
        return self.name

    @property
    def bool_value(self):
        return self.value.lower() == "true"
