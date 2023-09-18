/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import ListCard from "../components/ListCard";
import { listRefacciones } from "../API/events";
import { Link } from "react-router-dom";
import { Toaster } from "sonner";

const Refacciones = () => {
  //OBTENER LAS REFACCIONES DE LA DB
  const [refacciones, setRefacciones] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await listRefacciones();
      console.log("Respuesta refacciones", response);
      setRefacciones(response.refacciones);
    })();
  }, []);

 

  return (
    <>
      <Toaster
        toastOptions={{
          style: { background: "green", color: "white" },
          className: "my-toast",
          descriptionClassName: "my-toast-description",
        }}
      />
      <div className="flex justify-end pr-10">
        <Link
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          to="/add-refaccion"
        >
          Nueva
        </Link>
      </div>
      <h2 className="font-black mt-10 mb-5 text-4xl text-center">
        Lista de Refacciones
      </h2>
      <div className=" flex-wrap flex justify-center md:flex mx-8">
        <ListCard refacciones={refacciones} />
      </div>

     
    </>
  );
};

export default Refacciones;
