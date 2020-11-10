import React, { useState } from "react";
import Login from "./Login";
import styled from "@emotion/styled";
import Error from "./Error";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Nosotros from "./../images/info2.svg";
import logovich from "./../images/logoMuseo.jpeg";
const Us = styled.img`
  width: 30px;
  height: 30px;
  cursor: pointer;
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
`;
const Subtitulo = styled.h3`
  font-family: "Mulish", sans-serif;
  text-align: center;
  font-size: 3rem;
  font-weight: 300;
`;
const PantallaInicial = ({
  setOpciones,
  user,
  setUser,
  setEdad,
  edad,
  error,
  setError,
}) => {
  const [modal, setModal] = useState(false);
  const modalStyles = {
    fontFamily: "Mulish",
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  const estiloButon = {
    margin: "0 auto",
  };
  const modalColor = {
    background: "bfbfbf",
  };
  const modalClick = () => {
    setModal(false);
  };
  const handleChange = (e) => {
    setEdad({ ...edad, [e.target.name]: e.target.value });
  };
  const Validar = () => {
    if (edad.anios === "" || edad.anios > 70 || edad.anios < 5) {
      setError(true);
      return true;
    }
    setError(false);
    return false;
  };
  const handleClickFacil = () => {
    if (Validar()) {
      return;
    }
    setOpciones("facil");
  };
  const handleClickMedio = () => {
    if (Validar()) {
      return;
    }
    setOpciones("medio");
  };
  const handleClickDificil = () => {
    if (Validar()) {
      return;
    }
    setOpciones("dificil");
  };
  return (
    <div className="row">
      <div className="col-md-12 d-flex justify-content-center mb-2">
        <img src={logovich} className="bordeimagen" alt="Logo" />
      </div>

      <div className="col-md-12 d-flex justify-content-center align-items-center">
        <Titulo>Bienvenido al Puzzle</Titulo>
        <Us
          onClick={() => setModal(true)}
          className="ml-3"
          src={Nosotros}
          alt="Us"
        />
      </div>
      <Modal style={modalStyles} isOpen={modal}>
        <ModalHeader style={modalColor}>
          <h4>¡Bienvenidos al Puzzle!</h4>
        </ModalHeader>

        <ModalBody style={modalColor}>
          <p>
            Este juego surge a partir de la realización del Proyecto de
            Intervención en Residencia No Formal - 2020, en colaboración con el
            Museo de la Memoria de la Ciudad de Rosario.
            <br />
            <br /> Integrantes del Proyecto:
            <br /> Scalella, Fernando <br />
            Tejedor, Micaela <br /> Vaio, Sabrina <br /> Vera, Yamila.
          </p>
        </ModalBody>

        <ModalFooter style={modalColor}>
          <Button style={estiloButon} color="primary" onClick={modalClick}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
      <div className="col-md-12 d-flex justify-content-center text-center">
        <Login user={user} setUser={setUser} />
      </div>
      <div className="col-md-12 d-flex justify-content-center text-center mt-1">
        <small>
          El login es solo para obtener tu nombre y direccion de e-mail, no se
          utilizaran otros datos. <br /> Si no ingresas, no participaras en el
          Ranking del Puzzle.
        </small>
      </div>
      <div className="col-md-4"></div>
      <div className="col-md-4  text-center">
        <div className="input-group input-group-sm mb-3 pt-4">
          <div className="input-group-prepend">
            <span className="input-group-text" id="inputGroup-sizing-sm">
              Edad
            </span>
          </div>
          <input
            type="number"
            className="form-control"
            aria-label="Small"
            name="anios"
            onChange={handleChange}
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Ingrese su edad..."
          />
        </div>
        {error ? <Error mensaje="Error ! Ingresa una edad valida." /> : null}
        <div className="col-md-4"></div>
      </div>

      <div className="col-md-12 d-flex justify-content-center  mt-4">
        <Subtitulo>Seleccione la dificultad</Subtitulo>
      </div>
      <div className="col-md-12 d-flex justify-content-center text-center  ">
        <Boton className="btn btn-success" onClick={handleClickFacil}>
          Facil (8 piezas)
        </Boton>
        <Boton className="btn btn-warning" onClick={handleClickMedio}>
          Media (12 piezas)
        </Boton>
        <Boton className="btn btn-danger" onClick={handleClickDificil}>
          Dificil (15 piezas)
        </Boton>
      </div>
    </div>
  );
};

export default PantallaInicial;
