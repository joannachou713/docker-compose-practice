# Generated by Django 4.0 on 2021-12-17 11:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('comment', '0003_remove_comment_content_type_remove_comment_object_id_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='comment',
            old_name='blog_id',
            new_name='blog',
        ),
    ]