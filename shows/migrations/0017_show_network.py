# Generated by Django 3.0.4 on 2020-06-06 13:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0016_auto_20200502_1144'),
    ]

    operations = [
        migrations.AddField(
            model_name='show',
            name='network',
            field=models.CharField(blank=True, default='', max_length=24),
        ),
    ]
