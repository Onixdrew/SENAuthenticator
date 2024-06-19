import 'dart:io';
import 'dart:ui' as ui;

import 'package:mongo_dart/mongo_dart.dart';
import 'package:path_provider/path_provider.dart';
import 'package:reconocimiento_app/models/user_models.dart';

/// Servicio de autenticación para el reconocimiento facial
class AuthService {
  /// Inicializa una nueva instancia de la clase [AuthService] con una base de datos opcional
  AuthService(this.db);

  /// Base de datos de MongoDB
  final Db? db;

  /// Ignorar esta propiedad, no se utiliza en este código
  get FlutterFaceApi => null;

  /// Registra un nuevo usuario con un nombre de usuario, correo electrónico y una imagen facial
  Future<void> registerUser(String username, String email, ui.Image faceImage) async {
    // Crea un nuevo usuario y una nueva imagen facial
    final user = User(username: username, email: email, id: '', password: '', faces: []);
    final face = Face(faceImage: await _encodeImage(faceImage), id: '', userId: '');

    // Inserta el usuario y la imagen facial en la base de datos
    await db?.collection('users').insertOne({
      'username': user.username,
      'email': user.email,
      'faces': [face.toJson()],
    });
  }

  /// Inicia sesión en el sistema con un correo electrónico y una contraseña
  Future<User?> loginUser(String email, String password) async {
    // Busca un usuario en la base de datos con el correo electrónico y la contraseña proporcionados
    final user = await db?.collection('users').findOne({'email': email, 'password': password});

    // Si se encontró un usuario, devuelve un objeto User creado a partir del documento de la base de datos
    if (user != null) {
      return User.fromJson(user);
    } else {
      // Si no se encontró un usuario, devuelve null
      return null;
    }
  }

  /// Inicia sesión en el sistema con una imagen facial
  Future<User?> loginWithFace(ui.Image faceImage) async {
    // Busca todas las imágenes faciales en la base de datos
    final faces = await db?.collection('faces').find().toList();

    // Si se encontraron imágenes faciales, las compara con la imagen facial proporcionada
    if (faces != null) {
      for (final face in faces) {
        final similarity = await FlutterFaceApi.compareFaces(faceImage, face['faceImage']);
        if (similarity > 0.5) {
          // Si la similitud es mayor al 50%, busca el usuario asociado a la imagen facial
          final user = await db?.collection('users').findOne({'_id': face['userId']});
          return User.fromJson(user!);
        }
      }
    }

    // Si no se encontró una imagen facial compatible, devuelve null
    return null;
  }

  /// Cierra la sesión del usuario actual
  Future<void> logoutUser() async {
    // Implementar la lógica de cierre de sesión
  }

  /// Codifica una imagen en formato PNG y la guarda en el almacenamiento local
  Future<String> _encodeImage(ui.Image image) async {
    final directory = await getApplicationDocumentsDirectory();
    final file = File('${directory.path}/face_image.png');
    await image.toByteData(format: ui.ImageByteFormat.png).then((byteData) {
      file.writeAsBytesSync(byteData!.buffer.asUint8List());
    });
    return file.path;
  }

}