# Generated by Django 3.0.4 on 2020-07-24 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0021_auto_20200724_1633'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='show',
            name='next_episode_time',
        ),
        migrations.AddField(
            model_name='show',
            name='next_episode_time_code',
            field=models.CharField(default='9999-99-99', editable=False, max_length=24),
        ),
    ]
