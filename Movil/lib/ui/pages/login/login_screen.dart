// import 'dart:io';

// import 'package:flutter/material.dart';
// import 'package:image_picker/image_picker.dart';
// import 'package:reconocimiento_app/services/auth_service.dart';

// import '../../../services/database/database.dart';

// class LoginScreen extends StatefulWidget {
//   const LoginScreen({super.key});

//   @override
//   // ignore: library_private_types_in_public_api
//   _LoginScreenState createState() => _LoginScreenState();
// }

// class _LoginScreenState extends State<LoginScreen> {
//   final AuthService _authService = AuthService(Database.db);
//   final _formKey = GlobalKey<FormState>();
//   late String _email, _password;

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: const Text('Login'),
//       ),
//       body: Padding(
//         padding: const EdgeInsets.all(20.0),
//         child: Form(
//           key: _formKey,
//           child: Column(
//             children: [
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
//                 child: const Text('Iniciar sesión'),
//                 onPressed: () async {
//                   if (_formKey.currentState!.validate()) {
//                     _formKey.currentState?.save();
//                     final user = await _authService.loginUser(_email, _password);
//                     if (user!= null) {
//                       // ignore: use_build_context_synchronously
//                       Navigator.pushReplacementNamed(context, '/home');
//                     } else {
//                       // ignore: use_build_context_synchronously
//                       ScaffoldMessenger.of(context).showSnackBar(
//                         const SnackBar(content: Text('Credenciales incorrectas')),
//                       );
//                     }
//                   }
//                 },
//               ),
//               const SizedBox(height: 20),
//               ElevatedButton(
//                 child: const Text('Iniciar sesión con rostro'),
//                 onPressed: () async {
//                   final picker = ImagePicker();
//                   // ignore: deprecated_member_use
//                   final pickedFile = await picker.getImage(source: ImageSource.camera);
//                   final imageFile = File(pickedFile!.path);
//                   final image = await decodeImageFromList(imageFile.readAsBytesSync());
//                   final user = await _authService.loginWithFace(image);
//                   if (user!= null) {
//                     // ignore: use_build_context_synchronously
//                     Navigator.pushReplacementNamed(context, '/home');
//                   } else {
//                     // ignore: use_build_context_synchronously
//                     ScaffoldMessenger.of(context).showSnackBar(
//                       const SnackBar(content: Text('Rostro no reconocido')),
//                     );
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
import 'package:flutter/services.dart';
import 'package:reconocimiento_app/ui/pages/home/home_page.dart';
import 'package:reconocimiento_app/ui/pages/register/register_screen.dart';

class Login extends StatefulWidget {
  @override
  State<Login> createState() => _LoginState();
}

class _LoginState extends State<Login> {
  TextEditingController documentNumberController = TextEditingController();
  TextEditingController passwordController = TextEditingController();

  String selectedDocumentType = 'Cédula de ciudadanía';
  List<String> documentTypes = ['Cédula de ciudadanía', 'Tarjeta de identidad', 'Cédula de extranjería'];

  final _formKey = GlobalKey<FormState>();

  void _login() {
    if (_formKey.currentState!.validate()) {
      String documentNumber = documentNumberController.text;
      String password = passwordController.text;

      // autenticación 
      if (documentNumber == '123' && password == '123') {
        showDialog(
          context: context,
          barrierDismissible: false,
          builder: (BuildContext context) {
            Future.delayed(Duration(seconds: 1), () {
              Navigator.of(context).pop(true); // Cierra el modal
            });
            return AlertDialog(
              title: Text('Inicio de sesión exitoso'),
              content: Text('Sesión iniciada con éxito.'),
            );
          },
        ).then((_) {
          Navigator.push(
            context,
            MaterialPageRoute(builder: (context) => HomePage()),
          );
        });
      } else {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text('Número de documento o contraseña incorrectos')),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.green,
      body: Stack(
        children: [
          Positioned(
            top: 0,
            left: 0,
            child: Image.asset('images/login/LogoReconocimientoFacialBlanco.png', height: 50),
          ),
          Positioned(
            top: 0,
            right: 0,
            child: Image.asset('images/login/logoSenaBlanco.png', height: 50),
          ),
          Container(
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(20)
            ),
            margin: EdgeInsets.only(top: 100, left: 20, right: 20, bottom: 50),
            padding: EdgeInsets.only(left: 20, right: 20),
            child: Center(
              child: Form(
                key: _formKey,
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Container(
                      child: Text("Ingreso Usuario Registrado"),
                    ),
                    SizedBox(height: 20),
                    Text("Tipo de documento"),
                    Container(
                      padding: EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: Colors.grey[200],
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: DropdownButton<String>(
                        isExpanded: true,
                        value: selectedDocumentType,
                        onChanged: (String? newValue) {
                          setState(() {
                            selectedDocumentType = newValue!;
                          });
                        },
                        items: documentTypes.map<DropdownMenuItem<String>>((String value) {
                          return DropdownMenuItem<String>(
                            value: value,
                            child: Text(value),
                          );
                        }).toList(),
                        underline: SizedBox(), // Remove the underline
                      ),
                    ),
                    SizedBox(height: 20),
                    Text("Número de documento"),
                    Container(
                      padding: EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: Colors.grey[200],
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: TextFormField(
                        controller: documentNumberController,
                        decoration: InputDecoration(
                          border: InputBorder.none,
                          hintText: "Número de documento"
                        ),
                        inputFormatters: <TextInputFormatter>[
                          FilteringTextInputFormatter.digitsOnly
                        ],
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'Por favor ingrese su número de documento';
                          }
                          return null;
                        },
                      ),
                    ),
                    SizedBox(height: 20),
                    Text("Contraseña"),
                    Container(
                      padding: EdgeInsets.all(10),
                      decoration: BoxDecoration(
                        color: Colors.grey[200],
                        borderRadius: BorderRadius.circular(10),
                      ),
                      child: TextFormField(
                        controller: passwordController,
                        obscureText: true,
                        decoration: InputDecoration(
                          border: InputBorder.none,
                          hintText: "Contraseña"
                        ),
                        validator: (value) {
                          if (value == null || value.isEmpty) {
                            return 'Por favor ingrese su contraseña';
                          }
                          return null;
                        },
                      ),
                    ),
                    Container(
                      margin: EdgeInsets.only(top: 50),
                      width: 200,
                      decoration: BoxDecoration(
                        color: Colors.blue,
                        borderRadius: BorderRadius.circular(10)
                      ),
                      child: TextButton(
                        child: Text(
                          "Iniciar sesión", style: TextStyle(color: Colors.white, fontSize: 20),
                        ),
                        onPressed: _login,
                      ),
                    ),
                    SizedBox(height: 20),
                    TextButton(
                      onPressed: () {
                      },
                      child: Text(
                        "¿Olvidaste tu contraseña?", style: TextStyle(color: Colors.blue),
                      ),
                    ),
                    SizedBox(height: 20),
                    TextButton(
                      onPressed: () {
                        Navigator.push(
                          context,
                          MaterialPageRoute(builder: (context)=> RegisterScreen())
                        );
                      },
                      child: Text(
                        "¿Deseas registrarte?", style: TextStyle(color: Colors.blue),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
