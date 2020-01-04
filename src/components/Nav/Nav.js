import React from 'react';

// Modules
import styled from 'styled-components';
// import cx from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF } from '@fortawesome/free-brands-svg-icons';

// Utils
// import { phoneNumber } from 'utils/constants';

const StyledWrapper = styled.nav`
  background-color: ${({ isHomePage }) => (isHomePage ? '#222' : '#222')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 5px 16px -8px rgba(6, 8, 8, 0.38);
  z-index: 100;

  color: #fff;
`;

const StyledInner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: auto;

  display: flex;
  justify-content: space-between;
`;

const StyledLogoLink = styled(props => <Link {...props} />)`
  display: flex;
  padding: 20px 0;
  margin: 0 8px 0 0;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
  color: #fff;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: transparent;
    bottom: 0;
    left: 0;
    transition: background-color 0.3s;
  }

  &:hover,
  &.active {
    color: #f9e242;

    &:after {
      background: #f9e242;
    }
  }
`;

const StyledLink = styled(props => <Link {...props} />)`
  display: flex;
  padding: 20px 40px;
  margin: 0 8px;
  text-decoration: none;
  position: relative;
  transition: color 0.3s;
  color: #fff;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: transparent;
    bottom: 0;
    left: 0;
    transition: background-color 0.3s;
  }

  &:hover,
  &.active {
    color: #f9e242;

    &:after {
      background: #f9e242;
    }
  }

  @media (max-width: 992px) {
    padding: 20px 0;
  }
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

// const StyledPhoneLink = styled.a`
//   display: inline-flex;
//   color: #f9e242;
//   cursor: pointer;
// `;

// const StyledSeparator = styled.div`
//   background-color: #f9e242;
//   height: 2px;
//   margin: 0;
// `;

// const StyledUpper = styled.div`
//   max-width: 1440px;
//   width: 90%;
//   margin: auto;
//   padding: 10px 0;
//   font-size: 1.2rem;
//   line-height: 1.3;

//   text-align: center;
// `;

// const StyledFacebookLink = styled.a`
//   color: #fff;
//   font-size: 1.5rem;
//   text-decoration: none;
//   padding: 5px;
//   margin-right: 10px;
// `;

const Nav = ({ isHomePage }) => {
  return (
    <StyledWrapper isHomePage={isHomePage}>
      {/* <StyledUpper>
        <StyledFacebookLink href="https://www.facebook.com/Pomoc-Drogowa-Korona-100327174801068/">
          <FontAwesomeIcon icon={faFacebookF} />
        </StyledFacebookLink>
        <span>
          Potrzebujesz pomocy? Zadzwoń do nas 24/7 -{' '}
          <StyledPhoneLink href={`tel:${phoneNumber}`}>
            {phoneNumber}
          </StyledPhoneLink>
        </span>
      </StyledUpper> */}
      {/* <StyledSeparator /> */}
      <StyledInner>
        <StyledLogo>
          <StyledLogoLink to="/">Logo</StyledLogoLink>
        </StyledLogo>
        <StyledPages>
          <StyledLink activeClassName="active" to="/kontakt/">
            Kontakt
          </StyledLink>
          <StyledLink activeClassName="active" to="/oferta/">
            Oferta
          </StyledLink>
          <StyledLink activeClassName="active" to="/cennik/">
            Cennik
          </StyledLink>
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
