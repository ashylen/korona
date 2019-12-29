import React from 'react';

// Modules
import styled, { keyframes } from 'styled-components';

// Utils
import HomeImage from 'components/simple/Image/Image';

// Components
import HomeTemplate from 'templates/HomeTemplate';
import SEO from 'components/seo';
import HelpView from 'views/HelpView';

const slideIn = keyframes`
  0% {
    transform: translateX(600%) rotate(-31deg);
  }

  100% {
    transform: translateX(0) rotate(-31deg);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const StyledTopWrapper = styled.div`
  position: relative;
  overflow: hidden;
  background: rgba(255, 169, 34, 0.85);
  color: #fff;


  @media (max-width: 992px) {
    background: #ffac2a;
  }
`;

const StyledSectionWrapper = styled.div`
  max-width: 1440px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  margin: auto;
  position: absolute;
  z-index: 2;

  @media (min-width: 992px) {
    animation: ${fadeIn} 0.4s 0.6s both;
  }

  @media (max-width: 992px) {
  margin:20px auto;
  }
`;

const StyledSkew = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  background: rgba(255, 169, 34, 0.85);
  transform-origin: 100% 100%;
  transform: rotate(-31deg);
  height: 200%;
  right: 40%;
  z-index: 1;
    animation: ${slideIn} 1s;


  @media (max-width: 992px) {
    background: rgba(255, 169, 34, 0.7);
    right: -90%;
    height: 2000%;
  }
`;

const StyledH1 = styled.h1`
  font-weight: 600;
  font-size: 4rem;
  margin-bottom: 15px;

  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
`;

const StyledDesc = styled.p`
  font-size: 2rem;
  max-width: 320px;
  line-height: 1.3;

  @media (max-width: 992px) {
    max-width: unset;
    font-size: 1.8rem;
  }
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: 2px solid #fff;
  padding: 10px 20px;
  font-family: inherit;
  color: inherit;
  font-size: 2rem;
  margin: 20px 0 0;
  cursor: pointer;
`;

const StyledHomeImage = styled.div`
  @media (max-width: 992px) {
    overflow: hidden;
  }

  & > div {
    min-height: 500px;
  }

  & > div:after {
    content: '';
    position: absolute;
    top: 0%;
    left: 0%;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const IndexPage = () => (
  <HomeTemplate>
    <SEO title="Home" />
    <StyledTopWrapper>
      <StyledSkew />
      <StyledHomeImage>
        <HomeImage />
      </StyledHomeImage>
      <StyledSectionWrapper>
        <StyledH1>KORONA</StyledH1>
        <StyledH1>Pomoc Drogowa</StyledH1>
        <StyledDesc>
          Jesteśmy firmą zajmującą się transportem aut na terenie całej Polski
          oraz UE. Dysponujemy profesjonalnym sprzętem oraz wykwalifikowaną
          kadrą kierowców. Mamy 10 lat doświadczeń w zakresie transportu -
          holowania aut z trasy czy to po kolizji czy z awarią, zakupów
          zleconych wraz z oględzinami aut.
        </StyledDesc>
        <StyledButton>Kontakt</StyledButton>
      </StyledSectionWrapper>
    </StyledTopWrapper>
    <HelpView />
  </HomeTemplate>
);

export default IndexPage;
