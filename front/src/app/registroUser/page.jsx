import {registroUser} from '@/app/Actions/nuevoUser'


export default function RegisterUser() {
  

  return (
    <>
      <div
        className="min-h-screen bg-cover bg-center flex  justify-end"
        style={{
          backgroundImage: `url('https://www.elestudiante.com.co/wp-content/uploads/2020/02/sena-aprendizaje-1.jpg')`,
        }}
      >
        <div className="p-5 pr-44">
          <form
            action={registroUser}
            className="w-full grid grid-cols-2 gap-6 max-w-lg border border-black p-8 bg-green-500 rounded-xl sm:p-10 lg:max-w-md opacity-75"
          >
            <div className="mb-5">
              <label
                htmlFor="nombre"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Nombres:
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="apellidos"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Apellidos:
              </label>
              <input
                type="text"
                id="apellidos"
                name="apellidos"
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="genero"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                genero:
              </label>
              <input
                type="text"
                id="genero"
                name="genero"
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="correoSena"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Correo SENA:
              </label>
              <input
                type="text"
                id="correoSena"
                name="correoSena"
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="correo"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Correo:
              </label>
              <input
                type="text"
                id="correo"
                name="correo"
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="tipoDoc"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Tipo Documento:
              </label>
              <input
                type="text"
                id="tipoDoc"
                name="tipoDoc"
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="numDoc"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                N° Documento:
              </label>
              <input
                type="number"
                id="numDoc"
                name="numDoc"
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="contraseña"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Contraseña:
              </label>
              <input
                type="text"
                id="contraseña"
                name="contraseña"
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="rolUser"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Rol:
              </label>
              <input
                type="text"
                id="rolUser"
                name="rolUser"
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="numFicha"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Ficha:
              </label>
              <input
                type="number"
                id="numFicha"
                name="numFicha"
                className="w-full p-2.5 text-sm text-gray-900 bg-gray-50 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>

            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="termsAccepted"
                  type="checkbox"
                  name="termsAccepted"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                htmlFor="termsAccepted"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
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
            <button className="w-full px-5 py-2.5  text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Registrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
