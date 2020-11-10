import React, { useState, Fragment } from "react";
import "./bootstrap.min.css";

import styled from "@emotion/styled";
import Instrucciones from "./components/Instrucciones";
import PantallaInicial from "./components/PantallaInicial";
import Footer from "./components/Footer";
import Facil from "./components/Facil";
import Moderado from "./components/Moderado";
import Dificil from "./components/Dificil";
const ContenedorFondo = styled.div`
  -webkit-box-shadow: 4px 5px 10px 8px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 4px 5px 10px 8px rgba(0, 0, 0, 0.26);
  box-shadow: 4px 5px 10px 8px rgba(0, 0, 0, 0.26);
  background-color: #000000;
  background-image: linear-gradient(147deg, #000000 0%, #2c3e50 74%);
  padding-bottom: 4rem;
  margin-top: 2rem;
  color: #ffffff;
  min-height: calc(100vh - 40px);
`;
function App() {
  const [seleccion1, setSeleccion1] = useState("");
  const [seleccion2, setSeleccion2] = useState("");
  const [imagenes, setImagenes] = useState([]);
  const [opciones, setOpciones] = useState("");
  const [user, setUser] = useState("");
  const [contador, setContador] = useState(0);
  const [edad, setEdad] = useState({ anios: "" });
  const [error, setError] = useState(false);
  const [ganador, setGanador] = useState(false);
  const [segundos, setSegundos] = useState(0);
  const [contadorRtas, setContadorRtas] = useState(0);
  const modalStyles = {
    fontFamily: "Mulish",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const estilo = {
    background: "#8ec5fc",
  };
  let eleccion;
  if (opciones === "facil") {
    eleccion = (
      <Facil
        seleccion1={seleccion1}
        contador={contador}
        seleccion2={seleccion2}
        edad={edad}
        user={user}
        error={error}
        imagenes={imagenes}
        setImagenes={setImagenes}
        setUser={setUser}
        setGanador={setGanador}
        setContador={setContador}
        setSeleccion1={setSeleccion1}
        setSeleccion2={setSeleccion2}
        setError={setError}
        segundos={segundos}
        modalStyles={modalStyles}
        estilo={estilo}
        setContadorRtas={setContadorRtas}
        contadorRtas={contadorRtas}
      />
    );
  }
  if (opciones === "medio") {
    eleccion = (
      <Moderado
        seleccion1={seleccion1}
        contador={contador}
        seleccion2={seleccion2}
        edad={edad}
        user={user}
        error={error}
        imagenes={imagenes}
        setImagenes={setImagenes}
        setUser={setUser}
        setGanador={setGanador}
        setContador={setContador}
        setSeleccion1={setSeleccion1}
        setSeleccion2={setSeleccion2}
        setError={setError}
        segundos={segundos}
        modalStyles={modalStyles}
        estilo={estilo}
        setContadorRtas={setContadorRtas}
        contadorRtas={contadorRtas}
      />
    );
  }
  if (opciones === "dificil") {
    eleccion = (
      <Dificil
        seleccion1={seleccion1}
        contador={contador}
        seleccion2={seleccion2}
        edad={edad}
        user={user}
        error={error}
        imagenes={imagenes}
        setImagenes={setImagenes}
        setUser={setUser}
        setGanador={setGanador}
        setContador={setContador}
        setSeleccion1={setSeleccion1}
        setSeleccion2={setSeleccion2}
        setError={setError}
        modalStyles={modalStyles}
        estilo={estilo}
        setContadorRtas={setContadorRtas}
        contadorRtas={contadorRtas}
      />
    );
  }
  return (
    <Fragment>
      <ContenedorFondo className="container">
        {opciones ? (
          // ROMPECABEZAS
          <div className="row">
            <div className="col-md-8">{eleccion}</div>
            <div className="col-md-4 ml-0">
              <Instrucciones
                user={user}
                seleccion1={seleccion1}
                seleccion2={seleccion2}
                imagenes={imagenes}
                opciones={opciones}
                contador={contador}
                ganador={ganador}
                setSeleccion1={setSeleccion1}
                setSeleccion2={setSeleccion2}
                setImagenes={setImagenes}
                setOpciones={setOpciones}
                setEdad={setEdad}
                setContador={setContador}
                setGanador={setGanador}
                segundos={segundos}
                setSegundos={setSegundos}
                contadorRtas={contadorRtas}
              />
            </div>
          </div>
        ) : (
          // MENU PRINCIPAL
          <PantallaInicial
            setOpciones={setOpciones}
            user={user}
            setUser={setUser}
            setEdad={setEdad}
            edad={edad}
            error={error}
            setError={setError}
          />
        )}
      </ContenedorFondo>
      <Footer />
    </Fragment>
  );
}

export default App;
