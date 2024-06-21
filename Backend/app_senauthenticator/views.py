
# Api del proyecto, para enviar y recibir información de manera eficiente
from rest_framework import generics
# se importan los modelos 
from .models import RegistroFacial, Programa, Ficha, Usuario, Objeto, ContactoEmergencia, Ingreso
# se importan los serializers
from .serializers import RegistroFacialSerializer, ProgramaSerializer, FichaSerializer, UsuarioSerializer, ObjetoSerializer, ContactoEmergenciaSerializer, IngresoSerializer

# extensiones para hacer las autenticaciones

from rest_framework.decorators import api_view
# En esta importamos todos los controladores de serializer
from .serializers import *

from rest_framework.response import Response
# Aquí importo como una función para crear los tokens
from rest_framework.authtoken.models import Token
from rest_framework import status

from django.shortcuts import get_list_or_404
from rest_framework.decorators import authentication_classes
from rest_framework. permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication

# Controlador de los programas de formación
class RegistroFacialListarCrear(generics.ListCreateAPIView): # la vista generica ListCreateAPIView maneja las solicitudes listar y crear (GET, POST)
    queryset = RegistroFacial.objects.all() # se obtienen todos los objetos del modelo
    serializer_class = RegistroFacialSerializer # se utiliza el serializer para convertir los objetos a JSON

class RegistroFacialDetalles(generics.RetrieveUpdateDestroyAPIView): # la vista generica RetrieveUpdateDestroyAPIView maneja las solicitudes para recuperar por pk, actualizar y eliminar (GET, PUT Y DELETE)
    queryset = RegistroFacial.objects.all()
    serializer_class = RegistroFacialSerializer


# Controlador de los programas de formación
class ProgramaListarCrear(generics.ListCreateAPIView):
    queryset = Programa.objects.all()
    serializer_class = ProgramaSerializer

class ProgramaDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Programa.objects.all()
    serializer_class = ProgramaSerializer


# Controlador de las Fichas de los programas de formación
class FichaListarCrear(generics.ListCreateAPIView):
    queryset = Ficha.objects.all()
    serializer_class = FichaSerializer

class FichaDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ficha.objects.all()    
    serializer_class = FichaSerializer


# Controlador de los Usuarios
class UsuarioListarCrear(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()    
    serializer_class = UsuarioSerializer

class UsuarioDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer


# Controlador de los Objetos que registran los Usuarios    
class ObjetoListarCrear(generics.ListCreateAPIView):
    queryset = Objeto.objects.all()
    serializer_class = ObjetoSerializer

class ObjetoDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Objeto.objects.all()
    serializer_class = ObjetoSerializer


# Controlador de los contactos de emergencia que tienen los Usuarios
class ContactoEmergenciaListarCrear(generics.ListCreateAPIView):
    queryset = ContactoEmergencia.objects.all()
    serializer_class = ContactoEmergenciaSerializer

class ContactoEmergenciaDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactoEmergencia.objects.all()
    serializer_class = ContactoEmergenciaSerializer


# Controlador de los Ingresos de los usuarios al centro de formación
class IngresoListarCrear(generics.ListCreateAPIView):
    queryset = Ingreso.objects.all()
    serializer_class = IngresoSerializer

class IngresoDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ingreso.objects.all()
    serializer_class = IngresoSerializer