"use client";

import React, { useState } from "react";

const MyComponent = () => {
  const [imageSrc, setImageSrc] = useState(
    "https://previews.123rf.com/images/ikuvshinov/ikuvshinov1609/ikuvshinov160900089/64756589-la-educaci%C3%B3n-y-la-escuela-objetos-tecnol%C3%B3gicos-laboratorio-de-ciencia-conjunto-de-iconos-de-dise%C3%B1o.jpg"
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <button
        className="btn focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        onClick={() => document.getElementById("my_modal_4").showModal()}
      >
        Agregar nuevo
      </button>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-screen max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          <form className="bg-white w-full rounded px-8 pt-6 pb-8 mb-4">
            <div className="flex  lg:flex-row  justify-around">
              <div className="w-full lg:w-1/2">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="username"
                  >
                    Tipo
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Ejemplo: Laptop DELL 2024"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="Serial"
                  >
                    Serial:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Serial"
                    type="text"
                    placeholder="Ejemplo: IMEI"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="Color"
                  >
                    Color:
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="Color"
                    type="text"
                  />
                </div>
                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="descripción"
                  >
                    Mas descripción:
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="descripción"
                    type="text"
                  />
                </div>
              </div>

              <div className="w-full ml-11 mt-20 lg:w-1/2 flex flex-col items-center">
                <img
                  src={imageSrc}
                  alt="Imagen por defecto"
                  className="mb-4 w-32 h-32 object-cover"
                />
                <input
                  type="file"
                  onChange={handleImageChange}
                  className="w-full"
                />
              </div>
            </div>
          </form>

          <div className="flex justify-end gap-20">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Agregar
            </button>

            <div className="modal-action ">
              <form method="dialog" className="modal-backdrop">
                <button className="text-white bg-gray-600 hover:bg-gray-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Cancelar
                </button>
              </form>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default MyComponent;
