import useAuth from "../hooks/useAuth";
import { Link, Navigate } from "react-router-dom";

const FormularioLogin = () => {
  //CONTEXT
  const { tokenUser, setLocalSelect, localSelect } = useAuth();

  console.log("local", localSelect);
  return (
    <>
      {!tokenUser.id ? (
        <Navigate to="/login" />
      ) : (
        <>
          <h1 className="m-10 text-5xl text-center font-mono">
            Selecciona Local
          </h1>
          <div className="flex mt-20   justify-evenly items-center">
            <div className="w-96 bg-white border text-black border-gray-200 rounded-lg shadow ">
              <a href="#">
                <img
                  className="rounded-t-lg mx-auto"
                  src="https://lh5.googleusercontent.com/p/AF1QipP7MFLGUAb2NGrFZvnqM52T6s2o7uEhk8EF4sMS=w408-h306-k-no"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 ">
                    Movilsource, Calle Herrera y Cairo, De Santiago, San Pedro
                    Tlaquepaque, Jalisco
                  </h5>
                </a>

                <Link
                  onClick={() => {
                    setLocalSelect(0);
                  }}
                  className="inline-flex mt-5 items-center px-3 py-2 text-sm font-medium text-center text-white  bg-orange-800 rounded-lg hover:bg-orange-900 "
                  to="/servicios"
                >
                  Ir
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="w-96 bg-white border text-black  border-gray-200 rounded-lg shadow ">
              <a href="#">
                <img
                  className="rounded-t-lg mx-auto"
                  src="https://streetviewpixels-pa.googleapis.com/v1/thumbnail?panoid=gizcaVKDD1OmW4RfXe8u4Q&cb_client=search.gws-prod.gps&w=408&h=240&yaw=120.14368&pitch=0&thumbfov=100"
                  alt=""
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 ">
                    Comonfort 439, La Loma, 44410 Guadalajara, Jal.
                  </h5>
                </a>

                <Link
                  onClick={() => {
                    setLocalSelect(1);
                  }}
                  className="inline-flex mt-5 items-center px-3 py-2 text-sm font-medium text-center text-white  bg-orange-800 rounded-lg hover:bg-orange-900 "
                  to="/servicios"
                >
                  Ir
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FormularioLogin;
