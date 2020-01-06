import React from 'react';

// Modules
// import styled from 'styled-components';

// Components
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/seo';
import SectionTitle from 'components/simple/SectionTitle/SectionTitle';
import HelpView from 'views/HelpView';
import ContactBannerView from 'views/ContactBannerView';

// const SectionDesc = styled.article`
//   max-width: 1440px;
//   width: 90%;
//   margin: 40px auto 20px;
// `;

const OfferPage = () => (
  <MainTemplate>
    <SEO title="Oferta" />
    <SectionTitle>Oferta</SectionTitle>
    <HelpView />
    <ContactBannerView />
  </MainTemplate>
);

export default OfferPage;
