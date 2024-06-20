// import 'dart:async';
// import 'dart:io';
// import 'dart:ui' as ui;

// import 'package:flutter/material.dart';
// import 'package:image_picker/image_picker.dart';
// import 'package:reconocimiento_app/services/auth_service.dart';
// import 'package:reconocimiento_app/services/database/database.dart';

// class RegisterScreen extends StatefulWidget {
//   const RegisterScreen({super.key});

//   @override
//   // ignore: library_private_types_in_public_api
//   _RegisterScreenState createState() => _RegisterScreenState();
// }

// class _RegisterScreenState extends State<RegisterScreen> {
//   final AuthService _authService = AuthService(Database.db);
//   final _formKey = GlobalKey<FormState>();
//   // ignore: unused_field
//   late String _username, _email, _password;
//   ui.Image? _faceImage;

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: const Text('Registro'),
//       ),
//       body: Padding(
//         padding: const EdgeInsets.all(20.0),
//         child: Form(
//           key: _formKey,
//           child: Column(
//             children: [
//               TextFormField(
//                 decoration: const InputDecoration(labelText: 'Username'),
//                 validator: (value) {
//                   if (value!.isEmpty) {
//                     return 'Por favor ingrese un username';
//                   }
//                   return null;
//                 },
//                 onSaved: (value) => _username = value!,
//               ),
//               TextFormField(
//                 decoration: const InputDecoration(labelText: 'Email'),
//                 validator: (value) {
//                   if (value!.isEmpty || !value.contains('@')) {
//                     return 'Por favor ingrese un email válido';
//                   }
//                   return null;
//                 },
//                 onSaved: (value) => _email = value!,
//               ),
//               TextFormField(
//                 decoration: const InputDecoration(labelText: 'Password'),
//                 obscureText: true,
//                 validator: (value) {
//                   if (value!.isEmpty || value.length < 8) {
//                     return 'Por favor ingrese una contraseña válida';
//                   }
//                   return null;
//                 },
//                 onSaved: (value) => _password = value!,
//               ),
//               const SizedBox(height: 20),
//               ElevatedButton(
//                 child: const Text('Tomar foto de rostro'),
//                 onPressed: () async {
//                   final picker = ImagePicker();
//                   final pickedFile =
//                       await picker.pickImage(source: ImageSource.camera);
//                   if (pickedFile != null) {
//                     final imageFile = File(pickedFile.path);
//                     final bytes = await imageFile.readAsBytes();
//                     final Completer<ui.Image> completer = Completer();
//                     ui.decodeImageFromList(bytes, (ui.Image img) {
//                       completer.complete(img);
//                     });
//                     final image = await completer.future;
//                     setState(() {
//                       _faceImage = image;
//                     });
//                   }
//                 },
//               ),
//               const SizedBox(height: 20),
//               ElevatedButton(
//                 child: const Text('Registrarse'),
//                 onPressed: () async {
//                   if (_formKey.currentState!.validate()) {
//                     _formKey.currentState!.save();
//                     if (_faceImage != null) {
//                       final bytes = await _faceImage!.toByteData(
//                           format: ui.ImageByteFormat.png);
//                       await _authService.registerUser(
//                           _username, _email, bytes!.buffer.asUint8List() as ui.Image);
//                       // ignore: use_build_context_synchronously
//                       Navigator.of(context).pushReplacementNamed('/home');
//                     } else {
//                       // Mostrar mensaje de error si no se ha tomado la foto
//                       ScaffoldMessenger.of(context).showSnackBar(
//                         const SnackBar(
//                           content: Text('Por favor tome una foto de rostro'),
//                         ),
//                       );
//                     }
//                   }
//                 },
//               ),
//             ],
//           ),
//         ),
//       ),
//     );
//   }
// }



import 'package:flutter/material.dart';
import 'package:reconocimiento_app/ui/pages/login/login_screen.dart';

class RegisterScreen extends StatefulWidget {
  @override
  _RegisterScreenState createState() => _RegisterScreenState();
}

class _RegisterScreenState extends State<RegisterScreen> {
  String _selectedDocumentType = 'Cédula Ciudadana';

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.green,
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Image.asset('images/register/logoSenaBlanco.png', height: 100),
            SizedBox(height: 20),
            Container(
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(20),
              ),
              margin: EdgeInsets.symmetric(horizontal: 20),
              padding: EdgeInsets.all(20),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Confirmemos que tu usuario no haya sido creado',
                    style: TextStyle(
                      color: Colors.black,
                      fontSize: 18,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  SizedBox(height: 20),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Tipo de documento',
                        style: TextStyle(
                          fontSize: 18,
                        ),
                      ),
                      Container(
                        padding: EdgeInsets.all(10),
                        decoration: BoxDecoration(
                          color: Colors.grey[200],
                          borderRadius: BorderRadius.circular(10),
                        ),
                        child: DropdownButton<String>(
                          isExpanded: true,
                          value: _selectedDocumentType,
                          onChanged: (String? newValue) {
                            setState(() {
                              _selectedDocumentType = newValue!;
                            });
                          },
                          items: [
                            DropdownMenuItem(
                              child: Text('Cédula Ciudadana'),
                              value: 'Cédula Ciudadana',
                            ),
                            DropdownMenuItem(
                              child: Text('Tarjeta de Identidad'),
                              value: 'Tarjeta de Identidad',
                            ),
                            DropdownMenuItem(
                              child: Text('Cédula de Extranjería'),
                              value: 'Cédula de Extranjería',
                            ),
                          ],
                          underline: SizedBox(), // Remove the underline
                        ),
                      ),
                    ],
                  ),
                  SizedBox(height: 20),
                  Text(
                    'Número de documento',
                    style: TextStyle(
                      fontSize: 18,
                    ),
                  ),
                  Container(
                    padding: EdgeInsets.all(10),
                    decoration: BoxDecoration(
                      color: Colors.grey[200],
                      borderRadius: BorderRadius.circular(10),
                    ),
                    child: TextField(
                      decoration: InputDecoration(
                        border: InputBorder.none,
                        hintText: 'Número de documento',
                      ),
                    ),
                  ),
                  SizedBox(height: 20),
                  ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.blue[900], 
                      foregroundColor: Colors.white, 
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10), 
                      ),
                    ),
                    onPressed: () {
                      // aqui hay que validar
                    },
                    child: Text('Validar'),
                  ),
                  SizedBox(height: 10),
                  ElevatedButton(
                    style: ElevatedButton.styleFrom(
                      backgroundColor: Colors.blue[900],
                      foregroundColor: Colors.white,
                      shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10), 
                      ),
                    ),
                    onPressed: () {
                      Navigator.push(
                        context,
                        MaterialPageRoute(builder: (context)=> Login())
                      );
                    },
                    child: Text('Regresar al inicio'),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
