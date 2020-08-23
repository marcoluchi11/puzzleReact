import React, { useState, useEffect, Fragment } from "react";

import styled from "@emotion/styled";
import dificil from "./../images/imagenesFinales/dificil25.jpg";
import medio from "./../images/imagenesFinales/moderado16.jpg";
import facil from "./../images/imagenesFinales/facil12.jpg";
const Imagen = styled.img`
  width: 220px;
  height: 220px;
`;
const ImagenFinal = ({ contador, opciones }) => {
  const [verImagen, setVerImagen] = useState(false);
  let cant;
  // eslint-disable-next-line
  switch (opciones) {
    case "facil":
      cant = 12;
      break;
    case "medio":
      cant = 16;
      break;
    case "dificil":
      cant = 25;
      break;
  }
  useEffect(() => {
    if (contador === cant) {
      setVerImagen(true);
      setTimeout(() => {
        setVerImagen(false);
      }, 8000);
    }
  }, [contador, cant]);
  let imagenFinal;
  // eslint-disable-next-line
  switch (cant) {
    case 12:
      imagenFinal = facil;
      break;
    case 16:
      imagenFinal = medio;
      break;
    case 25:
      imagenFinal = dificil;
      break;
  }
  const imagen = verImagen ? (
    <Fragment>
      <div className="col-12">
        <h4>Imagen resuelta</h4>
      </div>

      <Imagen className="mt-3 mb-3" src={imagenFinal} alt="imagen final" />
    </Fragment>
  ) : null;
  return imagen;
};

export default ImagenFinal;
