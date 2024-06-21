"use client";

import React, { useState } from 'react';

const Reports = () => {
  // Datos para la tabla
  const initialData = [
    { id: 1, nombre: 'Juan', apellido: 'Pérez', tipoDocumento: 'CC', numero: '12345678', llego: true, horaEntrada: '08:00 AM' },
    { id: 2, nombre: 'Ana', apellido: 'Gómez', tipoDocumento: 'CC', numero: '87654321', llego: false, horaEntrada: 'N/A' },
    // Agrega más datos aquí
  ];

  const [data, setData] = useState(initialData);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Página de Reportes</h1>

      {/* Sección de Reportes */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Reportes</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {['Fichas', 'Documentos', 'Tiempos', 'Graficas'].map((item) => (
            <div key={item} className="flex-1 max-w-xs bg-blue-500 text-white p-4 rounded-lg text-center hover:bg-blue-600 transition duration-300 shadow-md cursor-pointer">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* Tabla de Datos */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Datos de Asistencia</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-blue-500 text-white">
              <tr>
                <th className="py-3 px-4 border-b">ID</th>
                <th className="py-3 px-4 border-b">Nombre</th>
                <th className="py-3 px-4 border-b">Apellido</th>
                <th className="py-3 px-4 border-b">Tipo de Documento</th>
                <th className="py-3 px-4 border-b">Número</th>
                <th className="py-3 px-4 border-b">Llegó</th>
                <th className="py-3 px-4 border-b">Hora de Entrada</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="py-3 px-4 border-b text-center">{item.id}</td>
                  <td className="py-3 px-4 border-b text-center">{item.nombre}</td>
                  <td className="py-3 px-4 border-b text-center">{item.apellido}</td>
                  <td className="py-3 px-4 border-b text-center">{item.tipoDocumento}</td>
                  <td className="py-3 px-4 border-b text-center">{item.numero}</td>
                  <td className="py-3 px-4 border-b text-center">{item.llego ? 'Sí' : 'No'}</td>
                  <td className="py-3 px-4 border-b text-center">{item.horaEntrada}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Reports;
