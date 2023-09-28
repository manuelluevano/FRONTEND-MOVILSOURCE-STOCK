/* eslint-disable react/prop-types */

import { handleDate, handleMessage } from "../helpers";
import { createReports } from "../API/events";
import { Toaster, toast } from "sonner";

const Card = ({ item }) => {
  const { _id, imagen, refaccion, modelo, marca, calidad, precio, stock } =
    item;

  const handleCreateReport = async (id, stock) => {
    //REVISAR CANTIDAD DE ELEEMENTOS VENDIDOS
    if (stock > 0) {
      console.log(stock);
      //GENERAMOS REPORTE

      console.log("Select", id);

      //OBTENER FECHA
      const f = await handleDate();
      console.log(f);

      const response = await createReports(id, f);
      console.log(response);

      if (response) {
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

      //RECARGAR
      setTimeout(() => {
        window.location.reload(true);
      }, 4000);
    }
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: { background: "green", color: "white" },
          className: "my-toast",
          descriptionClassName: "my-toast-description",
        }}
      />
      <div
        className={`${
          stock == 0 ? "opacity-30" : ""
        } mt-10 mr-5  p-1 max-w-xs border border-gray-200 rounded-lg shadow  hover:bg-slate-100 cursor-pointer`}
      >
        <div className="hover:p-1">
          {stock == 0 && (
            <h1 className="text-center text-4xl text-red-700">Agotada</h1>
          )}
          <img
            className="text-center "
            src={`${imagen}`}
            alt="Imagen no disponible"
          />
        </div>
        <div className="px-5 pb-5 mt-5">
          <div href="#">
            <h5 className="text-xl font-semibold tracking-tight text-black ">
              {refaccion} {marca} {modelo}
            </h5>
          </div>
          <div className="flex justify-between mt-3">
            <p className="text-sm mt-1 mb-1 text-green-600">
              TIPO: <span className="text-black">{calidad}</span>{" "}
            </p>
            <p className="text-sm mt-1 mb-1 text-orange-600">
              STOCK: <span className="text-black">{stock}</span>{" "}
            </p>
          </div>
          <div className="flex items-center justify-between mt-3">
            <span className="text-3xl font-bold text-black ">${precio}</span>

            {stock == 0 ? (
              ""
            ) : (
              <button
                onClick={() => handleCreateReport(_id, stock)}
                href="#refacciones"
                className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 rounded-lg text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Vender
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
