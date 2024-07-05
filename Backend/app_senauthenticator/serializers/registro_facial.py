
from rest_framework import serializers

# importacion de modelos
from app_senauthenticator.models import RegistroFacial


class RegistroFacialSerializer(serializers.ModelSerializer):
    class Meta: 
        model = RegistroFacial 
        fields = '__all__' 