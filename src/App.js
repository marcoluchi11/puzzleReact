import React, { useState } from "react";
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
  const [seleccion1, setSeleccion1] = useState("");
  const [seleccion2, setSeleccion2] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [active, setActive] = useState(true);
  return (
    <ContenedorFondo className="container">
      <div className="row">
        <div className="col-md-8">
          <Puzzle
            seleccion1={seleccion1}
            seleccion2={seleccion2}
            setSeleccion1={setSeleccion1}
            setSeleccion2={setSeleccion2}
            imagenes={imagenes}
            setImagenes={setImagenes}
            active={active}
            setActive={setActive}
          />
        </div>
        <div className="col-md-4 ml-0">
          <Instrucciones
            seleccion1={seleccion1}
            seleccion2={seleccion2}
            setSeleccion1={setSeleccion1}
            setSeleccion2={setSeleccion2}
            imagenes={imagenes}
            setImagenes={setImagenes}
            setActive={setActive}
          />
        </div>
      </div>
    </ContenedorFondo>
  );
}

export default App;
