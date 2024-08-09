
# Los serializadores convierten los diccionarios de python a un objeto json para que se puedan utilizar en una API

from rest_framework import serializers

# importacion de modelos
from app_senauthenticator.models import Usuario

# Serializador del Usuario
class UsuarioSerializer(serializers.ModelSerializer):
    class Meta: # Se utiliza la clase Meta para definir la estructura del serializador
        model = Usuario # Se define el modelo que se va a serializar
        fields = '__all__' # Se indica que campos se van a serializar, en este caso todos los campos