import React from 'react';

// Modules
import styled, { keyframes } from 'styled-components';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faHistory,
  faCoins,
  faShippingFast,
  faUserTie,
  faHandsHelping,
  faUsers,
  faAngleDoubleDown,
} from '@fortawesome/free-solid-svg-icons';

// Utils
import { phoneNumber } from 'utils/constants';

// Components
import HomeBackgroundImage from 'components/simple/BackgroundImage/BackgroundImage';
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

const blinking = keyframes`
  0% {
    opacity: 0.5;
    transform:translateY(10px);
  }
  50% {
    opacity: 1;
    transform:translateY(0);
  }
  100% {
    opacity: 0.5;
    transform:translateY(10px);
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

const StyledScrollDown = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 2rem;
`;

const StyledIconScrollDown = styled.div`
  animation: ${blinking} 1.5s both infinite;
  font-size: 4rem;
`;

const StyledSectionWrapper = styled.div`
  max-width: 1440px;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  width: 90%;
  margin: auto;
  position: relative;
  z-index: 2;

  @media (min-width: 992px) {
    animation: ${fadeIn} 0.4s 0.6s both;
  }

  @media (max-width: 992px) {
    margin: 10% auto auto;
  }
`;

const StyledSectionInfo = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
  padding: 30px 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledSkew = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.4);
  transform-origin: 100% 100%;
  transform: rotate(-31deg);
  height: 1000%;
  right: 65%;
  z-index: 1;
  animation: ${slideIn} 1s;

  @media (max-width: 992px) {
    background: rgba(0, 0, 0, 0.45);
    right: -150%;
    height: 2000%;
  }
`;

const StyledSkewSecond = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.4);
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

  background: rgba(0, 0, 0, 0.4);
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
  font-size: 7rem;
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

const StyledPhoneMain = styled.a`
  text-decoration: none;
  padding: 10px 0;
  margin: 5px 0 15px;
  color: #f9e242;
  font-size: 6vw;
  display: block;

  @media (max-width: 992px) {
    font-size: 10vw;
  }

  & > span {
    margin-left: 5px;
  }
`;

const StyledBox = styled.div`
  padding: 20px 10px;
  max-width: 370px;

  display: flex;
  align-items: center;
`;

const StyledBoxIcon = styled.div`
  display: flex;
  font-size: 2rem;
  margin-right: 20px;
  min-width: 25px;
  height: 25px;
  color: #f9e242;
`;

const StyledBoxText = styled.div`
  font-size: 2rem;
`;

const StyledBoxTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 10px;
  font-weight: 600;
`;

const StyledBoxDescription = styled.p`
  font-size: 1.6rem;
  line-height: 1.2;
`;

const StyledSectionContact = styled.section`
  background-color: #343a40;
`;

const StyledContactInner = styled.section`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
  text-align: center;

  padding: 30px 0;
`;

const StyledFormLink = styled(props => <Link {...props} />)`
  display: inline-flex;
  padding: 20px;
  text-decoration: none;
  position: relative;
  color: #f9e242;
  border: 2px solid #f9e242;
  cursor: pointer;
  margin: 20px 0;
  transition: transform 0.3s, color 0.3s, border-color 0.3s;
  overflow: hidden;
  font-weight: 600;
  line-height: 1.3;

  & span {
    z-index: 5;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f9e242;
    transform: translateX(-100%);
    transition: transform 0.3s;
  }

  &:hover {
    color: #222;
    border-color: transparent;

    &:after {
      transform: translateX(0);
    }
  }
`;

const IndexPage = () => (
  <HomeTemplate>
    <SEO title="Strona główna" />
    <StyledTopWrapper>
      <HomeBackgroundImage>
        <StyledSkew />
        <StyledSkewSecond />
        <StyledSkewThird />
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
        <StyledScrollDown>
          <StyledIconScrollDown>
            <FontAwesomeIcon icon={faAngleDoubleDown} />
          </StyledIconScrollDown>
        </StyledScrollDown>
      </HomeBackgroundImage>
    </StyledTopWrapper>
    <StyledSectionInfo>
      <StyledBox>
        <StyledBoxIcon>
          <FontAwesomeIcon icon={faHistory} />
        </StyledBoxIcon>
        <StyledBoxText>
          <StyledBoxTitle>Kontakt 24/7</StyledBoxTitle>
          <StyledBoxDescription>
            Wspracie całodobowe o każdej porze dnia i nocy.
          </StyledBoxDescription>
        </StyledBoxText>
      </StyledBox>
      <StyledBox>
        <StyledBoxIcon>
          <FontAwesomeIcon icon={faCoins} />
        </StyledBoxIcon>
        <StyledBoxText>
          <StyledBoxTitle>Konkurencyjne ceny</StyledBoxTitle>
          <StyledBoxDescription>
            Usługi na najwyższym poziomie w konkurencyjnych cenach.
          </StyledBoxDescription>
        </StyledBoxText>
      </StyledBox>
      <StyledBox>
        <StyledBoxIcon>
          <FontAwesomeIcon icon={faShippingFast} />
        </StyledBoxIcon>
        <StyledBoxText>
          <StyledBoxTitle>Nowe samochody</StyledBoxTitle>
          <StyledBoxDescription>
            Dbamy o stan techniczny naszej floty.
          </StyledBoxDescription>
        </StyledBoxText>
      </StyledBox>
      <StyledBox>
        <StyledBoxIcon>
          <FontAwesomeIcon icon={faUserTie} />
        </StyledBoxIcon>
        <StyledBoxText>
          <StyledBoxTitle>Profesjonalna obsługa</StyledBoxTitle>
          <StyledBoxDescription>
            Możesz nam zaufać, zawsze służymy pomocą oraz wsparciem.
          </StyledBoxDescription>
        </StyledBoxText>
      </StyledBox>
      <StyledBox>
        <StyledBoxIcon>
          <FontAwesomeIcon icon={faHandsHelping} />
        </StyledBoxIcon>
        <StyledBoxText>
          <StyledBoxTitle>Zależy nam na Tobie</StyledBoxTitle>
          <StyledBoxDescription>
            Usługi wykonywane są z dbałością o szegóły.
          </StyledBoxDescription>
        </StyledBoxText>
      </StyledBox>
      <StyledBox>
        <StyledBoxIcon>
          <FontAwesomeIcon icon={faUsers} />
        </StyledBoxIcon>
        <StyledBoxText>
          <StyledBoxTitle>Doświadczony zespół</StyledBoxTitle>
          <StyledBoxDescription>
            Nasz zespół służy poradą w każdej kwestii.
          </StyledBoxDescription>
        </StyledBoxText>
      </StyledBox>
    </StyledSectionInfo>
    <StyledSectionContact>
      <StyledContactInner>
        <StyledH2>Potrzebujesz pomocy w innej sprawie?</StyledH2>
        <StyledFormLink to="/kontakt/">
          <span>Przejdź do formularza kontaktowego</span>
        </StyledFormLink>
      </StyledContactInner>
    </StyledSectionContact>
  </HomeTemplate>
);

export default IndexPage;
