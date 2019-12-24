import React from 'react';

// Modules
import styled from 'styled-components';

// Utils
import HomeImage from 'components/simple/Image/Image';

// Components
import HomeTemplate from 'templates/HomeTemplate';
import SEO from 'components/seo';
import SectionTitle from 'components/SectionTitle/SectionTitle';

const IndexPage = () => (
  <HomeTemplate>
    <HomeImage />
    <SEO title="Home" />
    <SectionTitle>Ixndex</SectionTitle>
  </HomeTemplate>
);

export default IndexPage;
