# Generated by Django 4.1.13 on 2024-08-11 19:47

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('app_senauthenticator', '0003_alter_programa_tipo_formacion_programa_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Tutor',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre_tutor', models.CharField(db_column='nombre_tutor', max_length=50)),
                ('apellido_tutor', models.CharField(db_column='apellido_tutor', max_length=50)),
                ('tipo_documento_tutor', models.CharField(choices=[('Cedula de ciudadania', 'Cedula de ciudadania'), ('Cedula de extranjeria', 'Cedula de extranjeria')], db_column='tipo_documento_tutor', default='Cedula de ciudadania', max_length=50)),
                ('numero_documento_tutor', models.CharField(db_column='numero_documento_tutor', max_length=20, unique=True)),
                ('celular_tutor', models.CharField(db_column='celular_tutor', max_length=12)),
                ('genero_tutor', models.CharField(choices=[('Masculino', 'Masculino'), ('Femenino', 'Femenino')], db_column='genero_tutor', max_length=20)),
                ('parentezco_tutor', models.CharField(db_column='parentezco_tutor', max_length=30)),
            ],
        ),
        migrations.AlterField(
            model_name='ficha',
            name='programa_ficha',
            field=models.ForeignKey(db_column='programa_ficha', default=1, on_delete=django.db.models.deletion.PROTECT, to='app_senauthenticator.programa'),
        ),
        migrations.AlterField(
            model_name='ingreso',
            name='usuario_ingreso',
            field=models.ForeignKey(db_column='usuario_ingreso', default=1, on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='objeto',
            name='foto_objeto',
            field=models.ImageField(db_column='foto_objeto', upload_to='foto_objeto'),
        ),
        migrations.AlterField(
            model_name='objeto',
            name='usuario_objeto',
            field=models.ForeignKey(db_column='usuario_objeto', default=1, on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='registrofacial',
            name='usuario_registro_facial',
            field=models.ForeignKey(db_column='usuario_registro_facial', default=1, on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='usuario',
            name='ficha_usuario',
            field=models.ForeignKey(db_column='ficha_usuario', default=1, on_delete=django.db.models.deletion.PROTECT, to='app_senauthenticator.ficha'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='usuario',
            name='numero_documento_usuario',
            field=models.CharField(db_column='numero_documento_usuario', max_length=20, unique=True),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='rol_usuario',
            field=models.CharField(choices=[('Aprendiz', 'Aprendiz'), ('Instructor', 'Instructor'), ('Administrador', 'Administrador'), ('Funcionario', 'Funcionario'), ('Guardia de seguridad', 'Guardia de seguridad'), ('Usuario', 'Usuario')], db_column='rol_usuario', default='Usuario', max_length=20),
        ),
        migrations.AlterField(
            model_name='usuario',
            name='tipo_documento_usuario',
            field=models.CharField(choices=[('Cedula de ciudadania', 'Cedula de ciudadania'), ('Tarjeta de Identidad', 'Tarjeta de Identidad'), ('Cedula de extranjeria', 'Cedula de extranjeria')], db_column='tipo_documento_usuario', default='Cedula de ciudadania', max_length=50),
        ),
        migrations.DeleteModel(
            name='ContactoEmergencia',
        ),
        migrations.AddField(
            model_name='tutor',
            name='usuario_tutor',
            field=models.ForeignKey(db_column='usuario_tutor', on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL),
        ),
    ]