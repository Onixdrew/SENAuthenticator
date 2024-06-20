import React from 'react';
import NavBar from './NavBar'; // Ajusta el path si es necesario

const FichasInstructor = () => {
  const fichas = [
    { nombre: "Analisis y Desarrollo de Software", numero: "268359", jornada: "Mañana", ambiente: "ADSO 3", centro: "CTPI" },
    { nombre: "Analisis y Desarrollo de Software", numero: "268359", jornada: "Tarde", ambiente: "ADSO 3", centro: "CTPI" },
    { nombre: "Analisis y Desarrollo de Software", numero: "268359", jornada: "Noche", ambiente: "ADSO 3", centro: "CTPI" },
    { nombre: "Analisis y Desarrollo de Software", numero: "268359", jornada: "Noche", ambiente: "ADSO 3", centro: "CTPI" },
    { nombre: "Analisis y Desarrollo de Software", numero: "268359", jornada: "Noche", ambiente: "ADSO 3", centro: "CTPI" },
    { nombre: "Analisis y Desarrollo de Software", numero: "268359", jornada: "Noche", ambiente: "ADSO 3", centro: "CTPI" },
    { nombre: "Analisis y Desarrollo de Software", numero: "268359", jornada: "Noche", ambiente: "ADSO 3", centro: "CTPI" },
    { nombre: "Analisis y Desarrollo de Software", numero: "268359", jornada: "Noche", ambiente: "ADSO 3", centro: "CTPI" },
    { nombre: "Analisis y Desarrollo de Software", numero: "268359", jornada: "Noche", ambiente: "ADSO 3", centro: "CTPI" },
    { nombre: "Analisis y Desarrollo de Software", numero: "268359", jornada: "Noche", ambiente: "ADSO 3", centro: "CTPI" },
    { nombre: "Analisis y Desarrollo de Software", numero: "268359", jornada: "Noche", ambiente: "ADSO 3", centro: "CTPI" },

    // Agrega más fichas según sea necesario
  ];

  return (
    <div>
      {/* <NavBar op1="Inicio" op2="Reportes" op3="Ficha" /> */}
      <div className="p-4">
        <div className="bg-gray-100 shadow-md p-4 mb-4 rounded">
          <h1 className="text-3xl font-bold text-center text-blue-600">Fichas</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                <th className="py-2 px-4 border-b">Nombre de ficha</th>
                <th className="py-2 px-4 border-b">Número de ficha</th>
                <th className="py-2 px-4 border-b">Jornada</th>
                <th className="py-2 px-4 border-b">Ambiente</th>
                <th className="py-2 px-4 border-b">Centro</th>
              </tr>
            </thead>
            <tbody>
              {fichas.map((ficha, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b text-center">{ficha.nombre}</td>
                  <td className="py-2 px-4 border-b text-center">{ficha.numero}</td>
                  <td className="py-2 px-4 border-b text-center">{ficha.jornada}</td>
                  <td className="py-2 px-4 border-b text-center">{ficha.ambiente}</td>
                  <td className="py-2 px-4 border-b text-center">{ficha.centro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FichasInstructor;
