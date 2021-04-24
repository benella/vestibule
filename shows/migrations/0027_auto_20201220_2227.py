# Generated by Django 3.0.4 on 2020-12-20 20:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0026_episode_season'),
    ]

    operations = [
        migrations.RenameField(
            model_name='episode',
            old_name='downloaded',
            new_name='is_downloaded',
        ),
        migrations.AddField(
            model_name='episode',
            name='air_status',
            field=models.CharField(default='', editable=False, max_length=256),
        ),
        migrations.AddField(
            model_name='episode',
            name='air_time_code',
            field=models.CharField(default='9999-99-99', editable=False, max_length=24),
        ),
        migrations.AddField(
            model_name='episode',
            name='is_aired',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='episode',
            name='season',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='episodes', to='shows.Season'),
        ),
    ]