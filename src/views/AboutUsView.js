import React from 'react';

import styled from 'styled-components';

// Components

const StyledH2 = styled.h2`
  font-weight: 600;
  font-size: 4rem;
  margin-bottom: 15px;
  line-height: 1.4;
  text-align: center;

  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
`;

const StyledSectionContact = styled.section`
  background-color: #343a40;
`;
const StyledParagraph = styled.p`
  line-height: 1.4;
  font-size: 1.6rem;
  margin-bottom: 15px;

  span {
    font-weight: bold;
  }

  white-space: pre-line;
`;

const StyledInner = styled.section`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;

  padding: 30px 0;
`;

const AboutUsView = () => (
  <StyledSectionContact>
    <StyledInner>
      <StyledH2>O NAS</StyledH2>
      <StyledParagraph>
        <span>Pomoc drogowa KORONA</span> świadczy szeroki zakres usług od
        pomocy drogowej, poprzez dowóz paliwa, spuszczanie źle zatankowanego
        paliwa, awaryjne odpalanie auta, awaryjne otwieranie pojazdów, transport
        małych maszyn budowlanych a skończywszy na wynajmie lawety wraz z
        kierowcą.
      </StyledParagraph>
      <StyledParagraph>
        Usługi holowania wykonujemy 24h na dobę! Pracujemy 365 dni w roku!
        Również w święta jesteśmy do Państwa dyspozycji! Nasza pomoc drogowa
        zaradzi na Wasze motoryzacyjne problemy szybko i sprawnie w tej często
        niekomfortowej i stresującej sytuacji, związanej z kolizją lub awarią
        samochodu. Dzięki specjalistycznemu sprzętowi i wykwalifikowanemu
        personelowi zapewnimy Państwu bezpieczny transport pojazdu. A dzięki
        posiadaniu własnego parkingu strzeżonego umożliwimy przechowanie
        zholowanego auta.
      </StyledParagraph>
    </StyledInner>
  </StyledSectionContact>
);

export default AboutUsView;
