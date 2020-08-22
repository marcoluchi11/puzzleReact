import React, { useState } from "react";
import "./bootstrap.min.css";
import styled from "@emotion/styled";
import Instrucciones from "./components/Instrucciones";
//import ImagenFinal from "./components/ImagenFinal";
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
  padding: 1rem;
  margin-top: 2rem;
  color: #ffffff;
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
  let eleccion;

  if (opciones === "facil") {
    eleccion = (
      <Facil
        seleccion1={seleccion1}
        seleccion2={seleccion2}
        setSeleccion1={setSeleccion1}
        setSeleccion2={setSeleccion2}
        imagenes={imagenes}
        setImagenes={setImagenes}
        user={user}
        setUser={setUser}
        contador={contador}
        setContador={setContador}
        edad={edad}
        error={error}
        setError={setError}
      />
    );
  }
  if (opciones === "medio") {
    eleccion = (
      <Moderado
        seleccion1={seleccion1}
        seleccion2={seleccion2}
        setSeleccion1={setSeleccion1}
        setSeleccion2={setSeleccion2}
        imagenes={imagenes}
        setImagenes={setImagenes}
        user={user}
        setUser={setUser}
        contador={contador}
        setContador={setContador}
        edad={edad}
        error={error}
        setError={setError}
      />
    );
  }
  if (opciones === "dificil") {
    eleccion = (
      <Dificil
        seleccion1={seleccion1}
        seleccion2={seleccion2}
        setSeleccion1={setSeleccion1}
        setSeleccion2={setSeleccion2}
        imagenes={imagenes}
        setImagenes={setImagenes}
        user={user}
        setUser={setUser}
        contador={contador}
        setContador={setContador}
        edad={edad}
        error={error}
        setError={setError}
      />
    );
  }
  return (
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
              setSeleccion1={setSeleccion1}
              setSeleccion2={setSeleccion2}
              imagenes={imagenes}
              setImagenes={setImagenes}
              setOpciones={setOpciones}
              setEdad={setEdad}
              setContador={setContador}
              opciones={opciones}
              contador={contador}
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
      <Footer />
    </ContenedorFondo>
  );
}

export default App;

// VER POR QUE A VECES NO ME MUESTRA CARTEL GANADOR
// VERIFICAR SWAP DE PIEZAS
// COMPROBAR GANADOR EN EL PUZZLE MISMO , O EN FUNCION EXTERNA
// MEJORAR COLORES, IR POR BLANCOS NEGROS Y GRISES
// AVERIGUAR SI UNA PREGUNTA POR PIEZA SIGUE SIENDO VALIDA EN EL DE 27 Y/O 18
