import React, { useState, Fragment, useEffect } from "react";
import Error from "./Error";
import shortid from "shortid";
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
import { shuffle } from "./../shuffle";
import "./puzzle.css";
import pregunta from "./../images/pregunta.png";
import uno from "./../images/facil/image_part_001.jpg";
import dos from "./../images/facil/image_part_002.jpg";
import tres from "./../images/facil/image_part_003.jpg";
import cuatro from "./../images/facil/image_part_004.jpg";
import cinco from "./../images/facil/image_part_005.jpg";
import seis from "./../images/facil/image_part_006.jpg";
import siete from "./../images/facil/image_part_007.jpg";
import ocho from "./../images/facil/image_part_008.jpg";
const Facil = ({
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
  const rtasCorrectas = [
    "Golpe cívico militar o Golpe de Estado",
    "Proceso de Reorganización Nacional",
    "Integrantes de las Tres fuerzas armadas",
    "A una persona que no se sabe dónde está",
    "Porque eran revolucionarios",
    "Todos",
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
      "Todos",
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
  ]);
  useEffect(() => {
    setAnswers(answers.map((answer) => shuffle(answer)));
    setImgsMezcladas(shuffle(ImgsMezcladas));
  }, [ImgsMezcladas]);
  const { anios } = edad;

  const modalClick = () => {
    if (rta === null) {
      setError(true);
      return;
    }
    setError(false);
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

    //se agregan las imagenes al hacer click
    setRta(null);
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
  const handleClickModal = (e) => {
    setRta(e.target.value);
  };
  const handleClick = () => {
    //NO SE ACTUALIZA EN EL STATE
    setModal(true);

    //Valida cuando llega a 8 para.
    if (imagenes.length === 8) {
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
          id="Imagen"
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
            id="Imagen"
            onClick={handleClick}
            src={pregunta}
            alt="Boton click"
          />
          <Modal style={modalStyles} isOpen={modal}>
            <ModalHeader style={estilo}>
              <h4>Hiciste click! Ahora responde esta pregunta</h4>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <h5 className="mb-3">{questions[contador]}</h5>
                <FormGroup tag="fieldset">
                  {answers[contador].map((answer) => (
                    <FormGroup key={shortid.generate()} check>
                      <Label className="pb-2" check>
                        <Input
                          onClick={handleClickModal}
                          type="radio"
                          name="opciones"
                          value={answer}
                        />
                        {answer}
                      </Label>
                    </FormGroup>
                  ))}
                </FormGroup>

                {error ? (
                  <Error mensaje="Error, Selecciona una respuesta" />
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

export default Facil;
