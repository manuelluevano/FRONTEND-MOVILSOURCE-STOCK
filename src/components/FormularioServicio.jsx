import {  useState } from "react";
import Select from "react-select";

//HELPERS
import { handleMessage, marcas, servicios } from "../helpers/index";
import useAuth from "../hooks/useAuth";

import Error from "./Error";
import { toast } from "sonner";

// eslint-disable-next-line react/prop-types
const FormularioServicio = ({ fecha }) => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [servicio, setServicio] = useState("");
  const [modelo, setModelo] = useState("");
  const [marca, setMarca] = useState("");
  const [imei, setImei] = useState("");
  const [sn, setSN] = useState("");
  const [precio, setPrecio] = useState("");
  const [abono, setAbono] = useState("");
  const [folio, setFolio] = useState("");
  const [observaciones, setObservaciones] = useState("");

  //CONTEXT
  const { mostrarAlerta, alerta, cargando, addNewService, setReload } =
    useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //VALIDATION
    if (
      !nombre ||
      !telefono ||
      !servicio ||
      !marca ||
      !modelo ||
      !precio ||
      !folio
    ) {
      mostrarAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });

      return;
    }

    //GET TOKEN
    const token = localStorage.getItem("token");

    //ADD SERVICE DB
    const response = await addNewService({
      nombre,
      telefono,
      servicio,
      modelo,
      marca,
      imei,
      sn,
      precio,
      abono,
      fecha,
      folio,
      observaciones,
      token,
    });

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

    //reiniciar el formulario
    setNombre("");
    setTelefono("");
    setServicio("");
    setModelo("");
    setMarca("");
    setImei("")
    setSN("")
    setPrecio("");
    setAbono("");
    setFolio("");
    setObservaciones("");

    //RECARGAR LA LISTA DE SERVICIOS
    setReload(true);
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
        <div className="md:w-1/2 lg:w-2/5 mb-10">
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-2xl rounded-lg py-10 px-5"
          >
            <legend className="font-black text-3xl text-center mb-10">
              Registro de Servicio
            </legend>
            {msg && <Error alerta={alerta} />}

            <div className="mb-5">
              <label
                htmlFor="nombre"
                className="block font-bold text-gray-700 uppercase"
              >
                Nombre Cliente
              </label>
              <input
                id="nombre"
                type="text"
                className={`${
                  msg && !nombre ? "border-red-400" : ""
                } border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md`}
                placeholder="Nombre del cliente"
                value={nombre.toUpperCase()}
                onChange={(e) => setNombre(e.target.value.toUpperCase())}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="telefono"
                className="block font-bold text-gray-700 uppercase"
              >
                Telefono Cliente
              </label>
              <input
                id="telefono"
                type="number"
                className={`${
                  msg && !telefono ? "border-red-400" : ""
                } border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md`}
                placeholder="Numero de telefono cliente"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="servicio"
                className="block font-bold text-gray-700 uppercase"
              >
                Servicio
              </label>
              <Select
                id="servicio"
                className={`${
                  msg && !servicio ? "border-red-400 border-2" : ""
                } w-full  mt-2 placeholder-gray-400 rounded-md`}
                options={servicios}
                onChange={(e) => setServicio(e.value)}
                defaultInputValue={""}
                placeholder="DISPLAY..."
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
                htmlFor="modelo"
                className="block font-bold text-gray-700 uppercase"
              >
                Modelo
              </label>
              <input
                id="modelo"
                type="text"
                className={`${
                  msg && !modelo ? "border-red-400" : ""
                } border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md`}
                placeholder="Modelo"
                value={modelo.toUpperCase()}
                onChange={(e) => setModelo(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="imei"
                className="block font-bold text-gray-700 uppercase"
              >
                IMEI
              </label>
              <input
                id="imei"
                type="text"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                placeholder="355565..."
                maxLength={16}
                value={imei.toUpperCase()}
                onChange={(e) => setImei(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="sn"
                className="block font-bold text-gray-700 uppercase"
              >
                SN
              </label>
              <input
                id="sn"
                type="text"
                className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"

                placeholder="FZAS"
                maxLength={16}
                value={sn.toUpperCase()}
                onChange={(e) => setSN(e.target.value)}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="precio"
                className="block font-bold text-gray-700 uppercase"
              >
                Precio Servicio
              </label>
              <input
                id="precio"
                type="number"
                className={`${
                  msg && !precio ? "border-red-400" : ""
                } border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md`}
                placeholder="$"
                value={precio}
                onChange={(e) => setPrecio(Number(e.target.value))}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="precio"
                className="block font-bold text-gray-700 uppercase"
              >
                Abono
              </label>
              <input
                id="precio"
                type="number"
                className={`${
                  msg && !abono ? "border-red-400" : ""
                } border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md`}
                placeholder="$"
                value={abono}
                onChange={(e) => setAbono(Number(e.target.value))}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="fecha"
                className="block font-bold text-gray-700 uppercase"
              >
                Fecha
              </label>
              <input
                disabled
                id="fecha"
                type="text"
                className="border-2 bg-gray-100 w-full p-2 mt-2 rounded-md"
                value={fecha}
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="folio"
                className="block font-bold text-gray-700 uppercase"
              >
                Folio
              </label>
              <input
                maxLength={4}
                id="folio"
                type="number"
                className={`${
                  msg && !folio ? "border-red-400" : ""
                } border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md`}
                placeholder="Numero de nota"
                value={folio}
                onChange={(e) => {
                  const limit = 4;
                  setFolio(e.target.value.slice(0, limit));
                }}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="observaciones"
                className="block font-bold text-gray-700 uppercase"
              >
                Observaciones
              </label>
              <textarea
                id="observaciones"
                className={`${
                  msg && !observaciones ? "border-red-400" : ""
                } border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md`}
                placeholder="Escribe las Observaciones del Equipo"
                value={observaciones.toUpperCase()}
                onChange={(e) => setObservaciones(e.target.value.toUpperCase())}
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

export default FormularioServicio;
