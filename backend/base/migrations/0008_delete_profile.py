# Generated by Django 4.1.7 on 2023-04-01 09:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("base", "0007_product_pickuplocations_alter_product_delivery_and_more"),
    ]

    operations = [
        migrations.DeleteModel(name="Profile",),
    ]
