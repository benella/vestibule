# Generated by Django 3.0.4 on 2020-05-02 08:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0013_auto_20200429_2003'),
    ]

    operations = [
        migrations.AddField(
            model_name='show',
            name='thumbnail_link',
            field=models.URLField(blank=True, default=''),
        ),
    ]
