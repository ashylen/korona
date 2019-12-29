import React from 'react';

import styled from 'styled-components';

// Modules
// import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const StyledWrapper = styled.nav`
  background-color: ${({ isHomePage }) =>
    isHomePage ? '#343a40' : '#343a40'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 5px 16px rgba(6, 8, 8, 0.38);
  z-index: 100;
`;

const StyledInner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: auto;

  display: flex;
  justify-content: space-between;
`;

const StyledLink = styled(props => <Link {...props} />)`
  display: flex;
  padding: 20px 8px;
  text-decoration: none;
  color: #fff;
`;

const StyledLogo = styled.div`
  display: flex;

  a {
    padding: 20px 0;
  }
`;

const StyledPages = styled.div`
  display: flex;
  text-decoration: none;
  color: #fff;
`;

const Nav = ({ isHomePage }) => {
  return (
    <StyledWrapper isHomePage={isHomePage}>
      <StyledInner>
        <StyledLogo>
          <StyledLink to="/">KORONA</StyledLink>
        </StyledLogo>
        <StyledPages>
          <StyledLink to="/kontakt/">Kontakt</StyledLink>
          <StyledLink to="/oferta/">Oferta</StyledLink>
          <StyledLink to="/cennik/">Cennik</StyledLink>
        </StyledPages>
      </StyledInner>
    </StyledWrapper>
  );
};

Nav.propTypes = {
  isHomePage: PropTypes.bool,
};

Nav.defaultProps = {
  isHomePage: false,
};

export default Nav;
