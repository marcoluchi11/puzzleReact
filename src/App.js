import React from "react";
import "./bootstrap.min.css";
import styled from "@emotion/styled";

const Prueba = styled.h1`
  font-family: "Mulish", sans-serif;
  font-weight: 300;
`;
function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">1</div>
        <div className="col-4">
          instrucciones para el rompecabezad Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Voluptate, error.
        </div>
      </div>
    </div>
  );
}

export default App;
