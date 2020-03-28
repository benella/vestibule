# Generated by Django 3.0 on 2019-12-20 11:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0006_show_runtime'),
        ('torrents', '0005_auto_20191210_0627'),
    ]

    operations = [
        migrations.AlterField(
            model_name='torrent',
            name='show',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='torrents', to='shows.Show'),
        ),
    ]
