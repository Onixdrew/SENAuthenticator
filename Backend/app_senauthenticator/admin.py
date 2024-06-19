from django.contrib import admin
from .models import ContactoEmergencia, Objeto, RegistroFacial, Programa, Ficha, Usuario, Ingreso

# Register your models here.
admin.site.register(ContactoEmergencia)
admin.site.register(Objeto)
admin.site.register(RegistroFacial)
admin.site.register(Programa)
admin.site.register(Ficha)
admin.site.register(Usuario)
admin.site.register(Ingreso)