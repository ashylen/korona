import React from 'react';

// Modules
import styled from 'styled-components';
// import cx from 'classnames';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

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
  align-items: center;
`;

const StyledLogoLink = styled(props => <Link {...props} />)`
  display: flex;
  padding: 0;
  margin: 0;
  text-decoration: none;
  position: relative;

  & img {
    border-radius: 50%;
  }
`;

const StyledLink = styled(props => <Link {...props} />)`
  display: flex;
  padding: 20px 0;
  margin: 0 15px;
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
    font-size: 1.3rem;
    margin: 0 8px;
  }
`;

const StyledLogo = styled.div`
  display: flex;
`;

const StyledPages = styled.div`
  display: flex;
  text-decoration: none;
  color: #fff;

  & > a:first-of-type {
    padding: 20px;

    @media (max-width: 992px) {
      padding: 20px 0;
    }
  }
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

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.jpg" }) {
        childImageSharp {
          fixed(width: 40, height: 40) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return <Img fixed={data.placeholderImage.childImageSharp.fixed} />;
};

const Nav = ({ isHomePage }) => {
  return (
    <StyledWrapper isHomePage={isHomePage}>
      {/* <StyledUpper>
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
          <StyledLogoLink>
            <Logo alt="logo" />
          </StyledLogoLink>
        </StyledLogo>
        <StyledPages>
          <StyledLink activeClassName="active" to="/" alt="Strona główna">
            <FontAwesomeIcon icon={faHome} />
          </StyledLink>
          <StyledLink activeClassName="active" to="/kontakt/" alt="Kontakt">
            Kontakt
          </StyledLink>
          <StyledLink activeClassName="active" to="/oferta/" alt="Oferta">
            Oferta
          </StyledLink>
          <StyledLink activeClassName="active" to="/cennik/" alt="Cennik">
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
