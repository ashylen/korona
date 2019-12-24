import React from 'react';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import Nav from '../Nav/Nav';

const StyledLink = styled.a`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  text-decoration: none;
  color: #fff;
  text-align:center;
  padding: 10px;
  font-size: 30px;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Header = ({ isHomePage, siteTitle }) => {
  return (
    <header>
      <Nav />
      <StyledLink href="tel:+48570 376 349">+48 570 376 349</StyledLink>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
