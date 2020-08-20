import React, { useState, Fragment } from "react";
import Error from "./Error";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  FormGroup,
  Label,
} from "reactstrap";
import { appendSpreadsheet } from "./../Google";
import shortid from "shortid";
import "./puzzle.css";
import logoclick from "./../images/click.jpg";
import imagen1 from "./../images/1.jpg";
import imagen2 from "./../images/2.jpg";
import imagen3 from "./../images/3.jpg";
import imagen4 from "./../images/4.jpg";
import imagen5 from "./../images/5.jpg";
import imagen6 from "./../images/6.jpg";
import imagen7 from "./../images/7.jpg";
import imagen8 from "./../images/8.jpg";
import negro from "./../images/negro.jpg";
//import PropTypes from "prop-types";

const Puzzle = ({
  seleccion1,
  setSeleccion1,
  setSeleccion2,
  imagenes,
  setImagenes,
  user,
  setUser,
  contador,
  setContador,
  edad,
  error,
  setError,
}) => {
  const { anios } = edad;
  //Estados
  const [clickovich, setClickovich] = useState(false);
  const [modal, setModal] = useState(false);
  const [rta, setRta] = useState({ respuesta: "" });

  const imgs = [
    imagen3,
    imagen7,
    imagen5,
    imagen2,
    imagen4,
    imagen6,
    imagen8,
    imagen1,
    imagen5,
  ];
  const questions = [
    "pregunta1",
    "pregunta2",
    "pregunta3",
    "pregunta4",
    "pregunta5",
    "pregunta6",
    "pregunta7",
    "pregunta8",
  ];
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
  const modalClick = () => {
    if (rta.respuesta.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    appendSpreadsheet(
      {
        Pregunta: questions[contador],
        Respuesta: rta.respuesta,
        Nombre: user.displayName,
        Mail: user.email,
        Edad: anios,
      },
      { Pregunta: questions[contador], Respuesta: rta.respuesta }
    );

    //se agregan las imagenes al hacer click
    setRta({ respuesta: "" });
    setContador(contador + 1);
    setImagenes([...imagenes, imgs[contador]]);
    setModal(false);
  };

  if (user === "" || user === false) {
    setUser({
      displayName: "Anonimo",
      email: "Anonimo",
    });
  }
  const handleChange = (e) => {
    setRta({
      ...rta,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => {
    setModal(true);
    //Valida cuando llega a 8 para.
    if (imagenes.length === 8) {
      setClickovich(true);
      return;
    }
    //MANDA DATOS A LA STYLESHEET COMENTADO POR AHORA
  };
  //Click para mover las piezas
  const handleClick2 = (e) => {
    //Actualiza el state al primer y segundo click
    if (seleccion1 === "") {
      setSeleccion1(e.target.src);
    }
    if (seleccion1 !== "") {
      setSeleccion2(e.target.src);
    }
    if (seleccion1 === e.target.src) {
      setSeleccion1("");
      setSeleccion2("");
    }
  };
  const toggleClass = (e) => {
    e.target.classList.toggle("active");
  };
  return (
    <div id="Contenedor">
      {imagenes.map((imagen) => (
        <img
          key={imagen}
          id="Imagen"
          onClick={(e) => {
            handleClick2(e);
            toggleClass(e);
          }}
          src={imagen}
          alt="pieza"
        />
      ))}
      {clickovich ? (
        <img
          id="Imagen"
          key={shortid.generate()}
          onClick={handleClick2}
          src={negro}
          alt="Imagen negra"
        />
      ) : (
        <Fragment>
          <img
            id="Imagen"
            onClick={handleClick}
            src={logoclick}
            alt="Boton click"
          />
          <Modal style={modalStyles} isOpen={modal}>
            <ModalHeader style={estilo}>
              <h6>Hiciste click! Ahora responde esta pregunta</h6>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <Label>{questions[contador]}</Label>
                <Input name="respuesta" onChange={handleChange} type="text" />
                {error ? (
                  <Error mensaje="Error, Ingresa una respuesta!" />
                ) : null}
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={modalClick}>
                Enviar respuesta
              </Button>
            </ModalFooter>
          </Modal>
        </Fragment>
      )}
    </div>
  );
};
export default Puzzle;
