// LOGIN & REGISTER
export async function loginApi(email, password) {
  console.log(email, password);
  try {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const url = `https://lovely-duck-spacesuit.cyclic.app/api/user/login`;

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error login", error);
  }
}
export async function registerApi(name, surname, email, password) {
  try {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify({
        name,
        surname,
        email,
        password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    const url = `https://lovely-duck-spacesuit.cyclic.app/api/user/register`;

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error login", error);
  }
}

// SERVICES
export async function addService(
  name,
  telefono,
  servicio,
  modelo,
  marca,
  imei,
  sn,
  precio,
  abono,
  fecha,
  folio,
  observaciones,
  token
) {
  console.log("token", token);

  let finalString = token.split('"').join("");

  console.log("token modificado", finalString);

  try {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify({
        name,
        telefono,
        servicio,
        marca,
        modelo,
        imei,
        sn,
        precio,
        abono,
        fecha,
        folio,
        observaciones,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `${finalString}`,
      },
    };

    const url = `https://lovely-duck-spacesuit.cyclic.app/api/service/servicio`;

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error login", error);
  }
}
export async function listServices(token) {
  let finalString = token.split('"').join("");

  try {
    var requestOptions = {
      method: "get",
      redirect: "follow",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `${finalString}`,
      },
    };

    const url = `https://lovely-duck-spacesuit.cyclic.app/api/service/servicios`;
    // const url = `http://localhost:3000/api/service/servicios`;
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error login", error);
  }
}
export async function serviceComplete(id) {
  //GET TOKEN
  const token = localStorage.getItem("token");
  let finalString = token.split('"').join("");
  try {
    var requestOptions = {
      method: "post",
      redirect: "follow",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `${finalString}`,
      },
    };

    const url = `https://lovely-duck-spacesuit.cyclic.app/api/service/servicio/status/${id}`;

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error login", error);
  }
}
export async function searchService(search) {
  //GET TOKEN
  const token = localStorage.getItem("token");
  let finalString = token.split('"').join("");
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `${finalString}`,
      },
    };

    const url = `https://lovely-duck-spacesuit.cyclic.app/api/service/servicios/${search}`;

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error login", error);
  }
}
export async function updateService(id, objterminado) {
  //DESTRUCTURING DEL  OBJETO

  const {
    nameNew,
    telefonoNew,
    marcaNew,
    modeloNew,
    servicioNew,
    precioNew,
    folioNew,
    abonoNew,
    observacionesNew,
  } = objterminado;
  console.log("DATOS OBTENIDOS", id, nameNew);

  const token = localStorage.getItem("token");
  let finalString = token.split('"').join("");

  // console.log("token modificado", finalString);

  try {
    var requestOptions = {
      method: "PUT",
      redirect: "follow",
      body: JSON.stringify({
        name: nameNew,
        telefono: telefonoNew,
        servicio: servicioNew,
        marca: marcaNew,
        modelo: modeloNew,
        precio: precioNew,
        abono: abonoNew,
        folio: folioNew,
        observaciones: observacionesNew,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `${finalString}`,
      },
    };

    const url = `https://lovely-duck-spacesuit.cyclic.app/api/service/servicio/${id}`;
    // const url = `http://localhost:3000/api/service/servicio/${id}`;
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error login", error);
  }
}

// REFACCIONES
export async function listRefacciones() {
  //GET TOKEN
  const token = localStorage.getItem("token");
  let finalString = token.split('"').join("");

  try {
    var requestOptions = {
      method: "get",
      redirect: "follow",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `${finalString}`,
      },
    };

    const url = `https://lovely-duck-spacesuit.cyclic.app/api/refaccion/refacciones`;
    // const url = `http://localhost:3000/api/refaccion/refacciones`;

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error al traer lista refacciones", error);
  }
}
export async function getRefaccionID(id) {
  try {
    var requestOptions = {
      method: "get",
      redirect: "follow",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    };

    // const url = `https://lovely-duck-spacesuit.cyclic.app/api/refaccion/refacciones`;
    const url = `http://localhost:3000/api/refaccion/refaccionDetail/${id}`;

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error al traer lista refacciones", error);
  }
}

