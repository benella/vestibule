# Generated by Django 2.2.8 on 2019-12-06 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0004_show_year'),
    ]

    operations = [
        migrations.AddField(
            model_name='show',
            name='number_of_seasons',
            field=models.CharField(blank=True, default='', max_length=24),
        ),
    ]
