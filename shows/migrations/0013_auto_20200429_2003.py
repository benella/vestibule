# Generated by Django 3.0.4 on 2020-04-29 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0012_showprofile_download_automatically'),
    ]

    operations = [
        migrations.AddField(
            model_name='show',
            name='next_episode',
            field=models.CharField(default='', max_length=256),
        ),
        migrations.AlterField(
            model_name='show',
            name='status',
            field=models.CharField(default='', max_length=256),
        ),
    ]
