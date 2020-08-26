import React from "react";
import styled from "@emotion/styled";

import tick from "./../images/check_circle_outline-24px.svg";
const DivCartel = styled.div`
  margin-top: 3rem;
  font-weight: 700;
`;
const Cartel = () => {
  const url =
    "https://docs.google.com/spreadsheets/d/1lcnrmA9kCN78yr4aVS2VU6c7-9Z7zZ5PxnsBMRrS1Uo/edit?usp=sharing";
  return (
    <DivCartel className="alert alert-success" role="alert">
      <img src={tick} alt="Correcto" />
      <p>Felicitaciones, completaste el rompecabezas!</p>
      <p>
        Puedes ver las respuestas de los demas{" "}
        <a href={url} rel="noopener noreferrer" target="_blank">
          aqui
        </a>
      </p>
    </DivCartel>
  );
};

export default Cartel;
