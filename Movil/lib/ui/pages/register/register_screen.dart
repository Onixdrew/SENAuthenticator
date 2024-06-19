import 'dart:async';
import 'dart:io';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:reconocimiento_app/services/auth_service.dart';
import 'package:reconocimiento_app/services/database/database.dart';

class RegisterScreen extends StatefulWidget {
  const RegisterScreen({super.key});

  @override
  // ignore: library_private_types_in_public_api
  _RegisterScreenState createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  final AuthService _authService = AuthService(Database.db);
  final _formKey = GlobalKey<FormState>();
  // ignore: unused_field
  late String _username, _email, _password;
  ui.Image? _faceImage;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Registro'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: const InputDecoration(labelText: 'Username'),
                validator: (value) {
                  if (value!.isEmpty) {
                    return 'Por favor ingrese un username';
                  }
                  return null;
                },
                onSaved: (value) => _username = value!,
              ),
              TextFormField(
                decoration: const InputDecoration(labelText: 'Email'),
                validator: (value) {
                  if (value!.isEmpty || !value.contains('@')) {
                    return 'Por favor ingrese un email válido';
                  }
                  return null;
                },
                onSaved: (value) => _email = value!,
              ),
              TextFormField(
                decoration: const InputDecoration(labelText: 'Password'),
                obscureText: true,
                validator: (value) {
                  if (value!.isEmpty || value.length < 8) {
                    return 'Por favor ingrese una contraseña válida';
                  }
                  return null;
                },
                onSaved: (value) => _password = value!,
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                child: const Text('Tomar foto de rostro'),
                onPressed: () async {
                  final picker = ImagePicker();
                  final pickedFile =
                      await picker.pickImage(source: ImageSource.camera);
                  if (pickedFile != null) {
                    final imageFile = File(pickedFile.path);
                    final bytes = await imageFile.readAsBytes();
                    final Completer<ui.Image> completer = Completer();
                    ui.decodeImageFromList(bytes, (ui.Image img) {
                      completer.complete(img);
                    });
                    final image = await completer.future;
                    setState(() {
                      _faceImage = image;
                    });
                  }
                },
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                child: const Text('Registrarse'),
                onPressed: () async {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState!.save();
                    if (_faceImage != null) {
                      final bytes = await _faceImage!.toByteData(
                          format: ui.ImageByteFormat.png);
                      await _authService.registerUser(
                          _username, _email, bytes!.buffer.asUint8List() as ui.Image);
                      // ignore: use_build_context_synchronously
                      Navigator.of(context).pushReplacementNamed('/home');
                    } else {
                      // Mostrar mensaje de error si no se ha tomado la foto
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(
                          content: Text('Por favor tome una foto de rostro'),
                        ),
                      );
                    }
                  }
                },
              ),
            ],
          ),
        ),
      ),
    );
  }
}
