// eslint-disable-next-line react/prop-types
import { useState } from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

//HELPERS
import {
  handleMessage,
  marcas,
  refacciones,
  calidades,
} from "../helpers/index";

import useAuth from "../hooks/useAuth";

import Error from "../components/Error";
import { toast } from "sonner";
import { addRefaccion } from "../API/events";

const AddService = () => {
  const navigate = useNavigate();

  const [refaccion, setRefaccion] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [calidad, setCalidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  //CONTEXT
  const { mostrarAlerta, alerta, cargando, setReload } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //VALIDATION
    if (!refaccion || !modelo || !marca || !calidad || !precio || !stock) {
      mostrarAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });

      return;
    }

    //GET TOKEN
    const token = localStorage.getItem("token");

    //ADD SERVICE DB
    const response = await addRefaccion(
      refaccion,
      modelo,
      marca,
      calidad,
      precio,
      stock,
      token
    );

    if (response.status === "Error") {
      console.log(response);
      mostrarAlerta({
        msg: "Error " + response.mensaje,
        error: true,
      });

      return;
    }

    toast.promise(handleMessage, {
      style: {
        color: "white",
      },
      loading: "Loading...",
      success: () => {
        return `${response.mensaje}`;
      },
      error: "Error",
    });

    //REINICIAR EL FORMULARIO
    setRefaccion("");
    setModelo("");
    setMarca("");
    setCalidad("");
    setPrecio("");
    setStock("");

    //RECARGAR LA LISTA DE REFACCIONES
    setReload(true);

    //REGRESAR A LAS REFACCIONES
    navigate("/refacciones")
  };

  //EXTRAER ALERTA
  const { msg } = alerta;

  return (
    <>
     
      {cargando ? (
        <div className="md:w-1/2 lg:w-2/5">
          <div className="bg-white shadow-2xl rounded-lg py-10 px-5">
            <legend className="font-black text-3xl text-center mb-10">
              Guardando el servicio...
            </legend>

            {msg ? (
              <Error alerta={alerta} />
            ) : (
              <div className="text-center text-6xl">✅</div>
            )}
          </div>
        </div>
      ) : (
        <div className="md:w-1/2 mx-auto lg:w-2/5 mb-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-2xl rounded-lg py-10 px-5"
          >
            <legend className="font-black text-3xl text-center mb-10">
              Registro de Refaccion
            </legend>
            {msg && <Error alerta={alerta} />}
            <div className="mb-5">
              <label
                htmlFor="marca"
                className="block font-bold text-gray-700 uppercase"
              >
                Tipo de refaccion
              </label>

              <Select
                id="tipo"
                className={`${
                  msg && !refaccion ? "border-red-400 border-2" : ""
                } w-full  mt-2 placeholder-gray-400 rounded-md`}
                options={refacciones}
                onChange={(e) => setRefaccion(e.value)}
                placeholder="Flex..."
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="modelo"
                className="block font-bold text-gray-700 uppercase"
              >
                modelo
              </label>
              <input
                id="modelo"
                type="text"
                className={`${
                  msg && !modelo ? "border-red-400" : ""
                } border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md`}
                placeholder="12 PRO MAX "
                value={modelo.toUpperCase()}
                onChange={(e) => setModelo(e.target.value.toUpperCase())}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="marca"
                className="block font-bold text-gray-700 uppercase"
              >
                Marca
              </label>

              <Select
                id="marca"
                className={`${
                  msg && !marca ? "border-red-400 border-2" : ""
                } w-full  mt-2 placeholder-gray-400 rounded-md`}
                options={marcas}
                onChange={(e) => setMarca(e.value)}
                placeholder="Apple..."
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="calidad"
                className="block font-bold text-gray-700 uppercase"
              >
                Calidad
              </label>

              <Select
                id="calidad"
                className={`${
                  msg && !calidad ? "border-red-400 border-2" : ""
                } w-full  mt-2 placeholder-gray-400 rounded-md`}
                options={calidades}
                onChange={(e) => setCalidad(e.value)}
                placeholder="Original..."
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="precio"
                className="block font-bold text-gray-700 uppercase"
              >
                Precio
              </label>
              <input
                id="precio"
                type="text"
                className={`${
                  msg && !precio ? "border-red-400" : ""
                } border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md`}
                placeholder="Precio"
                value={precio.toUpperCase()}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="stock"
                className="block font-bold text-gray-700 uppercase"
              >
                Stock
              </label>
              <input
                id="stock"
                type="text"
                className={`${
                  msg && !stock ? "border-red-400" : ""
                } border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md`}
                placeholder="3"
                value={stock.toUpperCase()}
                onChange={(e) => setStock(e.target.value)}
              />
            </div>

            <input
              type="submit"
              className="bg-green-700 w-full text-white uppercase font-bold p-3 hover:bg-green-800 cursor-pointer transition-colors"
              value={"Agregar"}
            />
          </form>
        </div>
      )}
    </>
  );
};

export default AddService;
