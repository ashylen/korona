import React from 'react';

// Modules

// Components
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/seo';
import SectionTitle from 'components/simple/SectionTitle/SectionTitle';
import ContactView from 'views/ContactView/ContactView';

const ContactPage = () => (
  <MainTemplate>
    <SEO title="Kontakt" />
    <SectionTitle>Kontakt</SectionTitle>
    <ContactView />
  </MainTemplate>
);

export default ContactPage;
