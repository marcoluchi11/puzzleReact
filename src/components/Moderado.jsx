import React, { useEffect, useState, Fragment } from "react";
import Error from "./Error";
import CorrectaIncorrecta from "./CorrectaIncorrecta";

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
import pregunta from "./../images/pregunta.png";
import uno from "./../images/moderado/image_part_001.jpg";
import dos from "./../images/moderado/image_part_002.jpg";
import tres from "./../images/moderado/image_part_003.jpg";
import cuatro from "./../images/moderado/image_part_004.jpg";
import cinco from "./../images/moderado/image_part_005.jpg";
import seis from "./../images/moderado/image_part_006.jpg";
import siete from "./../images/moderado/image_part_007.jpg";
import ocho from "./../images/moderado/image_part_008.jpg";
import nueve from "./../images/moderado/image_part_009.jpg";
import diez from "./../images/moderado/image_part_010.jpg";
import once from "./../images/moderado/image_part_011.jpg";
import doce from "./../images/moderado/image_part_012.jpg";
import "./puzzle.css";
const Moderado = ({
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
  setContadorRtas,
  contadorRtas,
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
  ]);
  const [clickovich, setClickovich] = useState(false);
  const [modal, setModal] = useState(false);
  const [correcta, setCorrecta] = useState(null);
  const [incorrecta, setIncorrecta] = useState(false);
  const [rta, setRta] = useState(null);
  useEffect(() => {
    setAnswers(answers.map((answer) => shuffle(answer)));
    setImgsMezcladas(shuffle(ImgsMezcladas));
    // eslint-disable-next-line
  }, [ImgsMezcladas]);
  const { anios } = edad;

  const questions = [
    "¿Dónde se alojaban a los detenidos/desaparecidos?",
    "¿Quiénes empezaron a buscar a los detenidos/desaparecidos?",
    "¿De qué manera se empezaron a manifestar las Madres de Plaza de Mayo?",
    "¿Y las abuelas de Plaza de Mayo quiénes eran?",
    "¿Qué relación hay entre los desaparecidos, las Madres de Plaza de Mayo y las movilizaciones sociales?",
    "¿Cuál fue la primera gran campaña de la Dictadura para recuperar el apoyo de la sociedad argentina?",
    "¿Cuál fue la segunda gran campaña de la Dictadura para recuperar el apoyo de la sociedad argentina?",
    "Las Abuelas de Plaza de Mayo ¿Por qué caminaban tanto?",
    "¿Qué significa “crimen de lesa humanidad”?",
    "¿Qué fue la Escuela de las Américas?",
    "¿A quién pertenece esta frase? “Sin cuerpos no hay prueba, sin pruebas no hay delito. Ni muerto, ni vivo, está desaparecido”.",
    "Las Madres contaban con una herramienta de comunicación propia, que las defendía de la censura que les imponía el discurso dominante… ¿Cuál te parece que era?",
  ];
  const rtasCorrectas = [
    "En los centros clandestinos",
    "Las Madres de Plaza de Mayo",
    "Caminando por la Plaza de Mayo",
    "Las abuelas de los bebés desaparecidos",
    "Simbolizan la lucha de la sociedad argentina ante la violencia implementada por la dictadura",
    "La utilización del Mundial del ’78 como pantalla de encubrimiento",
    "Publicidades que presentaban a la Argentina como vencedora de la Guerra de Malvinas. ",
    "Porque si dejaban de caminar eran detenidas",
    "Todas son correctas",
    "Una escuela de entrenamiento militar promovida por los EEUU a las fuerzas militares de Latinoamérica",
    "Jorge Rafael Videla",
    "Periódico",
  ];

  const [answers, setAnswers] = useState([
    ["En los hospitales", "En las cárceles", "En los centros clandestinos"],
    ["Un detective judicial", "Las Madres de Plaza de Mayo", "La sociedad"],
    [
      "Recorriendo la ciudad",
      "Haciendo manifestaciones",
      "Caminando por la Plaza de Mayo",
    ],
    [
      "Las abuelas de los desaparecidos detenidos",
      "Las abuelas de los bebés desaparecidos",
      "Las abuelas de la sociedad",
    ],
    [
      "Simbolizan la lucha de la sociedad argentina ante la violencia implementada por la dictadura",
      "No están relacionados",
      "Son entidades políticas que representaban las ideas de los militares",
    ],
    [
      "La utilización del Mundial del ’78 como pantalla de encubrimiento",
      "El recibimiento del presidente Jimmy Carter (EEUU) a la Argentina",
      "La implementación de medidas económicas de corto plazo",
    ],
    [
      "Publicidades que presentaban a la Argentina como vencedora de la Guerra de Malvinas",
      "Publicidades que favorecían la importación de productos",
      "Publicidades que favorecían al cuidado de la propiedad privada",
    ],
    [
      "Porque si dejaban de caminar eran detenidas",
      "Porque era una promesa que debían cumplir",
      "Porque las fuerzas militares las obligaban a hacerlo como castigo",
    ],
    [
      "Un crimen que agravia, ofende e injuria a la humanidad",
      "Crimen que nunca prescribe",
      "Delitos especialmente atroces y de carácter inhumano, que forman parte de un ataque generalizado o sistemático contra una población civil",
      "Todas son correctas",
    ],
    [
      "Una escuela de entrenamiento militar promovida por los EEUU a las fuerzas militares de Latinoamérica",
      "Una escuela de Latinoamérica que educaba y formaba a docentes de todo el continente americano",
      "Una escuela de formación universitaria de los EEUU",
    ],
    ["Orlando Ramón Agosti", "Emilio Eduardo Massera", "Jorge Rafael Videla"],
    ["Radio", "Periódico", "Pintadas"],
    [],
  ]);
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
    }, 2300);
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
    //Valida cuando llega a 12 para.
    if (imagenes.length === 12) {
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
              <h6>Hiciste click! Ahora responde esta pregunta</h6>
            </ModalHeader>
            <ModalBody>
              <FormGroup>
                <h5 className="mb-3">{questions[contador]}</h5>
                <FormGroup tag="fieldset">
                  {answers[contador].map((answer) => {
                    return (
                      <label
                        className="d-block w-100 mb-2 estilado"
                        //    key={nanoid()}
                      >
                        <input
                          onClick={handleClickModal}
                          type="checkbox"
                          value={answer}
                        />
                        {answer}
                      </label>
                    );
                  })}
                </FormGroup>
                {error ? (
                  <Error mensaje="Error, Selecciona una respuesta" />
                ) : null}
              </FormGroup>
            </ModalBody>
            <ModalFooter>
              {correcta ? (
                <CorrectaIncorrecta
                  mensaje="Respuesta Correcta!"
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

export default Moderado;
