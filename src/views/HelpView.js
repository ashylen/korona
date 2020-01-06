import React from 'react';

// Modules
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  faCarCrash,
  faSnowplow,
  faShuttleVan,
  faUserPlus,
  faGasPump,
  faWrench,
  faRedo,
  faLockOpen,
  faToolbox,
  faChargingStation,
  faAmbulance,
  faGlobeEurope,
  faParking,
} from '@fortawesome/free-solid-svg-icons';

// Components
import InfoBox from 'components/simple/InfoBox/InfoBox';

const StyledSectionInfo = styled.div`
  color: #fff;
  background-color: #343a40;
  padding: 25px 0 35px;
`;

const StyledSectionInfoInner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 35px 25px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

const StyledH1 = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;
  padding: 20px 0;
  max-width: 1440px;
  width: 90%;
  margin: auto;
  margin-bottom: 20px;
`;

const StyledHeaderWrapper = styled.div`
  text-align: center;
`;

const HelpView = ({ title }) => (
  <StyledSectionInfo>
    <StyledHeaderWrapper>
      {title && <StyledH1>{title}</StyledH1>}
    </StyledHeaderWrapper>
    <StyledSectionInfoInner>
      <InfoBox icon={faShuttleVan}>Pomoc Drogowa samochodem 7-osobowym</InfoBox>
      <InfoBox icon={faCarCrash}>Holowanie pojazdów osobowych</InfoBox>
      <InfoBox icon={faAmbulance}>
        Wyciąganie z rowów, lasów, pól, błota, zasp śnieżnych
      </InfoBox>
      <InfoBox icon={faUserPlus}>
        Oferujemy wynajem lawety wraz z kierowcą
      </InfoBox>
      <InfoBox icon={faGasPump}>Dowóz paliwa we wskazane miejsce</InfoBox>
      <InfoBox icon={faWrench}>Wymiana koła na drodze</InfoBox>
      <InfoBox icon={faRedo}>Spuszczanie źle zatankowanego paliwa</InfoBox>
      <InfoBox icon={faLockOpen}>Awaryjne otwieranie pojazdów</InfoBox>
      <InfoBox icon={faParking}>Parking strzeżony 24/7</InfoBox>
      <InfoBox icon={faGlobeEurope}>
        Transport międzynarodowy (sprowadzanie samochodów z zagranicy)
      </InfoBox>

      <InfoBox icon={faChargingStation}>
        Podanie prądu (awaryjne odpalanie z kabli) 12v oraz 24v
      </InfoBox>

      <InfoBox icon={faToolbox}>
        Dowiezienie koła, części zamiennych, do samochodu ciężarowego, maszyn
        budowlanych, maszyn rolniczych, itp.
      </InfoBox>
      <InfoBox icon={faSnowplow}>
        Transport maszyn budowlanych, skuterów, quadów, wózków widłowych,
        konstrukcji oraz towarów
      </InfoBox>
    </StyledSectionInfoInner>
  </StyledSectionInfo>
);

HelpView.defaultProps = {
  title: '',
};

HelpView.propTypes = {
  title: PropTypes.string,
};

export default HelpView;
