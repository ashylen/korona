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

const ContactPage = () => (
  <MainTemplate>
    <SEO title="Kontakt" />
    <SectionTitle>Kontakt</SectionTitle>
    <SectionDesc>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam et neque in
      ex bibendum auctor in ut neque. Pellentesque at ex vel justo venenatis
      condimentum a eu libero. Cras consectetur vehicula mattis. Aenean ac
      libero risus. Morbi in quam non purus luctus condimentum. Vestibulum
      molestie, eros vehicula sollicitudin volutpat, magna ante imperdiet urna,
      in tempus nulla ante ac velit. Aliquam suscipit odio vel metus posuere, id
      consectetur ipsum cursus. Morbi vel lacus nec est sollicitudin scelerisque
      at vel neque. Curabitur arcu libero, fermentum sed blandit semper,
      dignissim ac erat. Etiam venenatis nibh nec eros porta, nec auctor tortor
      ultrices. Aliquam vitae porta libero.
    </SectionDesc>
  </MainTemplate>
);

export default ContactPage;
