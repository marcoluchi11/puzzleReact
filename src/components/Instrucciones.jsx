import React, { useEffect } from "react";
import styled from "@emotion/styled";
import Cartel from "./Cartel";
import Spinner from "./Spinner";
import TablaRanking from "./TablaRanking";
import PropTypes from "prop-types";
import Stopwatch from "./Stopwatch";
import ImagenFinal from "./ImagenFinal";
import Postlogin from "./Postlogin";
import { Ranking, RankingDatos } from "./../Google";
import { comprobarGanador } from "./../comprobarGanador";
import Renew from "./../images/autorenew-24px.svg";
import Back from "./../images/arrow_back_ios-24px.svg";
import CartelPregunta from "./CartelPregunta";
const Contenedor = styled.div`
  margin-top: 0.5rem;
  margin-bottom: -50px;
  min-height: 100%;
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
  color: #ffffff;
  padding: 5px 0;
  animation: fadein 5s;
  &::before {
    content: "• ";
    color: #ec6778;
  }
`;
const ContenedorInstrucciones = styled.div`
  display: flex;
  place-content: space-around;
  align-items: center;
  flex-direction: column;
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
  opciones,
  contador,
  ganador,
  setGanador,
  segundos,
  setSegundos,
  setContadorRtas,
  contadorRtas,
  ranking,
  count,
  setCount,
  setRanking,
  incompleto,
}) => {
  useEffect(() => {
    RankingDatos(opciones).then((data) => {
      const datosRank = data.map((datovich) => datovich._rawData);
      const datosRank2 = datosRank.sort(
        (a, b) => parseInt(a[1]) - parseInt(b[1])
      );
      //ME ORDENA EL ARRAY
      setRanking(datosRank2);
    });
  }, [opciones, setRanking]);
  useEffect(() => {
    setGanador(comprobarGanador(imagenes, contador));
    if (comprobarGanador(imagenes, contador)) {
      if (user.displayName !== "Anonimo")
        Ranking(
          {
            Nombre: user.displayName,
            Tiempo: segundos + "s",
            Respuestas: contadorRtas + " / " + contador,
          },
          opciones
        );
    }
    // eslint-disable-next-line
  }, [imagenes, setGanador, contador]);
  const handleClick = () => {
    const activo = document.querySelectorAll(".active");
    const transi = document.querySelectorAll(".transicion");
    activo.forEach((item) => {
      item.classList.remove("active");
    });
    transi.forEach((item) => {
      item.classList.remove("transicion");
    });
    if (seleccion1 !== "" && seleccion2 !== "" && seleccion1 !== seleccion2) {
      const imagenesSwapeadas1 = imagenes.findIndex(
        (img) => img === seleccion1.substring(28)
      );
      const imagenesSwapeadas2 = imagenes.findIndex(
        (img) => img === seleccion2.substring(28)
      );

      const newArray = () => {
        //SE CREA ARRAY CAMBIADO
        let arrNuevo = [...imagenes];
        [arrNuevo[imagenesSwapeadas1], arrNuevo[imagenesSwapeadas2]] = [
          arrNuevo[imagenesSwapeadas2],
          arrNuevo[imagenesSwapeadas1],
        ];
        setCount(0);
        return arrNuevo;
      };
      setImagenes(newArray());

      setSeleccion1("");

      setSeleccion2("");
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
    setSegundos(0);
    setRanking(null);
    setContadorRtas(0);
  };
  return (
    <Contenedor>
      <ContenedorInstrucciones>
        <Postlogin user={user} />
        {incompleto ? null : (
          <CartelPregunta mensaje="Haz click en el (?) hasta responder todas las preguntas y que desaparezca." />
        )}
        {ganador ? (
          <Cartel
            opciones={opciones}
            ganador={ganador}
            contadorRtas={contadorRtas}
            contador={contador}
          />
        ) : null}
        <button className="btn btn-danger mt-3 mb-3" onClick={volverAlMenu}>
          <img src={Back} alt="Icono vuelta" /> Volver al menú principal
        </button>
        <button onClick={handleClick} className="btn btn-primary mb-2">
          <img src={Renew} alt="Icono Intercambio" /> Intercambia Piezas
        </button>

        <ImagenFinal contador={contador} opciones={opciones} />
        <Stopwatch
          segundos={segundos}
          setSegundos={setSegundos}
          contador={contador}
          opciones={opciones}
          ganador={ganador}
        />
      </ContenedorInstrucciones>
      <h3 className="mt-1">Instrucciones para jugar</h3>
      <ListaInstrucciones>
        <ElementoLista>
          Haz click en la imágen del signo de preguntas (?) para responder una
          pregunta
        </ElementoLista>
        <ElementoLista>
          Respondiendo las preguntas se muestran las piezas del Puzzle
        </ElementoLista>
        <ElementoLista>
          Luego de responder las preguntas, ¡completá el Puzzle!
        </ElementoLista>
        <ElementoLista>
          Para intercambiar piezas, haz click en las dos imágenes a
          intercambiar, y luego clickeá en "Intercambia Pieza"
        </ElementoLista>
        <ElementoLista>Premisa principal: Divertirse.</ElementoLista>
      </ListaInstrucciones>
      <div className=" text-center">
        {ranking ? (
          <TablaRanking ranking={ranking} />
        ) : (
          <Spinner mensaje="Cargando Ranking..." />
        )}
      </div>
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
