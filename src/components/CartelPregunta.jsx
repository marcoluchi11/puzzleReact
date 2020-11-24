import React from "react";
import styled from "@emotion/styled";

const DivCartel = styled.div`
  margin-top: 3rem;
  font-weight: 700;
  color: #000000;
`;
const CartelPregunta = ({ mensaje }) => {
  return (
    <DivCartel className="alert alert-info" role="alert">
      {mensaje}
    </DivCartel>
  );
};

export default CartelPregunta;
