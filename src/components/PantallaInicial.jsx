import React from "react";
import Login from "./Login";
import styled from "@emotion/styled";
import Error from "./Error";
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
  font-size: 46px;
`;
const Subtitulo = styled.h3`
  font-family: "Mulish", sans-serif;
  text-align: center;
  font-size: 22px;
  font-weight: 300px;
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
  const handleChange = (e) => {
    setEdad({ ...edad, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    if (edad.anios === "" || edad.anios > 70 || edad.anios < 5) {
      setError(true);
      return;
    }
    setError(false);
    setOpciones("something");
  };
  return (
    <div className="row">
      <div className="col-md-12 d-flex justify-content-center">
        <Titulo>Bienvenido al Rompecabezas</Titulo>
      </div>
      <div className="col-md-12 d-flex justify-content-center text-center">
        <Login user={user} setUser={setUser} />
      </div>
      <div className="col-md-12 d-flex justify-content-center text-center mt-1">
        <small>
          El login es solo para recopilar informacion, no se utilizaran otros
          datos.
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
        <Boton className="btn btn-success" onClick={handleClick}>
          Facil
        </Boton>
        <Boton className="btn btn-warning" onClick={handleClick}>
          Media
        </Boton>
        <Boton className="btn btn-danger" onClick={handleClick}>
          Dificil
        </Boton>
      </div>
    </div>
  );
};

export default PantallaInicial;
