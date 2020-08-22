import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
const DivCartel = styled.div`
  margin-top: 3rem;
  font-weight: 700;
`;
const Cartel = () => {
  const url =
    "https://docs.google.com/spreadsheets/d/1lcnrmA9kCN78yr4aVS2VU6c7-9Z7zZ5PxnsBMRrS1Uo/edit?usp=sharing";
  // if (cartel === null) return;
  return (
    <DivCartel className="alert alert-success" role="alert">
      <p>Felicitaciones, completaste el rompecabezas!!</p>
      <p>
        Puedes ver las respuestas de los demas{" "}
        <a href={url} rel="noopener noreferrer" target="_blank">
          aqui
        </a>
      </p>
    </DivCartel>
  );
};

export default Cartel;
Cartel.propTypes = {
  cartel: PropTypes.string.isRequired,
};
