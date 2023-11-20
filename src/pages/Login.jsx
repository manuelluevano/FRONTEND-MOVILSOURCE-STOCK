import { Navigate } from "react-router-dom";
import FormularioLogin from "../components/FormularioLogin";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { tokenUser, localSelect } = useAuth();
  console.log(localSelect);
  return (
    <>
      {!tokenUser.id ? (
        <div className="mt-20">
          <FormularioLogin />
        </div>
      ) : (
        <>
          <Navigate to="/local" />
        </>
      )}
    </>
  );
};

export default Login;
