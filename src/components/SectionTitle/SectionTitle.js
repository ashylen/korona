import React from 'react';

// Modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledH1 = styled.h1`
  text-align: center;
  font-size: 3rem;
  margin: 10px auto;
`;

const SectionTitle = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTitle;
