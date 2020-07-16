import React, { useState } from "react";
import styled from "@emotion/styled";
import logoclick from "./../images/click.jpg";
import imagen1 from "./../images/1.jpg";
import imagen2 from "./../images/2.jpg";
import imagen3 from "./../images/3.jpg";
import imagen4 from "./../images/4.jpg";
import imagen5 from "./../images/5.jpg";
import imagen6 from "./../images/6.jpg";
import imagen7 from "./../images/7.jpg";
import imagen8 from "./../images/8.jpg";
const Contenedor = styled.div`
  display: flex;
  justify-content: center;

  flex-wrap: wrap;
  margin-top: 1rem;
`;
const Imagen = styled.img`
  width: 200px;
  height: 200px;
  border: black solid 0.5px;
`;

const Puzzle = () => {
  const [clickardo, setClick] = useState(false);
  const [imagenes, setImagenes] = useState([]);
  const [contador, setContador] = useState(1);

  const handleClick = () => {
    setContador(contador + 1);
    setImagenes([...imagenes, `imagen${contador}`]);
  };
  return (
    <Contenedor>
      <Imagen onClick={handleClick} src={imagen7} alt="" />
      <Imagen onClick={handleClick} src={imagen6} alt="" />
      <Imagen onClick={handleClick} src={imagen1} alt="" />
      <Imagen onClick={handleClick} src={imagen4} alt="" />
      <Imagen onClick={handleClick} src={imagen8} alt="" />
      <Imagen onClick={handleClick} src={imagen2} alt="" />
      <Imagen onClick={handleClick} src={imagen3} alt="" />
      <Imagen onClick={handleClick} src={imagen5} alt="" />
      <Imagen onClick={handleClick} value="tuvieja" src={logoclick} alt="" />
    </Contenedor>
  );
};
export default Puzzle;
