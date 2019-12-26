import React from 'react';

// Modules
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

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

const StyledLink = styled.a`
  position: fixed;
  bottom: 5px;
  right: 5px;
  text-decoration: none;
  color: #fff;
  text-align: center;
  padding: 10px;
  font-size: 2rem;
  background-color: #343a40;
  border-radius: 5px;
  box-shadow: 0 0 0 0 rgba(174,178,178,.8);
  animation: ${pulse} 2s infinite;
`;

const StyledHeader = styled.header`
  background-color: #111;
`;

const Header = ({ isHomePage }) => {
  return (
    <StyledHeader>
      <Nav isHomePage={isHomePage}/>
      <StyledLink href="tel:+48570 376 349">+48 570 376 349</StyledLink>
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
