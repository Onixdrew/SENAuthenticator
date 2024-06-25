
# Api del proyecto, para enviar y recibir información de manera eficiente

from rest_framework import generics
# se importan los modelos 
from .models import RegistroFacial, Programa, Ficha, Usuario, Objeto, ContactoEmergencia, Ingreso
# se importan los serializers
from .serializers import RegistroFacialSerializer, ProgramaSerializer, FichaSerializer, UsuarioSerializer, ObjetoSerializer, ContactoEmergenciaSerializer, IngresoSerializer

# extensiones para hacer las autenticaciones

from rest_framework.decorators import api_view, authentication_classes, permission_classes
# En esta importamos todos los controladores de serializer
from .serializers import *

from rest_framework.response import Response # sirve para devolver respuestas HTTP
# Aquí importo como una función para crear los tokens
from rest_framework.authtoken.models import Token
from rest_framework import status # Sirve para usar códigos de estado HTTP

from django.shortcuts import get_object_or_404
from rest_framework. permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication


# Controlador de los programas de formación
# class RegistroFacialListarCrear(generics.ListCreateAPIView): # la vista generica ListCreateAPIView maneja las solicitudes listar y crear (GET, POST)
#     queryset = RegistroFacial.objects.all() # se obtienen todos los objetos del modelo
#     serializer_class = RegistroFacialSerializer# se utiliza el serializer para convertir los objetos a JSON
#     authentication_classes = [TokenAuthentication]
#     permission_classes = [IsAuthenticated]

# class RegistroFacialDetalles(generics.RetrieveUpdateDestroyAPIView): # la vista generica RetrieveUpdateDestroyAPIView maneja las solicitudes para recuperar por pk, actualizar y eliminar (GET, PUT Y DELETE)
#     queryset = RegistroFacial.objects.all()
#     serializer_class = RegistroFacialSerializer
#     authentication_classes = [TokenAuthentication]
#     permission_classes = [IsAuthenticated]


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
    

class ContactoEmergenciaDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = ContactoEmergencia.objects.all()
    serializer_class = ContactoEmergenciaSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]


# Controlador de los Ingresos de los usuarios al centro de formación
class IngresoListarCrear(generics.ListCreateAPIView):
    queryset = Ingreso.objects.all()
    serializer_class = IngresoSerializer
    authentication_classes = [TokenAuthentication]
    permission_classes = [IsAuthenticated]

class IngresoDetalles(generics.RetrieveUpdateDestroyAPIView):
    queryset = Ingreso.objects.all()
    serializer_class = IngresoSerializer


# nuevos controladores

@api_view(['GET', 'POST', 'PUT', 'DELETE']) # Se especifica las solicitudes HTTP que va a manejar el controlador
def registro_facial_controlador(request, pk=None): # La función contiene dos parámetros, request: Recibe las solicitudes HTTP y pk: Recibe la primary key de un dato.
    # Si existe la pk se manejan los métodos GET, PUT, DELETE
    if pk:
        try:            
            registro_facial = RegistroFacial.objects.get(pk=pk) # Se intenta obtener el dato por su pk
        except RegistroFacial.DoesNotExist:
            return Response({'error': 'Registro facial no encontrado'}, status=status.HTTP_404_NOT_FOUND) # Si el dato no existe se devuelve un error 404, indicando que no fue encontrada la solicitud
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) # Si ocurre cualquier otro error, se devuelve un error 500, indicando un error interno en el servidor

        # Si se obtiene el dato, se serializa y se devuelve en formato json 
        if request.method == 'GET':
            try:
                serializer = RegistroFacialSerializer(registro_facial)
                return Response(serializer.data)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 
        
        # Solicitud para actualizar un dato
        elif request.method == 'PUT':
            try:
                serializer = RegistroFacialSerializer(registro_facial, data=request.data) # Se intenta serializar la instancia del modelo, y los nuevos datos para actualizar
                if serializer.is_valid(): # si los datos son válidos
                    serializer.save() # Se guarda la instancia actualizada
                    return Response(serializer.data) # Se devuelve una respuesta con los datos actualizados
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # Si los datos no son válidos, se devuelve un error 400, indicando una solicitud incorrecta.
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR) 
        
        # Solicitud para eliminar un dato
        elif request.method == 'DELETE':
            try:
                registro_facial.delete() # Se intenta eliminar el dato
                return Response(status=status.HTTP_204_NO_CONTENT) # Si se elimina, se devuelve una respuesta con un estado 204, indicando que no hay contenido
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)        


    # Si no existe la pk se manejan los métodos GET, POST
    else:
        # Solicitud para obtener todos los datos en una lista
        if request.method == 'GET':
            try:
                registros_faciales = RegistroFacial.objects.all() # Se intenta obtener todos los datos
                serializer = RegistroFacialSerializer(registros_faciales, many=True) # Se serializan los datos con la opción many=True para indicar que se están serializando múltiples objetos
                return Response(serializer.data) # Se devuelve una respuesta con los datos serializados
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        # Solicitud para crear un dato
        elif request.method == 'POST':
            try:
                serializer = RegistroFacialSerializer(data=request.data) # Se intenta crear un nuevo dato utilizando los campos proporcinados en la solicitud request.data, y se serializa
                if serializer.is_valid(): # si el dato es válido
                    serializer.save() # Se guarda 
                    return Response(serializer.data, status=status.HTTP_201_CREATED) # Se devuelve una respuesta con un código de estado 201, indicando que fue creado
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) # Si el dato no es válido, se devuelve un código de estado 400, indicando una solicitud inconrrecta
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


# @api_view(['GET', 'POST', 'PUT', 'DELETE'])
# def programa_controlador(request, pk):
#     if pk:
#         try:            
#             programa = Programa.objects.get(pk=pk)
#         except Programa.DoesNotExist:
#             return Response({'error': 'Programa no encontrado'}, status=status.HTTP_404_NOT_FOUND)
#         except Exception as e:
#             return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
        
#         if request.method == 'GET':
#             try:
#                 serializer = ProgramaSerializer(programa)
#                 return Response(serializer.data)
#             except Exception as e:
#                 return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)        

#         elif request.method == 'PUT':
#             try:
#                 serializer = ProgramaSerializer(programa, request.data)
#                 if serializer.is_valid():
#                     serializer.save()
#                     return Response(serializer.data)
#                 return Response(serializer.errrors, status=status.HTTP_400_BAD_REQUEST)
#             except Exception as e:
#                 return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

#         elif request.method == 'DELETE':
#             try:
#                 programa.delete()
#                 return Response(status=status.HTTP_204_NO_CONTENT)
#             except Exception as e:
#                 return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)    

#     else:
                    
