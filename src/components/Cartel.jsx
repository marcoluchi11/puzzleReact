import React from "react";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
const DivCartel = styled.div`
  margin-top: 3rem;
  font-weight: 700;
`;
const Cartel = ({ cartel }) => {
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
