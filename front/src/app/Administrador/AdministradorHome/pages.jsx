// En pages/index.js
import React from 'react';
// import CarnetAprendiz from '../../../components/Carnet/Carnet';
import NavbarAdministrativo from '../../../components/NavBar/navbarAdministrativo';

const HomeC = () => {
  return (
    <>
      <div className='mx-auto '>
        <NavbarAdministrativo
          op1="home"
          op2='reportes'
          op3='solicitudes'
        />
        <CarnetAprendiz />
      </div>
    </>
  );
}

export default HomeC;
