import React from "react";
import Navbar from "@/components/Navbar/navbar";

export default function page() {
  return (
    <div>
      <header>
      <Navbar op1="Home" op2="Registro" op3="Historial" Link1="/guardia/guardiaInicio" Link2="/guardia/guardiaRegistro" Link3="guardia/guardiaHistorial" />
      </header>
      <main>
        
      </main>
    </div>
  );
}
