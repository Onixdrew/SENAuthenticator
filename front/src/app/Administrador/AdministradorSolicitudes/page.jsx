import React from 'react';
import Navbar from '@/components/Navbar/navbar';


export default function Page() {
  return (
    <div>
      <header>
        <Navbar op1="home" op2='reportes' op3='solicitudes' />
      </header>
      <h1>Hola SOLI</h1>

    </div>
  );
}

