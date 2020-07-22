import React, { useState } from "react";
import "./bootstrap.min.css";
import styled from "@emotion/styled";
import Instrucciones from "./components/Instrucciones";
import Puzzle from "./components/Puzzle";
import Login from "./components/Login";
const ContenedorFondo = styled.div`
  background-color: #8ec5fc;
  background-image: linear-gradient(62deg, #8ec5fc 0%, #e0c3fc 100%);
  padding: 1rem;
  margin-top: 2rem;
`;
const Boton = styled.button`
  font-family: "Mulish", sans-serif;
  margin-right: 2rem;
  margin-top: 1rem;
  text-align: center;
  flex-direction: row;
  font-weight: 300;
`;
const Titulo = styled.h1`
  font-family: "Mulish", sans-serif;
  text-align: center;
  font-size: 42px;
`;
const Subtitulo = styled.h3`
  font-family: "Mulish", sans-serif;
  text-align: center;
  font-size: 22px;
  font-weight: 300px;
`;
function App() {
  const [seleccion1, setSeleccion1] = useState("");
  const [seleccion2, setSeleccion2] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [opciones, setOpciones] = useState("");
  const [user, setUser] = useState("");
  return (
    <ContenedorFondo className="container">
      {opciones ? (
        <div className="row">
          <div className="col-md-8">
            <Puzzle
              seleccion1={seleccion1}
              seleccion2={seleccion2}
              setSeleccion1={setSeleccion1}
              setSeleccion2={setSeleccion2}
              imagenes={imagenes}
              setImagenes={setImagenes}
            />
          </div>
          <div className="col-md-4 ml-0">
            <Instrucciones
              user={user}
              seleccion1={seleccion1}
              seleccion2={seleccion2}
              setSeleccion1={setSeleccion1}
              setSeleccion2={setSeleccion2}
              imagenes={imagenes}
              setImagenes={setImagenes}
              setOpciones={setOpciones}
            />
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <Titulo>Bienvenido al Rompecabezas</Titulo>
          </div>
          <div className="col-md-12 d-flex justify-content-center text-center">
            <Login user={user} setUser={setUser} />
          </div>
          <div className="col-md-12 d-flex justify-content-center  mt-4">
            <Subtitulo>Seleccione la dificultad</Subtitulo>
          </div>
          <div className="col-md-12 d-flex justify-content-center text-center  ">
            <Boton
              className="btn btn-success"
              onClick={() => setOpciones("something")}
            >
              Facil
            </Boton>
            <Boton
              className="btn btn-warning"
              onClick={() => setOpciones("something")}
            >
              Media
            </Boton>
            <Boton
              className="btn btn-danger"
              onClick={() => setOpciones("something")}
            >
              Dificil
            </Boton>
          </div>
        </div>
      )}
    </ContenedorFondo>
  );
}

export default App;
// PARTES ROMPECABEZAS REALES
// SECCION PREGUNTAS MAS FACHERA
// LOGUEO O OPCION ANONIMO
// cUANDO HACES CLICK EN LA DIFICULTAD QUE TE APAREZCA UNOS SEGUNDOS LA IMAGEN COMPLETA.

// explicar motivo de registro
// EDAD NOMBRE MAIL
// MANDAR A OTRO DOCUMENTO DISTINTO, PARA QUE VEAN LAS RTAS // FORO DE RESPUESTAS
