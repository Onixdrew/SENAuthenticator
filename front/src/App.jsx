import './App.css'
import { BrowserRouter, useRoutes } from "react-router-dom";


// Navs



/// Paginas Principales

// import Home from './pages/Home';
// import Login from './pages/Login';
// import Register from './pages/Register';

/// Rol Vigilante


/// Rol Administrativo

/// Rol Instructor
import InicioIntructor from './pages/Instructor/inicioIntructor';
import Login from './pages/components/Login';



function App() {

  const AppRoutes = () => {
    let routes = useRoutes([
      
      // Rutas Principales

      { path: "/", element: <Login/> },
      // { path: "/", element: <Login/> },
      // { path: "/Register", element: <Register/> },

      // Rutas Vigilante

      // Rutas Administrativo

      // Rutas Instructor
      {path: "/inicioAprendiz", element: <InicioIntructor />},

    ]);
    return routes;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;