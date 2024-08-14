import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const InicioIntructor = () => {
  return (
    <>
      <div className="bg-white min-h-screen ">
        <div className="mt-0">
          <Navbar
            item1="inicio"
            item2="Reportes"
            item3=""
            ruta1=""
            ruta2=""
            ruta3=""
            color="activo"
          />
        </div>

        <form action="" className="flex gap-10 justify-center mt-20">
          <input
            type="text"
            value=""
            className=" border rounded-lg pl-4 bg-white text-black"
            placeholder="# Ficha"
          />
          <input
            type="text"
            value=""
            className=" border rounded-lg pl-4 bg-white text-black"
            placeholder="# Documento"
          />

          <select
            name=""
            id=""
            className="bg-white p-3 border rounded-lg"
          >
            <option value="">Tiempo</option>
            <option value="">Mañana</option>
            <option value="">Tarde</option>
            <option value="">Noche</option>
          </select>

          <button className="btn bg-white">Graficas</button>
        </form>

        <div className="relative container mx-auto">
          <table className="mt-28 mx-auto table-auto w-full max-w-6xl">
            <thead className="bg-gray-800 text-gray-300">
              <tr>
                <th className="px-4 py-2 w-1/6 text-left">Puesto</th>
                <th className="px-4 py-2 w-1/6 text-left">Nombre</th>
                <th className="px-4 py-2 w-1/6 text-left">
                  Número Identificación
                </th>
                <th className="px-4 py-2 w-1/6 text-left">Ingreso</th>
                <th className="px-4 py-2 w-1/6 text-left">Hora de Ingreso</th>
                <th className="px-4 py-2 w-1/6 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="bg-gray-200">
              <tr className="bg-white border-b border-gray-200">
                <td className="px-4 py-2 flex items-center">
                  1
                </td>
                <td className="px-4 py-2 text-left font-semibold">
                  Dean Lynch
                </td>
                <td className="px-4 py-2 text-center">
                 120323550
                </td>
                <td className="px-4 py-2 text-center">05/06/2020</td>
                <td className="px-4 py-2 text-center">10:00 am</td>
                <td className="px-4 py-2 text-center text-green-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="#2c3e50"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M5 12l5 5l10 -10" />
                  </svg>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      {/* <Footer/> */}
    </>
  );
};

export default InicioIntructor;
