import React from 'react';

const ModalAprendiz = ({ aprendiz, onClose }) => {
  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded">
        <h2 className="text-xl font-bold mb-2">{aprendiz.aprendiz}</h2>
        <p>Identificación: {aprendiz.identificacion}</p>
        <p>Llego: {aprendiz.llego ? 'Sí' : 'No'}</p>
        <p>Entrada: {aprendiz.entrada}</p>
        <button className="mt-4 p-2 bg-blue-500 text-white rounded" onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

export default ModalAprendiz;
