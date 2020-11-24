import React, { useState, Fragment, useEffect } from "react";
import Error from "./Error";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
} from "reactstrap";
import { appendSpreadsheet } from "./../Google";
import { shuffle } from "./../shuffle";
import "./puzzle.css";
import pregunta from "./../images/pregunta.png";
import uno from "./../images/facil/image_part_001.png";
import dos from "./../images/facil/image_part_002.png";
import tres from "./../images/facil/image_part_003.png";
import cuatro from "./../images/facil/image_part_004.png";
import cinco from "./../images/facil/image_part_005.png";
import seis from "./../images/facil/image_part_006.png";
import siete from "./../images/facil/image_part_007.png";
import ocho from "./../images/facil/image_part_008.png";
import CorrectaIncorrecta from "./CorrectaIncorrecta";
const Facil = ({
  seleccion1,
  setSeleccion1,
  setSeleccion2,
  imagenes,
  setImagenes,
  user,
  setUser,
  opciones,
  contador,
  setContador,
  edad,
  error,
  setError,
  modalStyles,
  estilo,
  setContadorRtas,
  contadorRtas,
  count,
  setCount,
  incompleto,
  setIncompleto,
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
  ]);
  const [clickovich, setClickovich] = useState(false);
  const [modal, setModal] = useState(false);
  const [rta, setRta] = useState(null);
  const questions = [
    "¿A qué te remite la fecha del 24 de marzo? ",
    "¿Con qué nombre se presenta la Dictadura de 1976?",
    "¿Sabes quiénes integraban la junta militar?",
    "¿A qué te remite la palabra desaparecidos? ",
    "¿Cuáles crees que eran los motivos que tenían según los militares para detener y/o desaparecer a las personas?",
    "¿Cuáles eran las personas que estaban desaparecidas?",
    "Piensa…. ¿A qué te remite el término Razia?",
    "¿Qué relación puedes establecer entre el auto Falcon verde y el golpe militar?",
  ];
  const [correcta, setCorrecta] = useState(null);
  const [incorrecta, setIncorrecta] = useState(false);
  const rtasCorrectas = [
    "Golpe cívico militar o Golpe de Estado",
    "Proceso de Reorganización Nacional",
    "Integrantes de las Tres fuerzas armadas",
    "A una persona que no se sabe dónde está",
    "Porque eran revolucionarios",
    "Todas son correctas",
    "A un tipo de modalidad de detención sobre las personas",
    "Era un auto que se utilizaba para detener y secuestrar a personas",
  ];
  const [answers, setAnswers] = useState([
    [
      "Una fecha patria",
      "Golpe cívico militar o Golpe de Estado",
      "Conmemoración de un prócer",
    ],
    [
      "Plan de reforma nacional",
      "Plan económico, civil y político nacional",
      "Proceso de Reorganización Nacional",
    ],
    [
      "Presidentes elegidos mediante elecciones",
      "Integrantes de las Tres fuerzas armadas",
      "Políticos",
    ],
    [
      "A una persona que se fue",
      "A una persona que está muerta ",
      "A una persona que no se sabe dónde está",
    ],
    [
      "Porque hacían algún daño",
      "Porque eran delincuentes",
      "Porque eran revolucionarios",
    ],
    [
      "Docentes/estudiantes",
      "Trabajadores/sindicalistas",
      "Militantes/grupos políticos",
      "Todas son correctas",
    ],
    [
      "A un tipo de discriminación sobre las personas",
      "A un tipo de modalidad de detención sobre las personas",
      "A un tipo de reconocimiento sobre las personas",
    ],
    [
      "Era un auto que estaba de moda",
      "Era un auto que usaban las familias tipo",
      "Era un auto que se utilizaba para detener y secuestrar a personas",
    ],
    [],
    [],
  ]);
  useEffect(() => {
    setAnswers(answers.map((answer) => shuffle(answer)));
    setImgsMezcladas(shuffle(ImgsMezcladas));
    // eslint-disable-next-line
  }, [ImgsMezcladas]);
  const { anios } = edad;

  const modalClick = () => {
    // POR SI NO INGRESA RTA
    if (rta === null) {
      setError(true);
      return;
    }
    setError(false);
    // SE MANDA TODO AL STYLESHEET
    appendSpreadsheet(
      {
        Pregunta: questions[contador],
        Respuesta: rta,
        Nombre: user.displayName,
        Mail: user.email,
        Edad: anios,
      },
      { Pregunta: questions[contador], Respuesta: rta }
    );
    //SE SUMAN LAS RTAS SI SON IGUALES
    if (rta === rtasCorrectas[contador]) {
      setContadorRtas(contadorRtas + 1);
      setCorrecta(true);
      setIncorrecta(false);
    } else {
      setCorrecta(false);
      setIncorrecta(true);
    }

    setTimeout(() => {
      setRta(null);
      setContador(contador + 1);
      setImagenes([...imagenes, ImgsMezcladas[contador]]);
      setCorrecta(false);
      setIncorrecta(false);
      setModal(null);
    }, 2800);
  };

  if (user === "" || user === false) {
    setUser({
      displayName: "Anonimo",
      email: "Anonimo",
    });
  }
  const handleClickModal = (e) => {
    setRta(e.target.value);
  };
  const handleClick = () => {
    setModal(true);
    //Valida cuando llega a 8 para.
    if (imagenes.length === 8) {
      setClickovich(true);
      setIncompleto(true);
      return;
    }
  };
  //Click para mover las piezas
  const handleClick2 = (e) => {
    //Actualiza el state al primer y segundo click
    if (count >= 2) return;
    if (incompleto === false) return;
    if (seleccion1 === "") {
      setSeleccion1(e.target.src);
    }
    if (seleccion1 !== "") {
      setSeleccion2(e.target.src);
    }
    if (seleccion1 === e.target.src) {
      setCount(0);
      setSeleccion1("");
      setSeleccion2("");
    }
  };

  const toggleClass = (e) => {
    if (incompleto === false) return;
    if (count >= 2) return;
    e.target.classList.toggle("active");
    setCount(count + 1);
  };

  const addTransition = (e) => {
    e.target.classList.add("transicion");
  };

  return (
    <div id="Contenedor">
      {imagenes.map((imagen) => (
        <img
          key={imagen}
          onLoad={addTransition}
          className="Imagen"
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
            className="Imagen"
            onClick={handleClick}
            src={pregunta}
            alt="Boton click"
          />
          <Modal style={modalStyles} isOpen={modal}>
            <ModalHeader style={estilo}>
              <h5>{questions[contador]}</h5>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                {answers[contador].map((answer) => {
                  return (
                    <label
                      className="d-block w-100 mb-2 estilado"
                      //    key={nanoid()}
                    >
                      <input
                        onClick={handleClickModal}
                        type="radio"
                        name="option"
                        value={answer}
                      />
                      {answer}
                    </label>
                  );
                })}

                {error ? (
                  <Error mensaje="Error, Selecciona una respuesta" />
                ) : null}
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              {correcta ? (
                <CorrectaIncorrecta
                  mensaje="¡Respuesta Correcta!"
                  correcta={correcta}
                  incorrecta={incorrecta}
                />
              ) : null}
              {incorrecta ? (
                <CorrectaIncorrecta
                  correcta={correcta}
                  incorrecta={incorrecta}
                  mensaje={`Respuesta Incorrecta. La respuesta correcta era "${rtasCorrectas[contador]}"`}
                />
              ) : null}
              <Button
                color="primary"
                onClick={() => {
                  modalClick();
                }}
              >
                Enviar respuesta
              </Button>
            </ModalFooter>
          </Modal>
        </Fragment>
      )}
    </div>
  );
};

export default Facil;
