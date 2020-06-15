# Generated by Django 3.0.4 on 2020-06-12 14:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shows', '0017_show_network'),
    ]

    operations = [
        migrations.AlterField(
            model_name='showprofile',
            name='wait',
            field=models.CharField(choices=[('N', "Don't Wait"), ('1D', 'Up to a Day'), ('2D', 'Up to 2 Days'), ('3D', 'Up to 3 Days'), ('4D', 'Up to 4 Days'), ('5D', 'Up to 5 Days'), ('6D', 'Up to 6 Days'), ('1W', 'Up to a Week'), ('F', 'Forever')], default='1W', help_text='How long to wait before downloading best available match, if full match not found', max_length=4),
        ),
    ]