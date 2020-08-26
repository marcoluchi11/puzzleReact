import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Cronometro = styled.h5`
  border: 3px black solid;
  padding: 3px;
  background-color: #dbdbdb;
  color: black;
`;
const Stopwatch = ({ contador, opciones, segundos, setSegundos, ganador }) => {
  const [estado, setEstado] = useState(false);
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
  if (!estado && contador === cant) {
    setEstado(true);
  }
  useEffect(() => {
    if (ganador) {
      return;
    } else {
      let interval = null;
      if (estado) {
        interval = setInterval(() => {
          setSegundos((segundos) => segundos + 1);
        }, 1000);
      } else if (!estado && segundos !== 0) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }

    // eslint-disable-next-line
  }, [contador, segundos]);
  return (
    <Cronometro>
      Cronometro: <br /> {segundos} segundos
    </Cronometro>
  );
};

export default Stopwatch;
