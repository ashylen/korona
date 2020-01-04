import React from 'react';

// Modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin: 30px auto 10px;
  width: 90%;
  max-width: 1440px;
`;

const SectionTitle = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTitle;
