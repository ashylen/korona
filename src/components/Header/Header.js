import React from 'react';

// Modules
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

// Utils
import { phoneNumber } from 'utils/constants';

// Components
import Nav from '../Nav/Nav';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(255,255,255,0.85);
  }
  70% {
    box-shadow: 0 0 0 20px rgba(0,0,0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0,0,0, 0);
  }
`;

const ring = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;

const StyledLink = styled.a`
  position: fixed;
  bottom: 5px;
  right: 5px;
  text-decoration: none;
  color: #fff;
  text-align: center;
  padding: 15px;
  font-size: 2.5rem;
  border: 2px solid #ffa922;
  background-color: #343a40;
  border-radius: 50px;
  box-shadow: 0 0 0 0 rgba(174, 178, 178, 0.8);
  animation: ${pulse} 2s infinite,  ${ring} 2s infinite  ;
  z-index: 200;
`;

const StyledHeader = styled.header`
  background-color: #111;
`;

const Header = ({ isHomePage }) => {
  return (
    <StyledHeader>
      <Nav isHomePage={isHomePage} />
      <StyledLink href={`tel:${phoneNumber}`}>
        <FontAwesomeIcon icon={faPhone} />
      </StyledLink>
    </StyledHeader>
  );
};

Header.propTypes = {
  isHomePage: PropTypes.bool,
  // siteTitle: PropTypes.string,
};

Header.defaultProps = {
  isHomePage: false,
};

export default Header;
