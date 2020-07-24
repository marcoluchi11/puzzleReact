import React, { useState } from "react";
import "./bootstrap.min.css";
import styled from "@emotion/styled";
import Instrucciones from "./components/Instrucciones";
import Puzzle from "./components/Puzzle";
import Login from "./components/Login";
import Footer from "./components/Footer";
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
        // ROMPECABEZAS
        <div className="row">
          <div className="col-md-8">
            <Puzzle
              seleccion1={seleccion1}
              seleccion2={seleccion2}
              setSeleccion1={setSeleccion1}
              setSeleccion2={setSeleccion2}
              imagenes={imagenes}
              setImagenes={setImagenes}
              user={user}
              setUser={setUser}
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
        // MENU PRINCIPAL
        <div className="row">
          <div className="col-md-12 d-flex justify-content-center">
            <Titulo>Bienvenido al Rompecabezas</Titulo>
          </div>
          <div className="col-md-12 d-flex justify-content-center text-center">
            <Login user={user} setUser={setUser} />
          </div>
          <div className="col-md-12 d-flex justify-content-center text-center mt-1">
            <small>
              El login es solo para recopilar informacion, no se utilizaran
              otros datos.
            </small>
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
      <Footer />
    </ContenedorFondo>
  );
}

export default App;
// PARTES ROMPECABEZAS REALES
// SECCION PREGUNTAS MAS FACHERA
// cUANDO HACES CLICK EN LA DIFICULTAD QUE TE APAREZCA UNOS SEGUNDOS LA IMAGEN COMPLETA.
// MANDAR A OTRO DOCUMENTO DISTINTO, PARA QUE VEAN LAS RTAS // FORO DE RESPUESTAS

// LOGUEO O OPCION ANONIMO -- Listo
// EDAD NOMBRE MAIL -- Listo
// explicar motivo de registro -- Listo
