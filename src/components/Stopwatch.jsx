import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const Cronometro = styled.h5`
  border: 3px black solid;
  padding: 1rem;
  background-color: #dbdbdb;
  border-radius: 15px;
  color: black;
`;
const Stopwatch = ({ contador, opciones, segundos, setSegundos, ganador }) => {
  const [estado, setEstado] = useState(false);
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
      Cronómetro: <br /> {segundos} segundos
    </Cronometro>
  );
};

export default Stopwatch;
