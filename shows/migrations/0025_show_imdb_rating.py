# Generated by Django 3.0.4 on 2020-12-05 07:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0024_show_status_line'),
    ]

    operations = [
        migrations.AddField(
            model_name='show',
            name='imdb_rating',
            field=models.CharField(blank=True, default='', max_length=24),
        ),
    ]
