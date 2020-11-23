import React from "react";
import ErrorIcon from "./../images/error-24px.svg";
const Error = ({ mensaje }) => {
  return (
    <p className="alert alert-danger mt-2 transicion" role="alert">
      <img className="mr-3" src={ErrorIcon} alt="" />
      {mensaje}
    </p>
  );
};

export default Error;
