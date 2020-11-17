import React from "react";
import styled from "@emotion/styled";
import tick from "./../images/check_circle_outline-24px.svg";
import cruz from "./../images/clear-24px.svg";
const DivCartel = styled.div`
  margin-top: 0.2rem;
  font-weight: 700;
  color: #000000;
  border-radius: 15px;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const CorrectaIncorrecta = ({ mensaje, correcta }) => {
  return (
    <DivCartel
      className={correcta ? "alert alert-success w-100" : "alert alert-danger"}
      role="alert"
    >
      {correcta ? <img src={tick} alt="tick" /> : <img src={cruz} alt="cruz" />}
      <h6 className="pl-1">{mensaje}</h6>
    </DivCartel>
  );
};

export default CorrectaIncorrecta;
