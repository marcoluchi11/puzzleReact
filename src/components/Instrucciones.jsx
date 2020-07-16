import React from "react";
import styled from "@emotion/styled";
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
const Instrucciones = () => {
  return (
    <ContenedorInstrucciones>
      <h2>Instrucciones para jugar</h2>
      <ListaInstrucciones>
        <ElementoLista>
          Haz click en cualquier zona para responder una pregunta
        </ElementoLista>
        <ElementoLista>
          Respondiendo las preguntas se te aparecen las piezas del rompecabezas
        </ElementoLista>
        <ElementoLista>
          Luego de responder las preguntas, completa el rompecabezas!!
        </ElementoLista>
        <ElementoLista>Premisa principal: Diviertete!!</ElementoLista>
      </ListaInstrucciones>
    </ContenedorInstrucciones>
  );
};

export default Instrucciones;
