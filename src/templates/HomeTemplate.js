import React from 'react';

// Modules
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

// Utils

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import SEO from 'components/seo';

const StyledWrapper = styled.div`
  margin-top: 56px;
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
