# Generated by Django 3.2 on 2022-05-28 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0006_movie_crew'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='crew',
            field=models.JSONField(default=dict),
        ),
    ]
