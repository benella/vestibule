# Generated by Django 3.2 on 2022-05-28 15:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0007_alter_movie_crew'),
    ]

    operations = [
        migrations.AlterField(
            model_name='movie',
            name='crew',
            field=models.JSONField(blank=True, default=dict, null=True),
        ),
    ]