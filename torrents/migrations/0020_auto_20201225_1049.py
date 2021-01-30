# Generated by Django 3.0.4 on 2020-12-25 08:49

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0028_auto_20201220_2242'),
        ('torrents', '0019_auto_20200705_1847'),
    ]

    operations = [
        migrations.AddField(
            model_name='torrent',
            name='episode_data',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='torrents', to='shows.Episode'),
        ),
        migrations.AddField(
            model_name='torrent',
            name='season_data',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='torrents', to='shows.Season'),
        ),
    ]
