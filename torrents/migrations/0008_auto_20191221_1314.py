# Generated by Django 3.0 on 2019-12-21 13:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('torrents', '0007_torrent_feed'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='torrent',
            options={'ordering': ('-season', '-episode', 'feed')},
        ),
        migrations.RemoveField(
            model_name='torrent',
            name='feed_name',
        ),
    ]
