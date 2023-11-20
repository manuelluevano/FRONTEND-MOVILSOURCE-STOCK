import jwt_decode from "jwt-decode";

import { useState, createContext, useEffect } from "react";

//API
import {
  addService,
  loginApi,
  registerApi,
  serviceComplete,
} from "../API/events";

const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {
  const [alerta, setAlerta] = useState([]);
  const [tokenUser, setTokenUser] = useState({});
  const [localSelect, setLocalSelect] = useState();
  const [setUserRegister] = useState({});

  const [cargando, setCargando] = useState(false);
  //RECAREGAR LISTA DE SERVICIOS
  const [reload, setReload] = useState(false);

  //REVISAR SI HAY LOCALSTORAGE
  useEffect(() => {
    const sesion = localStorage.getItem("token");
    if (sesion) {
      const userDecode = jwt_decode(sesion);
      setTokenUser(userDecode);
    }
  }, [setTokenUser]);

  const mostrarAlerta = (alerta) => {
    setAlerta(alerta);
    setTimeout(() => {
      setAlerta({});
    }, 5000);
  };

  const loginUser = async (userLogin) => {
    setCargando(true);
    try {
      console.log("Datos Login", userLogin);
      const response = await loginApi(userLogin.email, userLogin.password);

      if (response.status === "error") {
        setCargando(false);
        return response;
      }

      const userDecode = jwt_decode(response.token);
      console.log("Response Decode", userDecode);
      setTokenUser(userDecode);
      setLocalSelect(userLogin.local)
      setCargando(false);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const registerUser = async (userRegister) => {
    setCargando(true);
    try {
      console.log("Datos Register", userRegister);
      const response = await registerApi(
        userRegister.name,
        userRegister.surname,
        userRegister.email,
        userRegister.password
      );

      if (response) {
        setCargando(false);
        console.log("Response", response);
        setUserRegister(response);
      }

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  //SERVICES
  const addNewService = async (service) => {
    setCargando(true);

    try {
      console.log("Datos Services", service);
      const response = await addService(
        service.nombre,
        service.telefono,
        service.servicio,
        service.modelo,
        service.marca,
        service.imei,
        service.sn,
        service.precio,
        service.abono,
        service.fecha,
        service.folio,
        service.observaciones,
        service.token
      );

      if (response) {
        setTimeout(() => {
          setCargando(false);
        }, 4000);
        console.log("Response", response);
      }

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const terminarServicio = async (id) => {
    try {
      const response = await serviceComplete(id);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  //REFACCIONES

  return (
    <AuthContext.Provider
      value={{
        cargando,
        setCargando,
        mostrarAlerta,
        alerta,
        tokenUser,
        localSelect,
        setLocalSelect,
        loginUser,
        registerUser,
        setTokenUser,
        addNewService,
        terminarServicio,
        setReload,
        reload,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

export default AuthContext;
