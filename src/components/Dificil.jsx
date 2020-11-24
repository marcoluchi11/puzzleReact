import React, { useEffect, useState, Fragment } from "react";
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
import CorrectaIncorrecta from "./CorrectaIncorrecta";
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
    nueve,
    diez,
    once,
    doce,
    trece,
    catorce,
    quince,
    dieciseis,
  ]);
  const [clickovich, setClickovich] = useState(false);
  const [correcta, setCorrecta] = useState(null);
  const [incorrecta, setIncorrecta] = useState(false);
  const [modal, setModal] = useState(false);
  const [rta, setRta] = useState(null);
  useEffect(() => {
    setAnswers(answers.map((answer) => shuffle(answer)));
    setImgsMezcladas(shuffle(ImgsMezcladas));
    // eslint-disable-next-line
  }, [ImgsMezcladas]);
  const { anios } = edad;

  const questions = [
    "“Nunca más” es el nombre…",
    "¿Qué tienen en común Montoneros y el Ejército Revolucionario del Pueblo (ERP)?",
    "¿Durante la década del ‘70 solo hubo dictadura en Argentina?",
    "La teoría de los dos demonios hace énfasis en…",
    "En su discurso, la Junta Militar utilizó el término “desaparecido” porque…",
    "¿Por qué se denomina “dictadura cívico-militar?",
    "¿Por qué crees que el principal grupo a perseguir y secuestrar eran los jóvenes?",
    "¿Cómo lograron los militares perpetrar el Golpe de Estado de 1976?",
    "¿Por qué el sistema político no encontró una respuesta democrática al caos imperante en la sociedad?",
    "¿Qué efectos tuvieron las políticas aplicadas por la Dictadura Militar?",
    "¿Qué vínculo se puede plantear entre los desaparecidos, la guerra de Malvinas y las Madres y Abuelas de Plaza de Mayo?",
    "¿A qué se llamó marcha de la Resistencia?",
    "¿Qué relación tienen los antiguos pañales de tela y los pañuelos utilizados por las Madres y Abuelas de Plaza de Mayo?",
    "¿De qué modo te parece que esta situación afectaba a la educación?",
    "Las manifestaciones artísticas ¿permitieron reconstruir la historia de la Dictadura Cívico Militar?",
    "La Comisión Nacional sobre la Desaparición de Personas (CONADEP) fue creada por el Gobierno argentino en 1983 con el objetivo de…",
  ];
  const rtasCorrectas = [
    "Que designó la CONADEP (Comisión Nacional sobre la Desaparición de Personas) para el informe final sobre el Proceso de Reorganización Nacional y su accionar",
    "Ambas son correctas",
    "No, formó parte de un plan sistemático más grande para erradicar el comunismo en América Latina",
    "Que la violencia de las organizaciones guerrilleras y la de las FF. AA fueron iguales y comparables",
    "Todas son correctas",
    "Porque hubo sectores de la sociedad cómplices de la dictadura",
    "Por su compromiso e idealismo político",
    "Todas son correctas",
    "Las fuerzas armadas eran considerados los salvadores de la patria",
    "Todas son correctas",
    "Las madres y abuelas de Plaza de Mayo salieron a reclamar por los hijos y nietos desaparecidos y por los soldados obligados a combatir en la guerra de Malvinas",
    "Manifestaciones públicas organizadas en Argentina desde 1981 con el fin de reclamar por la vigencia de los derechos humanos",
    `Símbolo de las Madres y Abuelas en su "Manifestación pública" por la búsqueda de sus hijos secuestrados`,
    "Fuerte presencia de control y disciplinamiento sobre el ámbito educativo",
    "Sí, porque permite reconstruir la propia identidad cultural argentina y de alguna manera sensibilizan respecto a las cuestiones candentes de la sociedad",
    "Aclarar e investigar la desaparición forzada de personas producidas por la dictadura cívico militar en Argentina",
  ];

  const [answers, setAnswers] = useState([
    [
      "De una canción famosa en la dictadura",
      "Que designó la CONADEP (Comisión Nacional sobre la Desaparición de Personas) para el informe final sobre el Proceso de Reorganización Nacional y su accionar",
      "De una frase prohibida",
    ],
    [
      "Eran organizaciones guerrilleras armadas que querían acabar con el imperialismo",
      "Ambas son correctas",
      "Fueron consideradas el enemigo interno a eliminar sistemáticamente por la Alianza Anticomunista Argentina (AAA) y por las Fuerzas Armadas (FF.AA.)",
    ],
    [
      "Sí, se desarrolló solo en Argentina",
      "No, muchos países del mundo estaban en dictadura",
      "No, formó parte de un plan sistemático más grande para erradicar el comunismo en América Latina",
    ],
    [
      "Que el conflicto tenía matices religiosos",
      "Que la violencia de las organizaciones guerrilleras y la de las FF. AA fueron iguales y comparables",
      "Que los delitos de lesa humanidad no deberían haber sido juzgados",
    ],
    [
      "Todas son correctas",
      "Para no dejar pruebas del delito",
      "De esta forma eran eximidos de un juicio justo",
      "Aprovechaba cierto “vacío legal” con respecto al conocimiento de su paradero",
    ],
    [
      "Porque se reprimía la educación cívica en todas las escuelas",
      "Porque hubo sectores de la sociedad cómplices de la dictadura",
      "Porque los dictadores querían reformar a la sociedad para civilizarla",
    ],
    [
      "Por su compromiso e idealismo político",
      "Por su extracción social",
      "Por su extravagante vestimenta y tener el pelo largo",
    ],
    [
      "Todas son correctas",
      "La creciente violencia uno de los argumentos para el Golpe, era fomentada en gran medida por la propia derecha.",
      "Porque había un plan para imponer un determinado modelo socio-económico en Latinoamérica",
      "Porque el gobierno de Isabel Perón era muy débil",
    ],
    [
      "Porque no había líderes políticos",
      "Las fuerzas armadas eran considerados los salvadores de la patria",
      "Los partidos políticos no creían en la democracia",
    ],
    [
      "Todas son correctas",
      "Aparecen nuevos actores: acreedores externos, acompañados por organismos como el FMI y el Banco Mundial",
      "Desprestigio del sindicalismo, precarización laboral, degradación de la fuerza de trabajo, desocupación, desindustrialización…",
    ],
    [
      "Las madres y las abuelas fueron indiferentes a la guerra de Malvinas",
      "Las madres y abuelas de Plaza de Mayo salieron a reclamar por los hijos y nietos desaparecidos y por los soldados obligados a combatir en la guerra de Malvinas",
      "No hay relación alguna",
    ],
    [
      "Conjunto de personas dedicadas a apoyar a un gobierno por medio del uso de la fuerza",
      "Movimiento que se opone a un gobierno de un Estado Soberano",
      "Manifestaciones públicas organizadas en Argentina desde 1981 con el fin de reclamar por la vigencia de los derechos humanos",
    ],
    [
      `Símbolo de las Madres y Abuelas en su "Manifestación pública" por la búsqueda de sus hijos secuestrados`,
      "Símbolo de queja para incorporar el uso de pañales descartables",
      "Símbolo de apoyo a las políticas implementadas en ese entonces",
    ],
    [
      "Fuerte presencia de control y disciplinamiento sobre el ámbito educativo",
      "Formar personas que viven en sociedad, que se constituyen como sujetos activos y participativos de su historia",
      "Permitir que los docentes elijan el contenido a impartir",
    ],
    [
      "No, porque los artistas fueron indiferentes a lo acontecido durante la dictadura",
      "Sí, porque permite reconstruir la propia identidad cultural argentina y de alguna manera sensibilizan respecto a las cuestiones candentes de la sociedad",
      "No, porque durante la democracia las manifestaciones artísticas continuaban prohibidas",
    ],
    [
      "Olvidar lo que pasó en la dictadura y propiciar la reconstrucción nacional",
      "Aclarar e investigar la desaparición forzada de personas producidas por la dictadura cívico militar en Argentina",
      "Elaborar una lista solamente de los sobrevivientes del Terrorismo de Estado",
    ],
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
    if (imagenes.length === 16) {
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
    if (count >= 2) return;
    if (incompleto === false) return;
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
          className="Imagen transicion"
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
            onClick={handleClick}
            className="Imagen"
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
                      //      key={nanoid()}
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
