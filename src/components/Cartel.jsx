import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
const DivCartel = styled.div`
  margin-top: 3rem;
  font-weight: 700;
`;
const Cartel = ({ cartel }) => {
  if (cartel === null) return;
  return (
    <DivCartel className="alert alert-success" role="alert">
      {cartel}
    </DivCartel>
  );
};

export default Cartel;
Cartel.propTypes = {
  cartel: PropTypes.string.isRequired,
};
