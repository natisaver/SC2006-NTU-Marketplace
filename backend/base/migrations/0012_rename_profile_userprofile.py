# Generated by Django 4.1.7 on 2023-04-01 10:00

from django.conf import settings
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ("base", "0011_profile"),
    ]

    operations = [
        migrations.RenameModel(old_name="Profile", new_name="Userprofile",),
    ]