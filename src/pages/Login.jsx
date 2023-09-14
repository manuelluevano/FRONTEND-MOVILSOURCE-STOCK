
import FormularioLogin from "../components/FormularioLogin";
import useAuth from "../hooks/useAuth";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { tokenUser } = useAuth();
  return (
    <>
    
      {tokenUser.id? (
       <Navigate to='/'/>
      ) : (
        <div className="mt-20">
          <FormularioLogin />
        </div>
      )}
    </>
  );
};

export default Login;
