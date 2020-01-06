import React from 'react';

// Modules
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { Reset } from 'styled-reset';

// Utils

// Components
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

const StyledWrapper = styled.div`
  margin-top: 54px;
  display: flex;
  flex-flow: column;
  min-height: calc(100vh - 56px);
`;

const StyledMain = styled.main`
  flex-grow: 1;
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
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color:#343a40;
    color: #fff;

  }

  *, *:after, *:before{
    box-sizing: border-box;
  }
`;

const MainTemplate = ({ children, isHomePage }) => {
  return (
    <StyledWrapper>
      <Reset />
      <GlobalStyle />
      <Header isHomePage={isHomePage} />
      <StyledMain>{children}</StyledMain>
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
