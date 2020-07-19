import React, { useState } from "react";
import styled from "@emotion/styled";
import imagen1 from "./../images/1.jpg";
import imagen2 from "./../images/2.jpg";
import imagen3 from "./../images/3.jpg";
import imagen4 from "./../images/4.jpg";
import imagen5 from "./../images/5.jpg";
import imagen6 from "./../images/6.jpg";
import imagen7 from "./../images/7.jpg";
import imagen8 from "./../images/8.jpg";
const ContenedorInstrucciones = styled.div`
  margin-top: 1rem;
  font-family: "Mulish", sans-serif;
  h2 {
    font-weight: 700;
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
const DivCartel = styled.div`
  margin-top: 3rem;
  font-weight: 700;
`;
const Instrucciones = ({
  seleccion1,
  seleccion2,
  setSeleccion1,
  setSeleccion2,
  imagenes,
  setImagenes,
  setActive,
}) => {
  const [cartel, setCartel] = useState("");
  const imgGanadora = [
    imagen1,
    imagen3,
    imagen2,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
    imagen8,
  ];

  const handleClick = () => {
    const activo = document.querySelectorAll(".active");
    console.log(activo);
    activo.forEach((item) => {
      item.classList.remove("active");
    });
    //POR FIN
    let imgActual;
    if (seleccion1 !== "" && seleccion2 !== "" && seleccion1 !== seleccion2) {
      const imagenesSwapeadas1 = imagenes.findIndex(
        (img) => img === seleccion1.substring(21)
      );
      const imagenesSwapeadas2 = imagenes.findIndex(
        (img) => img === seleccion2.substring(21) //mejorar lo de substring para que lo tome en el deploy
      );
      const newArray = () => {
        //SE CREA ARRAY CAMBIADO
        const arrNuevo = [...imagenes];
        let aux = arrNuevo[imagenesSwapeadas1];
        arrNuevo[imagenesSwapeadas1] = arrNuevo[imagenesSwapeadas2];
        arrNuevo[imagenesSwapeadas2] = aux;
        return arrNuevo;
      };
      setImagenes(newArray());

      imgActual = [...imagenes];

      setSeleccion1("");

      setSeleccion2("");

      setActive(false);
      console.log(imgActual);
      console.log(imgGanadora);
      console.log(JSON.stringify(imgActual) === JSON.stringify(imgGanadora));
      if (JSON.stringify(imgActual) === JSON.stringify(imgGanadora)) {
        setCartel("Felicitaciones!, Completaste el rompecabezas");
      }
    }
    if (seleccion1 === seleccion2) {
      setSeleccion1("");
      setSeleccion2("");
      setActive(false);
    }
  };
  return (
    <ContenedorInstrucciones>
      <h2>Instrucciones para jugar</h2>
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
      {cartel ? (
        <DivCartel className="alert alert-success" role="alert">
          {cartel}
        </DivCartel>
      ) : null}
    </ContenedorInstrucciones>
  );
};

export default Instrucciones;
