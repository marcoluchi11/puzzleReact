import React, { useEffect, useState, Fragment } from "react";
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
import pregunta from "./../images/pregunta.png";
import { shuffle } from "./../shuffle";
import uno from "./../images/dificil/image_part_001.jpg";
import dos from "./../images/dificil/image_part_002.jpg";
import tres from "./../images/dificil/image_part_003.jpg";
import cuatro from "./../images/dificil/image_part_004.jpg";
import cinco from "./../images/dificil/image_part_005.jpg";
import seis from "./../images/dificil/image_part_006.jpg";
import siete from "./../images/dificil/image_part_007.jpg";
import ocho from "./../images/dificil/image_part_008.jpg";
import nueve from "./../images/dificil/image_part_009.jpg";
import diez from "./../images/dificil/image_part_010.jpg";
import once from "./../images/dificil/image_part_011.jpg";
import doce from "./../images/dificil/image_part_012.jpg";
import trece from "./../images/dificil/image_part_013.jpg";
import catorce from "./../images/dificil/image_part_014.jpg";
import quince from "./../images/dificil/image_part_015.jpg";
import dieciseis from "./../images/dificil/image_part_016.jpg";
import diecisiete from "./../images/dificil/image_part_016.jpg";
import dieciocho from "./../images/dificil/image_part_016.jpg";
import diecinueve from "./../images/dificil/image_part_016.jpg";
import veinte from "./../images/dificil/image_part_016.jpg";
import veintiuno from "./../images/dificil/image_part_016.jpg";
import veintidos from "./../images/dificil/image_part_016.jpg";
import veintitres from "./../images/dificil/image_part_016.jpg";
import veinticuatro from "./../images/dificil/image_part_016.jpg";
import veinticinco from "./../images/dificil/image_part_016.jpg";
import "./puzzle.css";
const Dificil = ({
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
  modalStyles,
  estilo,
}) => {
  //Estados
  const [ImgsMezcladas, setImgsMezcladas] = useState([
    uno,
    dos,
    tres,
    cuatro,
    cinco,
    seis,
    siete,
    ocho,
    nueve,
    diez,
    once,
    doce,
    trece,
    catorce,
    quince,
    dieciseis,
    diecisiete,
    dieciocho,
    diecinueve,
    veinte,
    veintiuno,
    veintidos,
    veintitres,
    veinticuatro,
    veinticinco,
  ]);
  const [clickovich, setClickovich] = useState(false);
  const [modal, setModal] = useState(false);
  const [rta, setRta] = useState({ respuesta: "" });
  useEffect(() => {
    setImgsMezcladas(shuffle(ImgsMezcladas));
  }, [ImgsMezcladas]);
  const { anios } = edad;

  const questions = [
    "pregunta1",
    "pregunta2",
    "pregunta3",
    "pregunta4",
    "pregunta5",
    "pregunta6",
    "pregunta7",
    "pregunta8",
    "pregunta9",
    "pregunta10",
    "pregunta11",
    "pregunta12",
    "pregunta13",
    "pregunta14",
    "pregunta15",
    "pregunta16",
    "pregunta16",
    "pregunta17",
    "pregunta18",
    "pregunta19",
    "pregunta20",
    "pregunta21",
    "pregunta22",
    "pregunta23",
    "pregunta24",
  ];

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
    setImagenes([...imagenes, ImgsMezcladas[contador]]);
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
    //Valida cuando llega a 12 para.
    if (imagenes.length === 25) {
      setClickovich(true);
      return;
    }
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
          id="ImagenDificil"
          onClick={(e) => {
            handleClick2(e);
            toggleClass(e);
          }}
          src={imagen}
          alt="pieza"
        />
      ))}
      {clickovich ? null : (
        <Fragment>
          <img
            id="ImagenDificil"
            onClick={handleClick}
            src={pregunta}
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

export default Dificil;
