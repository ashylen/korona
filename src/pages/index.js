import React from 'react';

// Modules
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

// Utils
import { phoneNumber } from 'utils/constants';

// Components
import HomeImage from 'components/simple/Image/Image';
import HomeTemplate from 'templates/HomeTemplate';
import SEO from 'components/seo';
// import Button from 'components/simple/Button/Button';

const slideIn = keyframes`
  0% {
    transform: translateX(-100%) rotate(-31deg);
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
  min-height: calc(100vh - 56px);
  text-align: center;

  @media (max-width: 992px) {
    background: #f9e242;
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
    top: 30%;
    transform: translate(-50%, -30%);
    margin: 20px auto;
  }
`;

const StyledSkew = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);
  transform-origin: 100% 100%;
  transform: rotate(-31deg);
  height: 1000%;
  right: 65%;
  z-index: 1;
  animation: ${slideIn} 1s;

  @media (max-width: 992px) {
    background: rgba(0, 0, 0, 0.7);
    right: -150%;
    height: 2000%;
  }
`;

const StyledSkewSecond = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);
  transform-origin: 100% 100%;
  transform: rotate(-31deg);
  height: 1000%;
  right: 0%;
  z-index: 1;
  animation: ${slideIn} 1s 0.2s;

  @media (max-width: 992px) {
    display: none;
  }
`;

const StyledSkewThird = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.5);
  transform-origin: 100% 100%;
  transform: rotate(-31deg);
  height: 1000%;
  right: -50%;
  z-index: 1;
  animation: ${slideIn} 1s 0.4s;

  @media (max-width: 992px) {
    display: none;
  }
`;

const StyledH1 = styled.h1`
  font-weight: 600;
  font-size: 4rem;
  margin-bottom: 15px;
  line-height: 1.4;

  @media (max-width: 992px) {
    font-size: 3.5rem;
  }
`;

const StyledH2 = styled.h2`
  font-weight: 600;
  font-size: 4rem;
  margin-bottom: 15px;
  line-height: 1.4;

  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
`;

const StyledHomeImage = styled.div`
  @media (max-width: 992px) {
    overflow: hidden;
  }

  & > div {
    min-height: calc(100vh - 56px);
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

const StyledPhoneMain = styled.div`
  text-decoration: none;
  padding: 10px 0;
  margin: 5px 0 15px;
  color: #f9e242;
  font-size: 6vw;

  @media (max-width: 992px) {
    font-size: 10vw;
  }

  & > span {
    margin-left: 5px;
  }
`;

const IndexPage = () => (
  <HomeTemplate>
    <SEO title="Strona główna" />
    <StyledTopWrapper>
      <StyledSkew />
      <StyledSkewSecond />
      <StyledSkewThird />
      <StyledHomeImage>
        <HomeImage />
      </StyledHomeImage>
      <StyledSectionWrapper>
        <StyledH1>
          Pomoc drogowa <br /> Holowanie 24h <br /> Laweta
        </StyledH1>
        <StyledPhoneMain href={`tel:${phoneNumber}`}>
          <FontAwesomeIcon icon={faPhone} /> <span>{phoneNumber}</span>
        </StyledPhoneMain>
        <StyledH2>Miałeś wypadek? ZADZWOŃ!</StyledH2>
        {/* <Button>Kontakt</Button> */}
      </StyledSectionWrapper>
    </StyledTopWrapper>
  </HomeTemplate>
);

export default IndexPage;
