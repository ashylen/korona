import React from 'react';

// Modules
import styled from 'styled-components';
import { Link } from 'gatsby';

// Components
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/seo';
import SectionTitle from 'components/simple/SectionTitle/SectionTitle';

const SectionDesc = styled.article`
  max-width: 1440px;
  width: 90%;
  margin: 40px auto 20px;
  line-height: 1.5;
  text-align: center;
`;

const StyledFormLink = styled(props => <Link {...props} />)`
  display: inline-flex;
  padding: 20px;
  text-decoration: none;
  position: relative;
  color: #f9e242;
  border: 2px solid #f9e242;
  cursor: pointer;
  margin: 20px auto;
  transition: transform 0.3s, color 0.3s, border-color 0.3s;
  overflow: hidden;
  font-weight: 600;

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

const NotFoundPage = () => (
  <MainTemplate>
    <SEO title="404: Nie znaleziono strony" />
    <SectionTitle>
      404 <br /> Nie znaleziono strony
    </SectionTitle>
    <SectionDesc>
      <p>Nie znaleziono strony o podanym adresie.</p>
      <StyledFormLink to="/">
        <span>Powrót na stronę główną</span>
      </StyledFormLink>
    </SectionDesc>
  </MainTemplate>
);

export default NotFoundPage;
