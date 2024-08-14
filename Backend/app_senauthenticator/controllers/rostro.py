from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
import cv2
import numpy as np
import os
from app_senauthenticator.serializers.rostro import RostroSerializer
from app_senauthenticator.algoritmo.process.face_processing.face_matcher import FaceMatcherModel
from PIL import Image
from io import BytesIO


class FaceVerificationView(APIView):
    def __init__(self):
        self.face_matcher = FaceMatcherModel()
    
    def deserialize_image(self, image_path: str) -> np.ndarray:
        # Cargar la imagen desde el archivo
        image = cv2.imread(image_path)
        if image is None:
            raise ValueError("Error al cargar la imagen")
        return cv2.cvtColor(image, cv2.COLOR_BGR2RGB)  # Convertir a RGB si es necesario

    def post(self, request):
        serializer = RostroSerializer(data=request.data)
        if serializer.is_valid():
            current_face_path = serializer.validated_data['current_face']

            try:
                # Deserializar la imagen
                current_face_image = self.deserialize_image(current_face_path)
                
                # Aquí, asume que tienes una base de datos de rostros y sus nombres
                face_db = [...]  # Lista de imágenes de rostros almacenados
                name_db = [...]  # Lista de nombres de usuarios correspondientes

                matching, user_name = self.face_matcher.face_matching_deepid_model(current_face_image, face_db)
                
                return Response({"matching": matching, "user_name": user_name}, status=status.HTTP_200_OK)

            except ValueError as e:
                return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    