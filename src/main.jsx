import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";
import "./index.css";

//CONTEXT
import { AuthProvider } from "./context/AuthProvider.jsx";

//LOADERS
import { loader as appLoader } from "./components/Headers";
import { loader as serviceLoader } from "./pages/Servicios";

//COMPONENTS
import ErrorElement from "./components/ErrorElement.jsx";
import Headers from "./components/Headers.jsx";

//PAGES
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Perfil from "./pages/Perfil";
import Servicios from "./pages/Servicios";
import Refacciones from "./pages/Refacciones";
import Accesorios from "./pages/Accesorios";
import UploadImage from "./pages/UploadImage";
import ReporteRefacciones from "./pages/ReporteRefacciones";


const router = createHashRouter([
  {
    path: "/",
    element: <Headers />,
    loader: appLoader,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <App />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/register",
        element: <Register />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/perfil",
        element: <Perfil />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/reporteRefacciones",
        element: <ReporteRefacciones />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/refacciones",
        element: <Refacciones />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/accesorios",
        element: <Accesorios />,
        errorElement: <ErrorElement />,
      },
      {
        path: "/servicios",
        element: <Servicios />,
        errorElement: <ErrorElement />,
        loader: serviceLoader
      },
      {
        path: "/add-refaccion/:id?",
        element: <UploadImage />,
        errorElement: <ErrorElement />,
        // loader: serviceLoader
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
