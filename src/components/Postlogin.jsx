import React from "react";
import styled from "@emotion/styled";
const Imagenovich = styled.img`
  border-radius: 75%;
  width: 50px;
`;
const Postlogin = ({ user }) => {
  return <Imagenovich src={user.photoURL} alt="" />;
};

export default Postlogin;
