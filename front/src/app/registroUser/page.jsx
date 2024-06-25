import React, { useState } from 'react';

const RegisterUser = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    programa: '',
    numeroFicha: '',
    jornada: '',
    termsAccepted: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData(prevState => ({
      ...prevState,
      [name]: newValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://rickandmortyapi.com/api/character", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
        cache: "no-store",
      });

      if (!res.ok) {
        throw new Error("Fallo la solicitud POST");
      }

      const data = await res.json();
      console.log("Respuesta del servidor:", data);
      // Aquí podrías manejar la respuesta como sea necesario después de enviar el formulario

    } catch (error) {
      console.error("Error al realizar la solicitud POST: ", error);
      // Puedes manejar el error de otra forma según tus necesidades
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url('https://www.elestudiante.com.co/wp-content/uploads/2020/02/sena-aprendizaje-1.jpg')`,
          backgroundSize: "cover",
        }}
      >
        <div className="p-16">
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto bg-green-500  rounded-xl p-10">
            <div className="mb-5">
              <label htmlFor="nombre" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nombres:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="apellidos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Apellidos:
              </label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                value={formData.apellidos}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="programa" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Programa:
              </label>
              <input
                type="text"
                id="programa"
                name="programa"
                value={formData.programa}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="numeroFicha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nº ficha:
              </label>
              <input
                type="number"
                id="numeroFicha"
                name="numeroFicha"
                value={formData.numeroFicha}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <label htmlFor="jornada" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Jornada:
              </label>
              <input
                type="text"
                id="jornada"
                name="jornada"
                value={formData.jornada}
                onChange={handleChange}
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
  
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="termsAccepted"
                  type="checkbox"
                  name="termsAccepted"
                  checked={formData.termsAccepted}
                  onChange={handleChange}
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="termsAccepted"
                className="ms-2 ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Estoy de acuerdo con los{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  términos y condiciones
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Registrar nueva cuenta
            </button>
          </form>
        </div>

      </div>
    </>
  );
};

export default RegisterUser;

