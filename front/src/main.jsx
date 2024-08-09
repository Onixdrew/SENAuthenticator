import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Login from "./components/Login.jsx";
import InicioIntructor from "./pages/Instructor/inicioIntructor";
import RutasProtegidas from "./auth/authRoutes.jsx";
import AuthProvider from "./auth/authProvider.jsx";
import Register from "./components/Register.jsx";

const router = createBrowserRouter([
  // Ruta Principal
  { path: "/", element: <Login /> },
  { path: "/Register", element: <Register/> },

  // se llama al archivo rutasProtegidas donde se verifa que exista el
  // usuario para ceder el permiso a las rutas del children
  {
    path: "/",
    element: <RutasProtegidas />,

    children: [
      {
        path: "/inicioInstructor",
        element: <InicioIntructor></InicioIntructor>,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
