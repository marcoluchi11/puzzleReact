import React from "react";
import "./spinner.css";
const Spinner = ({ mensaje }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className=" sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
      <p className="d-block ml-3">{mensaje}</p>
    </div>
  );
};

export default Spinner;
