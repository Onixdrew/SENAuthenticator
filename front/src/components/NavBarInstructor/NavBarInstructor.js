'use client';

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/NavBarInstructor/NavBarInstructor';
import ApiComponent from '@/components/ApiComponent';

export default function Instructor() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    programa: '',
    fichas: '',
    documentos: '',
    tiempo: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      const apiData = await ApiComponent();
      setData(apiData);
      setFilteredData(apiData);
    };

    fetchData();
  }, []);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters({ ...filters, [name]: value });

    const filtered = data.filter(item => 
      item.programa.toLowerCase().includes(filters.programa.toLowerCase()) &&
      item.fichas.toLowerCase().includes(filters.fichas.toLowerCase()) &&
      item.numero_documento_usuario.toLowerCase().includes(filters.documentos.toLowerCase()) &&
      item.tiempo.toLowerCase().includes(filters.tiempo.toLowerCase())
    );
    setFilteredData(filtered);
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
              name="programa"
              value={filters.programa}
              onChange={handleFilterChange} 
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md w-40 h-12 flex items-center justify-center"
            />
            <input 
              type="text" 
              placeholder="Buscar Fichas" 
              name="fichas"
              value={filters.fichas}
              onChange={handleFilterChange} 
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md w-40 h-12 flex items-center justify-center"
            />
            <input 
              type="text" 
              placeholder="Buscar Documentos" 
              name="documentos"
              value={filters.documentos}
              onChange={handleFilterChange} 
              className="bg-white text-black py-2 px-4 rounded-lg shadow-md w-40 h-12 flex items-center justify-center"
            />
            <input 
              type="text" 
              placeholder="Buscar Tiempo" 
              name="tiempo"
              value={filters.tiempo}
              onChange={handleFilterChange} 
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
                {filteredData.map(item => (
                  <tr key={item.id} className="even:bg-gray-100">
                    <td className="border px-4 py-2">{item.id}</td>
                    <td className="border px-4 py-2">{item.aprendiz}</td>
                    <td className="border px-4 py-2">{item.numero_documento_usuario}</td>
                    <td className="border px-4 py-2">{item.llego ? 'Sí' : 'No'}</td>
                    <td className="border px-4 py-2">{item.hora}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
