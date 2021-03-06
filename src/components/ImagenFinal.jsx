import React, { useState, useEffect, Fragment } from "react";

import styled from "@emotion/styled";
import dificil from "./../images/imagenesFinales/dificil16.jpg";
import medio from "./../images/imagenesFinales/medio12.jpeg";
import facil from "./../images/imagenesFinales/facil8.jpeg";
const Imagen = styled.img`
  width: 350px;
  height: 350px;
`;
const ImagenFinal = ({ contador, opciones }) => {
  const [verImagen, setVerImagen] = useState(false);
  let cant;
  // eslint-disable-next-line
  switch (opciones) {
    case "facil":
      cant = 8;
      break;
    case "medio":
      cant = 12;
      break;
    case "dificil":
      cant = 16;
      break;
  }
  useEffect(() => {
    if (contador === cant) {
      setVerImagen(true);
      if (opciones === "dificil") {
        setTimeout(() => {
          setVerImagen(false);
        }, 13000);
      } else {
        setTimeout(() => {
          setVerImagen(false);
        }, 10000000000000);
      }
    }
  }, [contador, cant, opciones]);
  let imagenFinal;
  // eslint-disable-next-line
  switch (cant) {
    case 8:
      imagenFinal = facil;
      break;
    case 12:
      imagenFinal = medio;
      break;
    case 16:
      imagenFinal = dificil;
      break;
  }
  const imagen = verImagen ? (
    <Fragment>
      <div className="col-12">
        <h4 className="text-center">Imagen resuelta</h4>
      </div>

      <Imagen
        className="mt-3 mb-3 phones"
        src={imagenFinal}
        alt="imagen final"
      />
    </Fragment>
  ) : null;
  return imagen;
};

export default ImagenFinal;