export async function addNewRefaccion(
  refaccion,
  modelo,
  marca,
  calidad,
  precio,
  stock,
  imagen
) {
  //GET TOKEN
  // const token = localStorage.getItem("token");
  // let finalString = token.split('"').join("");

  try {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify({
        refaccion,
        modelo,
        marca,
        calidad,
        precio,
        stock,
        imagen,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // Authorization: `${finalString}`,
      },
    };

    const url = `https://lovely-duck-spacesuit.cyclic.app/api/refaccion/refaccion`;
    // const url = `http://localhost:3000/api/refaccion/refaccion`;

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error al crear refaccion", error);
  }
}
export async function editService(id, objterminado) {
  //DESTRUCTURING DEL  OBJETO

  const { refaccionNew, marcaNew, calidadNew, precioNew, stockNew } =
    objterminado;

  // const token = localStorage.getItem("token");
  // let finalString = token.split('"').join("");

  // console.log("token modificado", finalString);

  try {
    var requestOptions = {
      method: "PUT",
      redirect: "follow",
      body: JSON.stringify({
        refaccion: refaccionNew,
        marca: marcaNew,
        calidad: calidadNew,
        precio: precioNew,
        stock: stockNew,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // Authorization: `${finalString}`,
      },
    };

    const url = `https://lovely-duck-spacesuit.cyclic.app/api/service/servicio/${id}`;
    // const url = `http://localhost:3000/api/refaccion/refaccion/${id}`;
    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error login", error);
  }
}
export async function searchRefaccion(search) {
  //GET TOKEN
  // const token = localStorage.getItem("token");
  // let finalString = token.split('"').join("");
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        // Authorization: `${finalString}`,
      },
    };

    // const url = `http://localhost:3000/api/refaccion/refacciones/${search}`;
    const url = `https://lovely-duck-spacesuit.cyclic.app/api/refaccion/refacciones/${search}`;

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error search", error);
  }
}

// REPORTS
export async function listReports() {
  //GET TOKEN
  // const token = localStorage.getItem("token");
  // let finalString = token.split('"').join("");
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY1MGQzMTU1ZmEyMjg5ZDQzNjFmODIwYSIsIm5hbWUiOiJtYW51ZWwiLCJzdXJuYW1lIjoibHVldmFubyIsImVtYWlsIjoibWFudWVsQGdtYWlsLmNvbSIsInJvbGUiOiJyb2xlX3VzZXIiLCJpbWFnZW4iOiJkZWZhdWx0LnBuZyIsImlhdCI6MTY5NTcwNzk0OCwiZXhwIjoxNjk4Mjk5OTQ4fQ.DwY9J55Yw0Y_BW05bPExstYmV2pY72fXbVC6w0VkDgQ`,
      },
    };

    // const url = `http://localhost:3000/api/reporte/refacciones`;
    const url = `https://lovely-duck-spacesuit.cyclic.app/api/reporte/refacciones`;

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error search", error);
  }
}
export async function createReports(refaccion, fecha) {

  const token = localStorage.getItem("token");

  let finalString = token.split('"').join("");

  console.log("token modificado", finalString);

  try {
    var requestOptions = {
      method: "POST",
      redirect: "follow",
      body: JSON.stringify({
        refaccion,
        fecha,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `${finalString}`,
      },
    };

    // const url = `http://localhost:3000/api/reporte/refaccion`;
    const url = `https://lovely-duck-spacesuit.cyclic.app/api/reporte/refaccion`;

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error login", error);
  }
}
//PRECIO DOLAR
export async function precioDolar() {
  try {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    const url = "https://api.exchangerate.host/latest?base=USD&symbols=MXN";

    const response = await fetch(url, requestOptions);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log("error login", error);
  }
}
