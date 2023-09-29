/* eslint-disable react/prop-types */
import { toast } from "sonner";
import useAuth from "../hooks/useAuth";
import { handleMessage, marcas, servicios } from "../helpers";
import { useState } from "react";
import { updateService } from "../API/events";
import Select from "react-select";

const Servicio = ({ item }) => {
  const {
    servicio,
    name,
    modelo,
    marca,
    imei,
    sn,
    telefono,
    precio,
    abono,
    fecha,
    folio,
    status,
    observaciones,
    user,
  } = item;

  const { terminarServicio, setReload, reload, tokenUser, mostrarAlerta } =
    useAuth();

  const [edit, setEdit] = useState(false);
  const [nameNew, setName] = useState("");
  const [telefonoNew, setTelefono] = useState("");
  const [servicioNew, setServicio] = useState("");
  const [modeloNew, setModelo] = useState("");
  const [marcaNew, setMarca] = useState("");
  const [imeiNew, setImei] = useState("");
  const [snNew, setSN] = useState("");
  const [precioNew, setPrecio] = useState("");
  const [abonoNew, setAbono] = useState("");
  const [folioNew, setFolio] = useState("");
  const [observacionesNew, setObservaciones] = useState("");
  {
    const handleTerminar = async (item) => {
      const { _id } = item;
      console.log("term", _id);
      const confirm = window.confirm("Se termino correctamente?");

      if (confirm) {
        //   //CHANGE SERVICE STATUS
        const response = await terminarServicio(_id);

        console.log("Respuesta del status", response);

        toast.promise(handleMessage, {
          style: {
            color: "white",
          },
          loading: "Loading...",
          success: () => {
            return `${response.message}`;
          },
          error: "Error",
        });

        if (response.status === "Error") {
          toast.promise(handleMessage, {
            style: {
              color: "white",
            },
            loading: "Loading...",
            success: () => {
              return `${response.message}`;
            },
            error: "Error",
          });

          return;
        }

        //RECARGAR LA LISTA DE SERVICIOS
        setReload(true);
      }
    };

    const handleEdit = async () => {
      setEdit(true);
      setName(name);
      setTelefono(telefono);
      setMarca(marca);
      setModelo(modelo);
      setImei(imeiNew);
      setSN(snNew);
      setServicio(servicio);
      setPrecio(precio);
      setFolio(folio);
      setObservaciones(observaciones);
      setAbono(abono);
    };

    const handleUpdate = async (item) => {
      const { _id } = item;
      console.log("Update", _id);
      const confirm = window.confirm("Actualizar");

      if (confirm) {
        const objterminado = {
          nameNew,
          telefonoNew,
          marcaNew,
          modeloNew,
          servicioNew,
          imeiNew,
          snNew,
          precioNew,
          folioNew,
          observacionesNew,
          abonoNew,
        };

        console.log("Objeto Terminado", objterminado);

        //ENVIAR LA ACTUALIZACION
        const response = await updateService(_id, objterminado);

        console.log("Respuiesta", response);
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
      }

      //REGRESAR A EDIT FALSE
      setEdit(false);
      //RECARGAR LA LISTA DE SERVICIOS
      setReload(true);
    };

    const handleCancelar = async (id) => {
      console.log(id);
    };

    return (
      <>
        {item && (
          <div
            className={`${
              reload ? "bg-gray-100" : ""
            } m-3 shadow-md px-5 py-10 rounded-xl`}
          >
            <div className="font-bold mb-3 text-gray-700 uppercase">
              Nombre Cliente: {""}
              <span className="font-normal normal-case">
                {edit ? (
                  <input
                    type="text"
                    value={nameNew.toUpperCase()}
                    onChange={(e) => setName(e.target.value.toUpperCase())}
                  />
                ) : (
                  name
                )}
              </span>
            </div>
            <div className="font-bold mb-3 text-gray-700 uppercase">
              Telefono: {""}
              <span className="font-normal normal-case">
                {edit ? (
                  <input
                    type="text"
                    value={telefonoNew.toUpperCase()}
                    onChange={(e) => setTelefono(e.target.value.toUpperCase())}
                  />
                ) : (
                  telefono
                )}
              </span>
            </div>
            <div className="font-bold mb-3 text-gray-700 uppercase">
              Marca: {""}
              <span className="font-normal normal-case">
                {edit ? (
                  <Select
                    id="marca"
                    className={`
               w-full  mt-2 placeholder-gray-400 rounded-md`}
                    options={marcas}
                    onChange={(e) => setMarca(e.value)}
                    placeholder="Apple..."
                  />
                ) : (
                  marca
                )}
              </span>
            </div>
            <div className="font-bold mb-3 text-gray-700 uppercase">
              Modelo: {""}
              <span className="font-normal normal-case">
                {edit ? (
                  <input
                    type="text"
                    value={modeloNew.toUpperCase()}
                    onChange={(e) => setModelo(e.target.value.toUpperCase())}
                  />
                ) : (
                  modelo
                )}
              </span>
            </div>

            {imei ? (
              <div className="font-bold mb-3 text-gray-700 uppercase">
                IMEI: {""}
                <span className="font-normal normal-case">
                  {edit ? (
                    <input
                      type="text"
                      value={imeiNew.toUpperCase()}
                      onChange={(e) => setImei(e.target.value.toUpperCase())}
                    />
                  ) : (
                    imei
                  )}
                </span>
              </div>
            ) : (
              ""
            )}

            {sn ? (
              <div className="font-bold mb-3 text-gray-700 uppercase">
                SN: {""}
                <span className="font-normal normal-case">
                  {edit ? (
                    <input
                      type="text"
                      value={snNew.toUpperCase()}
                      onChange={(e) => setSN(e.target.value.toUpperCase())}
                    />
                  ) : (
                    sn
                  )}
                </span>
              </div>
            ) : (
              ""
            )}

            <div className="font-bold mb-3 text-gray-700 uppercase">
              Servicio: {""}
              <span className="font-normal normal-case">
                {edit ? (
                  <Select
                    id="servicio"
                    className={`
               w-full  mt-2 placeholder-gray-400 rounded-md`}
                    options={servicios}
                    onChange={(e) => setServicio(e.value)}
                  />
                ) : (
                  servicio
                )}
              </span>
            </div>

            <div className="font-bold mb-3 text-gray-700 uppercase">
              Precio: ${""}
              <span className="font-normal normal-case">
                {edit ? (
                  <input
                    type="text"
                    value={precioNew.toUpperCase()}
                    onChange={(e) => setPrecio(e.target.value.toUpperCase())}
                  />
                ) : (
                  precio
                )}
              </span>
            </div>
            {abono == 0 ? (
              ""
            ) : (
              <div className="font-bold mb-3 text-gray-700 uppercase">
                Abono:{abono === precio ? " " : " $"}
                <span className="font-normal normal-case">
                  {edit ? (
                    <input
                      type="text"
                      value={abonoNew.toUpperCase()}
                      onChange={(e) => setAbono(e.target.value.toUpperCase())}
                    />
                  ) : (
                    abono
                  )}
                </span>
              </div>
            )}

            <div className="font-bold mb-3 text-gray-700 uppercase">
              Folio: {""}
              <span className="font-normal normal-case">
                {edit ? (
                  <input
                    type="text"
                    value={folioNew.toUpperCase()}
                    onChange={(e) => setFolio(e.target.value.toUpperCase())}
                  />
                ) : (
                  folio
                )}
              </span>
            </div>
            <div className="font-bold mb-3 text-gray-700 uppercase">
              Observaciones: {""}
              <span className="font-normal normal-case">
                {edit ? (
                  <input
                    type="text"
                    value={observacionesNew.toUpperCase()}
                    onChange={(e) =>
                      setObservaciones(e.target.value.toUpperCase())
                    }
                  />
                ) : (
                  observaciones
                )}
              </span>
            </div>
            <div className="font-bold mb-3 text-gray-700 uppercase">
              Fecha: {""}
              <span className="font-normal normal-case">{fecha}</span>
            </div>
            <div className="font-bold mb-3 text-gray-700 uppercase">
              Tecnico / Vendedor: {""}
              <span
                className={`${
                  tokenUser.email === user.email ? "text-green-700" : ""
                } normal-case`}
              >
                {user.email}{" "}
              </span>
            </div>
            <div className="flex  ">
              <div className="font-bold  text-gray-700 uppercase">Estado: </div>
              <div className="font-bold  text-gray-700 uppercase">
                {status ? (
                  <h1 className="text-green-700  normal-case ml-2 ">
                    Entregado correctamente
                  </h1>
                ) : (
                  <h1 className="text-red-700  normal-case ml-2 ">
                    Pendiente por entregar
                  </h1>
                )}
              </div>
            </div>

            <div className="flex justify-between mt-5">
              {edit ? (
                <button
                  type="button"
                  // disabled
                  className="py-2 px-10 border-2 border-green-600 hover:bg-green-600 hover:text-white font-bold uppercase rounded-lg"
                  onClick={() => handleUpdate(item)}
                >
                  Guardar
                </button>
              ) : (
                <button
                  type="button"
                  // disabled
                  className="py-2 px-10 border-2 border-green-600 text-black hover:bg-green-600  hover:text-white font-bold uppercase rounded-lg"
                  onClick={() => handleEdit()}
                >
                  Editar
                </button>
              )}

              {!item.status && (
                <button
                  className="py-2 px-10 border-2 border-red-600 text-black hover:bg-red-600  hover:text-white font-bold uppercase rounded-lg"
                  onClick={() => handleCancelar(item)}
                >
                  Cancelar Servicio
                </button>
              )}

              {edit ? (
                ""
              ) : (
                <button
                  disabled={item.status}
                  type="button"
                  className={
                    item.status
                      ? ""
                      : "py-2 px-10 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase rounded-lg"
                  }
                  onClick={() => handleTerminar(item)}
                >
                  {item.status ? <div className="text-4xl ">✔️</div> : "LISTO"}
                </button>
              )}
            </div>
          </div>
        )}
      </>
    );
  }
};

export default Servicio;
