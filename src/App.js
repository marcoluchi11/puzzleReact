import React from "react";
import "./bootstrap.min.css";
import styled from "@emotion/styled";
import Instrucciones from "./components/Instrucciones";
import Puzzle from "./components/Puzzle";
const ContenedorFondo = styled.div`
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  padding: 1rem;
  margin-top: 2rem;
`;

function App() {
  return (
    <ContenedorFondo className="container">
      <div className="row">
        <div className="col-8">
          <Puzzle />
        </div>
        <div className="col-4">
          <Instrucciones />
        </div>
      </div>
    </ContenedorFondo>
  );
}

export default App;
