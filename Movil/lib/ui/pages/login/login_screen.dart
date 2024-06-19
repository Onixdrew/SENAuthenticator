import 'dart:io';

import 'package:flutter/material.dart';
import 'package:image_picker/image_picker.dart';
import 'package:reconocimiento_app/services/auth_service.dart';

import '../../../services/database/database.dart';

class LoginScreen extends StatefulWidget {
  const LoginScreen({super.key});

  @override
  // ignore: library_private_types_in_public_api
  _LoginScreenState createState() => _LoginScreenState();
}

class _LoginScreenState extends State<LoginScreen> {
  final AuthService _authService = AuthService(Database.db);
  final _formKey = GlobalKey<FormState>();
  late String _email, _password;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Login'),
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
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
                child: const Text('Iniciar sesión'),
                onPressed: () async {
                  if (_formKey.currentState!.validate()) {
                    _formKey.currentState?.save();
                    final user = await _authService.loginUser(_email, _password);
                    if (user!= null) {
                      // ignore: use_build_context_synchronously
                      Navigator.pushReplacementNamed(context, '/home');
                    } else {
                      // ignore: use_build_context_synchronously
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Credenciales incorrectas')),
                      );
                    }
                  }
                },
              ),
              const SizedBox(height: 20),
              ElevatedButton(
                child: const Text('Iniciar sesión con rostro'),
                onPressed: () async {
                  final picker = ImagePicker();
                  // ignore: deprecated_member_use
                  final pickedFile = await picker.getImage(source: ImageSource.camera);
                  final imageFile = File(pickedFile!.path);
                  final image = await decodeImageFromList(imageFile.readAsBytesSync());
                  final user = await _authService.loginWithFace(image);
                  if (user!= null) {
                    // ignore: use_build_context_synchronously
                    Navigator.pushReplacementNamed(context, '/home');
                  } else {
                    // ignore: use_build_context_synchronously
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(content: Text('Rostro no reconocido')),
                    );
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