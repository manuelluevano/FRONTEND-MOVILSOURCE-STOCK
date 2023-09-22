
import { Navigate } from "react-router-dom";

import useAuth from "./hooks/useAuth";
import { Toaster } from "sonner";
import logo from "./assets/banner.webp";

// import { useLoaderData } from "react-router-dom";

// export async function loader(){

//   // MULTIPLES CONSULTAS SIMULTANEAS

// const [precio1, precio2] = await Promise.all([
//   precioDolar(),
//   precioDolar()
// ])

// const data = {
//   precio1, precio2
// }

//   return data
// }

function App() {
  const { tokenUser } = useAuth();

  // const datos = useLoaderData();

  return (
    <>
      <Toaster
        toastOptions={{
          style: { background: "green", color: "white" },
          className: "my-toast",
          descriptionClassName: "my-toast-description",
        }}
      />
      {tokenUser.id ? (
        <div>
          <>
          <img className="mt-0" src={logo} />

          </>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default App;
