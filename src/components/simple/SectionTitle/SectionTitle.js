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
  position: relative;
  padding: 0 0 20px 0;
  line-height: 1.2;

  &:after {
    content: '';
    position: absolute;
    width: 100px;
    height: 2px;

    background: #f9e242;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    transition: background-color 0.3s;
  }
`;

const SectionTitle = ({ children }) => {
  return <StyledH1>{children}</StyledH1>;
};

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired,
};

export default SectionTitle;
