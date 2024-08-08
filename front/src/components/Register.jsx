import React, { useState } from "react";

const Register = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setPasswordError("La contraseña no coincide");
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className=" min-h-screen flex items-center justify-center py-12"
    style={{
        backgroundImage: "url('https://cloudfront-us-east-1.images.arcpublishing.com/semana/NRFYARCDZRFGJNJTN7X7LE4GCU.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      
      }}>
      <div className="container  mx-auto">
        <div className="bg-white  bg-opacity-90 border border-black shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 font-serif text-center">Crea tu cuenta.</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-blue-800" htmlFor="first-name">
                  Nombres:
                </label>
                <input
                  className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="first-name"
                  type="text"
                  required
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-blue-800" htmlFor="last-name">
                  Apellidos:
                </label>
                <input
                  className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="last-name"
                  type="text"
                  required
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-blue-800" htmlFor="id-type">
                  Tipo de identificación
                </label>
                <select
                  className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="id-type"
                  required
                >
                  <option value="">Seleccionar...</option>
                  <option value="targeta de identidad">Targeta de Identidad</option>
                  <option value="cedula">Cédula</option>
                </select>
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-blue-800" htmlFor="id-number">
                  Número de identificación 
                </label>
                <input
                  className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="id-number"
                  type="number"
                  required
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-blue-800" htmlFor="gender">
                  Género
                </label>
                <select
                  className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="gender"
                  required
                >
                  <option value="">Seleccionar...</option>
                  <option value="male">Masculino</option>
                  <option value="female">Femenino</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-blue-800" htmlFor="email">
                  Correo
                </label>
                <input
                  className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-blue-800" htmlFor="password">
                  Contraseña
                </label>
                <input
                  className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-blue-800" htmlFor="confirm-password">
                  Confirmar Contraseña
                </label>
                <input
                  className="mt-1 block w-full bg-gray-50 border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  required
                />
                {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                className="bg-indigo-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                type="submit"
              >
                Crear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
