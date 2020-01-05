import React from 'react';

// Modules
import styled from 'styled-components';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

// Utils
import { phoneNumber } from 'utils/constants';

// Components
import MainTemplate from 'templates/MainTemplate';
import SEO from 'components/seo';
import SectionTitle from 'components/simple/SectionTitle/SectionTitle';
// import Button from 'components/simple/Button/Button';

const PriceImage = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(
        relativePath: {
          eq: "Korona-Pomoc-Drogowa-Auto-Laweta-Rzeszow-Lancut-Zolynia-Lezajsk.png"
        }
      ) {
        childImageSharp {
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data.placeholderImage.childImageSharp.fluid} />;
};

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

const StyledPriceImage = styled.div`
  width: 30%;
  overflow: hidden;
  border-radius: 5px;
`;

const StyledTextSide = styled.article`
  line-height: 1.3;
  font-size: 1.8rem;
  width: 70%;
  padding-right: 20px;

  @media (max-width: 992px) {
    width: auto;
  }
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

const PricingPage = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 992;

  return (
    <MainTemplate>
      <SEO title="Cennik" />
      <SectionTitle>Cennik</SectionTitle>
      <StyledArticleWrapper>
        <StyledSectionWrapper>
          <StyledTextSide>
            <p>
              Ceny usług uzależnione są od kilku głównych czynników między
              innymi: samochodu, rodzaju uszkodzenia, położenia, odległości,
              możliwości wystąpienia nieprzewidzianych sytuacji podczas
              wciągania samochodu na lawetę oraz czasu jaki jest potrzebny na
              prawidłowe załadowanie i zabezpieczenie auta bądź innego towaru.
              Mając na uwadze powyższe czynniki, cenę ustalamy indywidualnie,
              dostosowując do potrzeb osób zamawiających holowanie lub przewóz
              innych rzeczy.
            </p>
            <StyledPhoneLink href={`tel:${phoneNumber}`}>
              <span>Zadzwoń do nas</span>
            </StyledPhoneLink>
            <div>lub</div>
            <StyledFormLink to="/kontakt/">
              <span>Przejdź do formularza kontaktowego</span>
            </StyledFormLink>
          </StyledTextSide>
          {!isMobile && (
            <StyledPriceImage>
              <PriceImage />
            </StyledPriceImage>
          )}
        </StyledSectionWrapper>
      </StyledArticleWrapper>
    </MainTemplate>
  );
};

export default PricingPage;
