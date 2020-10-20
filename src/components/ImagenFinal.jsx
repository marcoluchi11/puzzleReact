import React, { useState, useEffect, Fragment } from "react";

import styled from "@emotion/styled";
import dificil from "./../images/imagenesFinales/dificil25.jpg";
import medio from "./../images/imagenesFinales/moderado16.jpg";
import facil from "./../images/imagenesFinales/facil12.jpg";
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
        }, 6000);
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
        <h4>Imagen resuelta</h4>
      </div>

      <Imagen className="mt-3 mb-3" src={imagenFinal} alt="imagen final" />
    </Fragment>
  ) : null;
  return imagen;
};

export default ImagenFinal;
