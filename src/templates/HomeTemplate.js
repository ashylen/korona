import React from 'react';

// Modules
import PropTypes from 'prop-types';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { Reset } from 'styled-reset';

// Utils

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SEO from 'components/seo';

const StyledWrapper = styled.div`
  margin-top: 50px;
`;

const loading = keyframes`
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: visible;
    pointer-events: none;
  }
`;

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    font-size: 1.6rem;
    margin: 0;
    padding:0;
    color: #fff;
    background-color: #222;

    &:after{
      content: '';
      top: 0;
      left:0;
      bottom:0;
      right:0;
      background-color: #222;
      animation: ${loading} 1s both;
      z-index: 1000;
      position: fixed;
    }
  }

  *, *:after, *:before{
    box-sizing: border-box;
  }
`;

const MainTemplate = ({ children, isHomePage }) => {
  return (
    <StyledWrapper>
      <SEO />
      <Reset />
      <GlobalStyle />
      <Header isHomePage={isHomePage} />
      <main>{children}</main>
      <Footer />
    </StyledWrapper>
  );
};

MainTemplate.defaultProps = {
  isHomePage: false,
};

MainTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  isHomePage: PropTypes.bool,
};

export default MainTemplate;
