/* eslint-disable react/prop-types */

const Card = ({ item }) => {
    const { _id, imagen, name, tipo, precio, stock, marca } =
      item;
    {
      return (
        <>
          <div className="mt-10 mr-5 w-full max-w-sm border border-gray-200 rounded-lg shadow  ">
            <a href="#">
              <img
                className="p-8 rounded-t-lg"
                src={imagen}
                alt="product image"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h5 className="text-xl font-semibold tracking-tight text-black ">
                  {tipo} {marca} {name}
                </h5>
              </a>
              <div>
                <p className="text-sm mt-1 mb-1 text-orange-600">
                  STOCK: {stock}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-black ">
                  ${precio}
                </span>
                <button
                disabled
                  href="#refacciones"
                  className="text-white bg-blue-200 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Editar
                </button>
                <button
                onClick={()=> console.log("seleccionado",_id)}
                  href="#refacciones"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Vender
                </button>
              </div>
            </div>
          </div>
        </>
      );
    }
  };
  
  export default Card;
  