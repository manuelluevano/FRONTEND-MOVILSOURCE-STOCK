/* eslint-disable react/prop-types */
import { MdModeEdit } from "react-icons/md";

const User = ({ tokenUser }) => {
  return (
    <>
      <div className="mx-auto w-1/2 text-center mt-10">
        <div className="bg-gray-600 text-white shadow-2xl rounded-lg py-10 px-5">
          <h2 className="mb-10 text-5xl">Mis Datos</h2>

          <div className="flex mb-4">
            <div className="w-1/3  h-12">
              <span className="uppercase">Nombre:</span>
              <input
                className="text-black border-2 p-2 mt-2 placeholder-gray-400 rounded-md bg-gray-100"
                type="text"
                value={tokenUser.name}
              />
              <MdModeEdit className="text-2xl" />
            </div>
            <div className="w-1/3  h-12">
              <span className=" uppercase">Apellido:</span>
              <input
                className="text-black border-2 p-2 mt-2 placeholder-gray-400 rounded-md bg-gray-100"
                type="text"
                value={tokenUser.surname}
              />
              <MdModeEdit className="text-2xl" />
            </div>
            <div className="w-1/3  h-12">
              <span className="  uppercase">Email:</span>
              <input
                className="text-black border-2 p-2 mt-2 placeholder-gray-400 rounded-md bg-gray-100"
                type="text"
                value={tokenUser.email}
              />
              <MdModeEdit className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
