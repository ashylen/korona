import React from 'react';

// Modules
import styled from 'styled-components';

// Components
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/seo';
import SectionTitle from 'components/simple/SectionTitle/SectionTitle';

const SectionDesc = styled.article`
  max-width: 1440px;
  width: 90%;
  margin: 40px auto 20px;
`;

const PricingPage = () => (
  <MainTemplate>
    <SEO title="Cennik" />
    <SectionTitle>Cennik</SectionTitle>
    <SectionDesc>
      Ceny usług uzależnione są od kilku głównych czynników między innymi:
      samochodu, rodzaju uszkodzenia, położenia, odległości, możliwości
      wystąpienia nieprzewidzianych sytuacji podczas wciągania samochodu na
      lawetę oraz czasu jaki jest potrzebny na prawidłowe załadowanie i
      zabezpieczenie auta bądź innego towaru. Mając na uwadze powyższe czynniki,
      cenę ustalamy indywidualnie, dostosowując do potrzeb osób zamawiających
      holowanie lub przewóz innych rzeczy.
    </SectionDesc>
  </MainTemplate>
);

export default PricingPage;
