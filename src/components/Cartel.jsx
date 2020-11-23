import React from "react";
import styled from "@emotion/styled";

import tick from "./../images/check_circle_outline-24px.svg";
const DivCartel = styled.div`
  margin-top: 3rem;
  font-weight: 700;
  color: #000000;
`;

const Cartel = ({ contadorRtas, contador, opciones }) => {
  let id;
  switch (opciones) {
    case "facil":
      id = 680153586;
      break;
    case "medio":
      id = 1670556542;
      break;
    case "dificil":
      id = 224129004;
      break;
    default:
      break;
  }
  const url = `https://docs.google.com/spreadsheets/d/1lcnrmA9kCN78yr4aVS2VU6c7-9Z7zZ5PxnsBMRrS1Uo/edit#gid=${id}`;
  return (
    <DivCartel className="alert alert-success transicionBackwards" role="alert">
      <img src={tick} alt="Correcto" />
      <p>¡Felicitaciones! ¡Completaste el Puzzle!</p>
      <p>
        Respuestas correctas:{" "}
        <span className="correctas">
          {contadorRtas}/{contador}
        </span>{" "}
      </p>
      <p>
        Puedes ver el Ranking completo y las respuestas de los demás{" "}
        <a href={url} rel="noopener noreferrer" target="_blank">
          aquí
        </a>
      </p>
    </DivCartel>
  );
};

export default Cartel;
