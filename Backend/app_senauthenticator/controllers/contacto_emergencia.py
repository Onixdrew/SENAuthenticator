from app_senauthenticator.models import ContactoEmergencia 
from app_senauthenticator.serializers.contacto_emergencia import ContactoEmergenciaSerializer 
from rest_framework.decorators import api_view
from rest_framework.response import Response 
from rest_framework import status 


@api_view(['GET', 'POST', 'PUT', 'DELETE'])
def contacto_emergencia_controlador(request, pk=None):
    if pk:
        try:
            contacto_emergencia = ContactoEmergencia.objects.get(pk=pk)
        except ContactoEmergencia.DoesNotExist:
            return Response({'error': 'Contacto de emergencia no encontrado.'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)        
        
        if request.method == 'GET':
            try:
                serializer = ContactoEmergenciaSerializer(contacto_emergencia)
                if serializer.is_valid():
                    return Response(serializer.data)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
            
        elif request.method == 'PUT':
            try:
                serializer = ContactoEmergenciaSerializer(contacto_emergencia, data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_200_OK)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)                
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        elif request.method == 'DELETE':
            try:
                contacto_emergencia.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    else:
        if request.method == 'GET':
            try:
                contactos_emergencia = ContactoEmergencia.objects.all()
                serializer = ContactoEmergenciaSerializer(contactos_emergencia, many=True)
                return Response(serializer.data)                    
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

        elif request.method == 'POST':
            try:
                serializer = ContactoEmergenciaSerializer(data=request.data)
                if serializer.is_valid():
                    serializer.save()
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
                return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
            except Exception as e:
                return Response({'error': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
                