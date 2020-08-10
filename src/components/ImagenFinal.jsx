import React, { useState, useEffect } from "react";
import imagenFinal from "./../images/imagenfinal.png";
import styled from "@emotion/styled";

const Imagen = styled.img`
  width: 220px;
  height: 220px;
`;
const ImagenFinal = ({ contador }) => {
  const [verImagen, setVerImagen] = useState(false);
  useEffect(() => {
    if (contador === 8) {
      setVerImagen(true);
      setTimeout(() => {
        setVerImagen(false);
      }, 6500);
    }
  }, [contador]);

  const imagen = verImagen ? (
    <Imagen className="mt-3 mb-3" src={imagenFinal} alt="imagen final" />
  ) : null;
  return imagen;
};

export default ImagenFinal;
