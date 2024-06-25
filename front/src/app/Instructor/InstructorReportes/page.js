'use client';

import React from 'react';
import Navbar from '@/components/NavBarInstructor/NavBarInstructor';

export default function Instructor() {
  const handleFichasChange = (event) => {
    console.log('Fichas:', event.target.value);
  };

  const handleDocumentosChange = (event) => {
    console.log('Documentos:', event.target.value);
  };

  const handleTiempoChange = (event) => {
    console.log('Tiempo:', event.target.value);
  };

  const handleProgramaChange = (event) => {
    console.log('Programa:', event.target.value);
  };

  const handleGraficasClick = () => {
    console.log('Gráficas clicked');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="fixed top-0 left-0 w-full z-10">
        <Navbar op1="home" op2="reportes" op3="fichas" />
      </header>

      <div className="pt-16 px-4">
        <div className="bg-white shadow-lg rounded-lg p-6 mt-8">
          <section className="text-center mb-8">
            <h2 className="text-2xl font-bold p-4 shadow-lg bg-white rounded-lg">Reportes</h2>
          </section>

          <div className="flex flex-wrap justify-center space-x-4 space-y-4 mb-8">
            <input 
              type="text" 
              placeholder="Buscar Programa" 
              onChange={handleProgramaChange} 
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md w-40 h-12 flex items-center justify-center"
            />
            <input 
              type="text" 
              placeholder="Buscar Fichas" 
              onChange={handleFichasChange} 
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md w-40 h-12 flex items-center justify-center"
            />
            <input 
              type="text" 
              placeholder="Buscar Documentos" 
              onChange={handleDocumentosChange} 
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md w-40 h-12 flex items-center justify-center"
            />
            <input 
              type="text" 
              placeholder="Buscar Tiempo" 
              onChange={handleTiempoChange} 
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md w-40 h-12 flex items-center justify-center"
            />
            
            <button 
              onClick={handleGraficasClick} 
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md w-40 h-12 flex items-center justify-center"
            >
              Gráficas
            </button>
          </div>

          <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-200">
                <tr>
                  <th className="w-1/6 py-2 border-b">Id</th>
                  <th className="w-1/6 py-2 border-b">Aprendiz</th>
                  <th className="w-1/6 py-2 border-b">Identificación</th>
                  <th className="w-1/6 py-2 border-b">Llego</th>
                  <th className="w-1/6 py-2 border-b">Hora</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-100">
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">Juan Pérez</td>
                  <td className="border px-4 py-2">12345678</td>
                  <td className="border px-4 py-2">No</td>
                  <td className="border px-4 py-2">--------------</td>
                </tr>
                <tr className="even:bg-gray-100">
                  <td className="border px-4 py-2">2</td>
                  <td className="border px-4 py-2">Ana García</td>
                  <td className="border px-4 py-2">87654321</td>
                  <td className="border px-4 py-2">Sí</td>
                  <td className="border px-4 py-2">08:30 AM</td>
                </tr>
                {/* Añadir más filas según sea necesario */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}