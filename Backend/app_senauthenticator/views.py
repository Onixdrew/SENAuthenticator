
# API de autenticación con tokens

# se importan los modelos 
from .models import Usuario
# se importan los serializers
from app_senauthenticator.serializers.usuario import UsuarioSerializer

# extensiones para hacer las autenticaciones

from rest_framework.decorators import api_view, authentication_classes, permission_classes
# En esta importamos todos los controladores de serializer
from .serializers import *

from rest_framework.response import Response # sirve para devolver respuestas HTTP
# Aquí importo como una función para crear los tokens
from rest_framework.authtoken.models import Token
from rest_framework import status # Sirve para usar códigos de estado HTTP

from rest_framework. permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication


@api_view(['POST'])
def login (request):
    # tipo_documento = request.data.get('tipo_documento_usuario')
    numero_documento = request.data.get('numero_documento_usuario')
    contrasenia_usuario = request.data.get('contrasenia_usuario')

    if not numero_documento or not contrasenia_usuario:
        return Response({'error': 'Todos los campos son requeridos'}, status=status.HTTP_400_BAD_REQUEST)

<<<<<<< HEAD
    # user = authenticate(numero_documento=numero_documento, contrasenia_usuario=contrasenia_usuario)
    user = Usuario.objects.get(numero_documento_usuario=numero_documento)
    usuario = UsuarioSerializer(user)
=======

# Controlador de los programas de formación
class ProgramaListarCrear(generics.ListCreateAPIView):
    queryset = Programa.objects.all()
    serializer_class = ProgramaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class ProgramaDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Programa.objects.all()
    serializer_class = ProgramaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


# Controlador de las Fichas de los programas de formación
class FichaListarCrear(generics.ListCreateAPIView):
    queryset = Ficha.objects.all()
    serializer_class = FichaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class FichaDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ficha.objects.all()
    serializer_class = FichaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


# Controlador de los Usuarios
class UsuarioListarCrear(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class UsuarioDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


# Controlador de los Objetos que registran los Usuarios
class ObjetoListarCrear(generics.ListCreateAPIView):
    queryset = Objeto.objects.all()
    serializer_class = ObjetoSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class ObjetoDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Objeto.objects.all()
    serializer_class = ObjetoSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


# Controlador de los contactos de emergencia que tienen los Usuarios
class ContactoEmergenciaListarCrear(generics.ListCreateAPIView):
    queryset = ContactoEmergencia.objects.all()
    serializer_class = ContactoEmergenciaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]
>>>>>>> 6a349d068ad62887e084015e1ee59920b89e1795
    
    print("USUARIO ==========",usuario.data)
    

import sys
sys.setrecursionlimit(2000)
import logging

logger = logging.getLogger(__name__)


@api_view(['POST'])
def register(request):
    try:
        logger.info("Iniciando el proceso de registro.")
        serializer = UsuarioSerializer(data=request.data)
        # password=serializer.data['contrasenia_usuario']
        
        if serializer.is_valid():
            # hashed_password = make_password(password)
            serializer.save()
            # token, created = Token.objects.get_or_create(user=serializer.data)
            logger.info("Usuario registrado exitosamente.")
            return Response({'mensaje': 'Usuario registrado exitosamente'}, status=status.HTTP_201_CREATED)
            # return Response({'token': token.key, 'user': serializer.data}, status=status.HTTP_201_CREATED)    
        else:
            logger.error(f"Errores de validación: {serializer.errors}")
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    except Exception as e:
        logger.error(f"Error durante el registro:", e)
        return Response({'detail': str(e)}, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated])
def profile (request):
    # print(request.user)
    print (request.user.id)
    serializer =UsuarioSerializer(instance=request.user)
    
    # return Response("Estas Logeado con {}".format(request.user.username),status=status.HTTP_200_OK)
    return Response(serializer.data,status=status.HTTP_200_OK)
