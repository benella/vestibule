# Generated by Django 3.0.4 on 2020-04-25 13:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0007_auto_20191221_1320'),
    ]

    operations = [
        migrations.CreateModel(
            name='ShowProfile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quality', models.CharField(choices=[('720P', '720P'), ('1080P', '1080P'), ('4K', '4K')], default='1080P', max_length=10)),
                ('subtitles', models.BooleanField(default=True)),
                ('high_quality_source', models.BooleanField(default=True)),
                ('wait', models.CharField(choices=[('N', "Don't Wait"), ('1D', '1 Day'), ('2D', '2 Days'), ('3D', '3 Days'), ('4D', '4 Days'), ('5D', '5 Days'), ('6D', '6 Days'), ('1W', '1 Week'), ('F', 'Forever')], default='F', max_length=4)),
            ],
        ),
        migrations.AddField(
            model_name='show',
            name='profile',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='shows.ShowProfile'),
        ),
    ]
