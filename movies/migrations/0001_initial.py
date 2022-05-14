# Generated by Django 3.2 on 2022-05-08 11:23

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Movie',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('imdb_id', models.CharField(max_length=24)),
                ('title', models.CharField(blank=True, default='', max_length=256)),
                ('year', models.CharField(blank=True, default='', max_length=24)),
                ('poster_link', models.URLField(blank=True, default='')),
                ('status', models.CharField(blank=True, default='', max_length=256)),
                ('palette', models.CharField(blank=True, default='', max_length=256, null=True)),
                ('lookup_names', models.TextField(blank=True, default='', null=True)),
                ('custom_lookup_names', models.TextField(blank=True, default='', null=True)),
                ('imdb_rating', models.CharField(blank=True, default='', max_length=24)),
            ],
            options={
                'ordering': ('title',),
            },
        ),
    ]
