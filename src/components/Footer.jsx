import React from "react";
import styled from "@emotion/styled";
const Pie = styled.div`
  background-color: #5b6467;
  background-image: linear-gradient(315deg, #5b6467 0%, #8b939a 74%);
  display: flex;
  justify-content: center;
  p {
    margin-bottom: 0;
    margin-top: 5px;
    margin-left: 4px;
  }
`;
const Footer = () => {
  return (
    <Pie className="row fixed-bottom">
      <a
        href="https://cafecito.app/marcoluchi11"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          srcSet="https://cdn.cafecito.app/imgs/buttons/button_2.png 1x, https://cdn.cafecito.app/imgs/buttons/button_2_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_2_3.75x.png 3.75x"
          src="https://cdn.cafecito.app/imgs/buttons/button_2.png"
          alt="Invitame un café en cafecito.app"
        />
      </a>

      <p>&copy;2020</p>
    </Pie>
  );
};

export default Footer;
