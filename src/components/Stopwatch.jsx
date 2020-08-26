import React, { useEffect, useState } from "react";

const Stopwatch = ({ contador, opciones, segundos, setSegundos }) => {
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
    let interval = null;
    if (estado) {
      interval = setInterval(() => {
        setSegundos((segundos) => segundos + 1);
      }, 1000);
    } else if (!estado && segundos !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [contador, segundos]);
  return <h5>Cronometro: {segundos} segundos</h5>;
};

export default Stopwatch;
