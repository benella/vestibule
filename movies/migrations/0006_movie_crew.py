# Generated by Django 3.2 on 2022-05-28 15:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0005_alter_movie_release_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='movie',
            name='crew',
            field=models.JSONField(default={}),
        ),
    ]