"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const NavBar = () => {
  const [isClick, setisClick] = useState(false);

  const ToggleNavBar = () => {
    setisClick(!isClick);
  };

  return (
    <nav className="bg-green-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-2xl">
          <Link href="/" className="hover:text-green-200 transition duration-300">Logo</Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-green-200 transition duration-300">Inicio</Link>
          <Link href="/reports" className="text-white hover:text-green-200 transition duration-300">Reportes</Link>
          <Link href="/fichas" className="text-white hover:text-green-200 transition duration-300">Fichas</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button
            className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-green-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={ToggleNavBar}
          >
            {isClick ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isClick && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-green-200 transition duration-300">Inicio</Link>
            <Link href="/reports" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-green-200 transition duration-300">Reportes</Link>
            <Link href="/fichas" className="text-white block px-3 py-2 rounded-md text-base font-medium hover:text-green-200 transition duration-300">Fichas</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
