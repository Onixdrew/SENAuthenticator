# Generated by Django 4.1.13 on 2024-06-21 04:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app_senauthenticator', '0003_usuario_contrasenia_usuario'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ficha',
            name='jornada_ficha',
            field=models.CharField(choices=[('Mañana', 'Mañana'), ('Tarde', 'Tarde'), ('Noche', 'Noche')], max_length=50),
        ),
    ]
