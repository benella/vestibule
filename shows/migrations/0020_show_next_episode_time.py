# Generated by Django 3.0.4 on 2020-07-24 11:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0019_show_lookup_names'),
    ]

    operations = [
        migrations.AddField(
            model_name='show',
            name='next_episode_time',
            field=models.DateTimeField(blank=True, editable=False, null=True),
        ),
    ]