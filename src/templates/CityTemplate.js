import React from 'react';

// Modules
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// Utils
import { phoneNumber } from 'utils/constants';

// Components
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/seo';
import SectionTitle from 'components/simple/SectionTitle/SectionTitle';

const StyledArticleWrapper = styled.article`
  max-width: 1440px;
  width: 90%;
  margin: 40px auto 20px;
`;

const StyledSectionWrapper = styled.section`
  display: flex;

  @media (max-width: 992px) {
    flex-wrap: wrap;
  }
`;

const StyledTextSide = styled.article`
  line-height: 1.3;
  font-size: 1.8rem;
  text-align: center;
  margin: auto;
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

const StyledPhoneLink = styled.a`
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

const CityPageTemplate = ({ pageContext }) => {
  return (
    <MainTemplate>
      <SEO title={`Pomoc drogowa w ${pageContext.city}`} />
      <SectionTitle>
        Pomoc drogowa w lokalizacji: {pageContext.city} i okolice
      </SectionTitle>
      <StyledArticleWrapper>
        <StyledSectionWrapper>
          <StyledTextSide>
            <p>
              Pomagamy na drodze nawet w lokalizacji: {pageContext.city} i
              okolice. Priorytetem jest dla nas niesienie pomocy tam gdzie jej
              potrzebują dlatego jeśli tylko pojawi się na Twojej drodze jakiś
              problem bądź potrzeba to staniemy temu wyzwaniu naprzeciw.
            </p>
            <StyledPhoneLink href={`tel:${phoneNumber}`}>
              <span>Zadzwoń do nas</span>
            </StyledPhoneLink>
            <div>lub</div>
            <StyledFormLink to="/kontakt/">
              <span>Przejdź do formularza kontaktowego</span>
            </StyledFormLink>
          </StyledTextSide>
        </StyledSectionWrapper>
      </StyledArticleWrapper>
    </MainTemplate>
  );
};

CityPageTemplate.propTypes = {
  pageContext: PropTypes.objectOf(PropTypes.string.isRequired).isRequired,
};

export default CityPageTemplate;
