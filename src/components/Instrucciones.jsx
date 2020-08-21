import React, { useState } from "react";
import styled from "@emotion/styled";
import Cartel from "./Cartel";
import PropTypes from "prop-types";

import Postlogin from "./Postlogin";
const Contenedor = styled.div`
  margin-top: 1rem;
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
  color: #000040;
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
}) => {
  // eslint-disable-next-line
  const [cartel, setCartel] = useState("");
  // const imgGanadora = [
  //   imagen1,
  //   imagen3,
  //   imagen2,
  //   imagen4,
  //   imagen5,
  //   imagen6,
  //   imagen7,
  //   imagen8,
  // ];
  // const comprobarGanador = (imgGanadora) => {
  //   console.log(imgGanadora);
  //   console.log(JSON.stringify(imagenes) === JSON.stringify(imgGanadora));
  //   if (JSON.stringify(imagenes) === JSON.stringify(imgGanadora)) {
  //     setCartel("Felicitaciones!, Completaste el rompecabezas");
  //   } else {
  //     setCartel(null);
  //   }
  // };
  const handleClick = () => {
    const activo = document.querySelectorAll(".active");
    activo.forEach((item) => {
      item.classList.remove("active");
    });
    //POR FIN
    if (seleccion1 !== "" && seleccion2 !== "" && seleccion1 !== seleccion2) {
      const imagenesSwapeadas1 = imagenes.findIndex(
        (img) => img === seleccion1.substring(21)
      );
      const imagenesSwapeadas2 = imagenes.findIndex(
        (img) => img === seleccion2.substring(21)
      );

      const newArray = () => {
        //SE CREA ARRAY CAMBIADO
        let arrNuevo = [...imagenes];
        [arrNuevo[imagenesSwapeadas1], arrNuevo[imagenesSwapeadas2]] = [
          arrNuevo[imagenesSwapeadas2],
          arrNuevo[imagenesSwapeadas1],
        ];
        // const aux = arrNuevo[imagenesSwapeadas1];
        // arrNuevo[imagenesSwapeadas1] = arrNuevo[imagenesSwapeadas2];
        // arrNuevo[imagenesSwapeadas2] = aux;
        return arrNuevo;
      };
      setImagenes(newArray());

      setSeleccion1("");

      setSeleccion2("");
      // comprobarGanador(imgGanadora);
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
      <button onClick={handleClick} className="btn btn-primary">
        Intercambia Piezas
      </button>
      <button className="btn btn-danger mt-3" onClick={volverAlMenu}>
        Volver al menu principal
      </button>
      {cartel ? <Cartel cartel={cartel} /> : null}
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
