# Generated by Django 3.0.4 on 2020-04-09 20:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('torrents', '0011_auto_20191221_1320'),
    ]

    operations = [
        migrations.AddField(
            model_name='torrent',
            name='transmission_torrent_id',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]