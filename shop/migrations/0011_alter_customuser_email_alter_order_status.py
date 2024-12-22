# Generated by Django 5.1.4 on 2024-12-19 07:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0010_category_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='customuser',
            name='email',
            field=models.EmailField(blank=True, default=None, max_length=254, null=True, unique=True),
        ),
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(choices=[('Подан', 'Подан'), ('На рассмотрении', 'На рассмотрении'), ('Принят', 'Принят'), ('Выполняется', 'Выполняется'), ('Готов', 'Готов')], default='Подан', max_length=100, verbose_name='Статус заказа'),
        ),
    ]