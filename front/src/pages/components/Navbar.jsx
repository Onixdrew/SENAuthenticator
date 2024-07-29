import React, { useState, useEffect, useRef } from "react";
import Logo from "../../../public/img/Logo Reconocimiento Facial - Blanco.png";

const Navbar = () => {
  // Estado para controlar la visibilidad del menú móvil
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Función para alternar el estado del menú móvil
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Función para manejar clics fuera del menú móvil
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  // Configurar el event listener para clics fuera del menú móvil
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col">
        <nav className="flex items-center justify-between bg-green-500 p-4">
          <div className="flex items-center">
            <img src={Logo} alt="Logo" className="w-12 text-black" />
            <a className="text-xl ml-2">SENAuthenticator</a>
          </div>

          {/* Menu Items for larger screens */}
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-white">Inicio</a>
            <a href="#" className="text-white">Productos</a>
            <a href="#" className="text-white">Otros</a>
          </div>

          {/* Menu Button (Hamburger) for smaller screens */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>

          {/* Avatar (visible in all screens) */}
          <div className="hidden md:flex items-center mr-16">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-18 rounded-full">
                  <img
                    alt="Profile"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-green-500 p-4`}
        >
          <a href="#" className="block text-white py-2">Inicio</a>
          <a href="#" className="block text-white py-2">Productos</a>
          <a href="#" className="block text-white py-2">Otros</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;



// import React, { useState } from "react";
// import { Transition } from "@headlessui/react";
// import { Link } from "react-router-dom";

// import "./Static/Style/navbar.css"
// import Logo from "../../../public/img/Logo Reconocimiento Facial - Blanco.png";

// const Navbar = ({ op1, op2, op3, op4, op5, op6 }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="Nav">
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         <div className="flex justify-between">
//           <div className="flex items-center gap-6">
//             <img src={Logo} alt="" className="w-12" />
//             <h1 className="text-white font-bold text-xl"></h1>
//           </div>
//           <div className="md:hidden flex ">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               type="button"
//               className="text-white hover:text-gray-200 focus:outline-none focus:text-gray-200"
//             >
//               <svg
//                 className="h-8 w-8 fill-current"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   fillRule="evenodd"
//                   clipRule="evenodd"
//                   d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z"
//                 />
//               </svg>
//             </button>
//           </div>
//           <div className="hidden md:flex items-center space-x-4">
//             <Link
//               to="#"
//               className="text-white  hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
//             >
//               {op1}
//             </Link>
//             <Link
//               to="#"
//               className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
//             >
//               {op2}
//             </Link>
//             <Link
//               to="#"
//               className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
//             >
//               {op3}
//             </Link>
//             <Link
//               to="#"
//               className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
//             >
//               {op4}
//             </Link>
//             <Link
//               to="#"
//               className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
//             >
//               {op5}
//             </Link>
//             <Link
//               to="#"
//               className="text-white hover:text-gray-200 px-3 py-2 rounded-md text-base font-medium"
//             >
//               {op6}
//             </Link>
//           </div>
//         </div>
//       </div>

//       <Transition
//         show={isOpen}
//         enter="transition ease-out duration-100 transform"
//         enterFrom="opacity-0 scale-95"
//         enterTo="opacity-100 scale-100"
//         leave="transition ease-in duration-75 transform"
//         leaveFrom="opacity-100 scale-100"
//         leaveTo="opacity-0 scale-95"
//       >
//         {(ref) => (
//           <div ref={ref} className="md:hidden">
//             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//               <Link
//                 to="#"
//                 className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 {op1}
//               </Link>
//               <Link
//                 to="#"
//                 className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 {op2}
//               </Link>
//               <Link
//                 to="#"
//                 className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 {op3}
//               </Link>
//               <Link
//                 to="#"
//                 className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 {op4}
//               </Link>
//               <Link
//                 to="#"
//                 className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 {op5}
//               </Link>
//               <Link
//                 to="#"
//                 className="text-white hover:text-gray-200 block px-3 py-2 rounded-md text-base font-medium"
//               >
//                 {op6}
//               </Link>
//             </div>
//           </div>
//         )}
//       </Transition>
//     </div>
//   );
// };

// export default Navbar;
