import React, { useState } from "react";
import "./bootstrap.min.css";
import styled from "@emotion/styled";
import Instrucciones from "./components/Instrucciones";
//import Puzzle from "./components/Puzzle";
import ImagenFinal from "./components/ImagenFinal";
import PantallaInicial from "./components/PantallaInicial";
import Footer from "./components/Footer";
import Facil from "./components/Facil";
import Moderado from "./components/Moderado";
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
  const [opciones, setOpciones] = useState("");
  const [user, setUser] = useState("");
  const [contador, setContador] = useState(0);
  const [edad, setEdad] = useState({ anios: "" });
  const [error, setError] = useState(false);
  return (
    <ContenedorFondo className="container">
      {opciones ? (
        // ROMPECABEZAS
        <div className="row">
          <div className="col-md-8">
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
              setEdad={setEdad}
            />
            <ImagenFinal contador={contador} />
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

// cUANDO HACES CLICK EN LA DIFICULTAD QUE TE APAREZCA UNOS SEGUNDOS LA IMAGEN COMPLETA.
// VER POR QUE A VECES NO ME MUESTRA CARTEL GANADOR
// VER COMO HACER PARA ALTERNAR ENTRE COMPONENTES DE DIFICULTAD
// ELIMINAR PIKACHU DE LA VISTA PREVIA
// AVERIGUAR SI UNA PREGUNTA POR PIEZA SIGUE SIENDO VALIDA EN EL DE 27 Y/O 18

// SECCION PREGUNTAS MAS FACHERA -- Listo
// LOGUEO O OPCION ANONIMO -- Listo
// EDAD NOMBRE MAIL -- Listo
//AGREGAR INPUT PARA SABER LA EDAD -- Listo
// explicar motivo de registro -- Listo
// MANDAR A OTRO DOCUMENTO DISTINTO, PARA QUE VEAN LAS RTAS // FORO DE RESPUESTAS -- Listo
// PARTES ROMPECABEZAS REALES -- NO
