import React from "react";
import styled from "@emotion/styled";
const Pie = styled.div`
  background-color: #354b60;

  display: flex;
  justify-content: center;
  height: 40px;

  p {
    margin-bottom: 0;
    margin-top: 5px;
    margin-left: 4px;
    color: #ffffff;
  }
`;
const Footer = () => {
  return (
    <Pie className="row">
      <a
        href="https://cafecito.app/marcoluchi11"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          srcSet="https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x"
          src="https://cdn.cafecito.app/imgs/buttons/button_5.png"
          alt="Invitame un café en cafecito.app"
        />
      </a>
      <div className="ml-3 mt-1">
        <a
          href="https://instagram.com/museo_memoria?igshid=we2k4g92dv7z"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            src="https://icongr.am/material/instagram.svg?size=33&color=ffffff"
            alt=""
          />
        </a>

        <a
          href="https://www.facebook.com/MuseodelaMemoria/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="ml-3"
            src="https://icongr.am/material/facebook.svg?size=33&color=ffffff"
            alt=""
          />
        </a>
        <a
          href="https://www.museodelamemoria.gob.ar"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img
            className="ml-3"
            src="https://icongr.am/material/web.svg?size=33&color=ffffff"
            alt=""
          />
        </a>
      </div>
    </Pie>
  );
};

export default Footer;
