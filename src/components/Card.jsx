/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Card = ({ item }) => {
  const { _id, imagen, refaccion, modelo, marca, calidad, precio, stock } =
    item;

  return (
    <>
      <div className="mt-10 mr-5 p-1 max-w-xs border border-gray-200 rounded-lg shadow  hover:bg-slate-100 cursor-pointer">
        <div className="hover:p-1">
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

            <Link
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              to={`/add-refaccion/${_id}`}
            >
              Editar
            </Link>
            <button
              onClick={() => console.log("seleccionado", _id)}
              href="#refacciones"
              className="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none focus:ring-blue-300 rounded-lg text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Vender
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
