import React from "react";
import styled from "@emotion/styled";
import Cartel from "./Cartel";
import PropTypes from "prop-types";
import ImagenFinal from "./ImagenFinal";
import Postlogin from "./Postlogin";
import { comprobarGanador } from "./../comprobarGanador";
import Renew from "./../images/autorenew-24px.svg";
import Back from "./../images/arrow_back_ios-24px.svg";
import { useEffect } from "react";
const Contenedor = styled.div`
  margin-top: 0.5rem;
  margin-bottom: -50px;
  min-height: 100%;
  font-family: "Mulish", sans-serif;

  h3 {
    font-weight: 700;
    margin-bottom: 1.2rem;
  }
`;
const ListaInstrucciones = styled.ul`
  padding-left: 0;
  list-style: none;
`;
const ElementoLista = styled.li`
  color: #ffffff;
  padding: 5px 0;
  animation: fadein 5s;
  &::before {
    content: "• ";
    color: #ec6778;
  }
`;
const ContenedorInstrucciones = styled.div`
  text-align: center;
`;
const Instrucciones = ({
  seleccion1,
  seleccion2,
  setSeleccion1,
  setSeleccion2,
  imagenes,
  setImagenes,
  setOpciones,
  user,
  setEdad,
  setContador,
  opciones,
  contador,
  ganador,
  setGanador,
}) => {
  useEffect(() => {
    setGanador(comprobarGanador(imagenes, contador));
  }, [imagenes, setGanador, contador]);
  const handleClick = () => {
    const activo = document.querySelectorAll(".active");
    activo.forEach((item) => {
      item.classList.remove("active");
    });
    if (seleccion1 !== "" && seleccion2 !== "" && seleccion1 !== seleccion2) {
      const imagenesSwapeadas1 = imagenes.findIndex(
        (img) => img === seleccion1.substring(28)
      );
      const imagenesSwapeadas2 = imagenes.findIndex(
        (img) => img === seleccion2.substring(28)
      );
      const newArray = () => {
        //SE CREA ARRAY CAMBIADO
        let arrNuevo = [...imagenes];
        [arrNuevo[imagenesSwapeadas1], arrNuevo[imagenesSwapeadas2]] = [
          arrNuevo[imagenesSwapeadas2],
          arrNuevo[imagenesSwapeadas1],
        ];

        return arrNuevo;
      };
      setImagenes(newArray());

      setSeleccion1("");

      setSeleccion2("");
    }
    if (seleccion1 === seleccion2) {
      setSeleccion1("");
      setSeleccion2("");
    }
  };
  const volverAlMenu = () => {
    setOpciones("");
    setEdad({ anios: "" });
    setImagenes([]);
    setContador(0);
  };
  return (
    <Contenedor>
      <ContenedorInstrucciones>
        <Postlogin user={user} />
        <h3>Instrucciones para jugar</h3>
        {ganador ? <Cartel ganador={ganador} /> : null}
        <button onClick={handleClick} className="btn btn-primary mt-2">
          <img src={Renew} alt="Icono Intercambio" /> Intercambia Piezas
        </button>
        <button className="btn btn-danger mt-3 mb-3" onClick={volverAlMenu}>
          <img src={Back} alt="Icono vuelta" /> Volver al menu principal
        </button>
        <ImagenFinal contador={contador} opciones={opciones} />
      </ContenedorInstrucciones>

      <ListaInstrucciones>
        <ElementoLista>
          Haz click en la imagen de "Click" para responder una pregunta
        </ElementoLista>
        <ElementoLista>
          Respondiendo las preguntas se muestran las piezas del rompecabezas
        </ElementoLista>
        <ElementoLista>
          Luego de responder las preguntas, completa el rompecabezas!!
        </ElementoLista>
        <ElementoLista>
          Para intercambiar piezas, haz click en las dos imagenes a
          intercambiar, y luego clickea en "Intercambia Pieza"
        </ElementoLista>
        <ElementoLista>Premisa principal: Diviertete!!</ElementoLista>
      </ListaInstrucciones>
    </Contenedor>
  );
};

export default Instrucciones;
Instrucciones.propTypes = {
  setSeleccion1: PropTypes.func.isRequired,
  setSeleccion2: PropTypes.func.isRequired,
  setImagenes: PropTypes.func.isRequired,
  setOpciones: PropTypes.func.isRequired,
  imagenes: PropTypes.array.isRequired,
  seleccion1: PropTypes.string.isRequired,
  seleccion2: PropTypes.string.isRequired,
};
