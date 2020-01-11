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
  line-height: 1.5;
  margin: 40px auto 20px;
`;

const InfoPage = () => (
  <MainTemplate>
    <SEO title="Regulamin serwisu" />
    <SectionTitle>Regulamin serwisu</SectionTitle>
    <SectionDesc>Regulamin serwisu.</SectionDesc>
  </MainTemplate>
);

export default InfoPage;
