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
  width: 50%;
`;

const StyledTextSide = styled.article`
  line-height: 1.3;
  font-size: 2.2rem;
  width: 50%;
  padding-right: 20px;
`;

const StyledFormLink = styled(props => <Link {...props} />)`
  display: inline-flex;
  padding: 20px;
  text-decoration: none;
  position: relative;
  color: #ffac2a;
  border: 2px solid #ffac2a;
  cursor: pointer;
  margin: 10px 0;
  transition: transform 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    transform: translateX(5px);
    color: #fff;
    border-color: #fff;
  }
`;

const StyledPhoneLink = styled.a`
  display: inline-flex;
  padding: 20px;
  text-decoration: none;
  position: relative;
  color: #ffac2a;
  border: 2px solid #ffac2a;
  cursor: pointer;
  margin: 10px 0;
  transition: transform 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    transform: translateX(5px);
    color: #fff;
    border-color: #fff;
  }
`;

const PricingPage = () => (
  <MainTemplate>
    <SEO title="Cennik" />
    <SectionTitle>
      Cennik <br />
      <br /> Pomoc Drogowa - Rzeszów - Holowanie 24h
    </SectionTitle>
    <StyledArticleWrapper>
      <StyledSectionWrapper>
        <StyledTextSide>
          <p>
            Ceny usług uzależnione są od kilku głównych czynników między innymi:
            samochodu, rodzaju uszkodzenia, położenia, odległości, możliwości
            wystąpienia nieprzewidzianych sytuacji podczas wciągania samochodu
            na lawetę oraz czasu jaki jest potrzebny na prawidłowe załadowanie i
            zabezpieczenie auta bądź innego towaru. Mając na uwadze powyższe
            czynniki, cenę ustalamy indywidualnie, dostosowując do potrzeb osób
            zamawiających holowanie lub przewóz innych rzeczy.
          </p>
          <StyledPhoneLink href={`tel:${phoneNumber}`}>
            Zadzwoń do nas
          </StyledPhoneLink>
          <div>lub</div>
          <StyledFormLink to="/kontakt/">
            Przejdź do formularza kontaktowego
          </StyledFormLink>
        </StyledTextSide>
        <StyledPriceImage>
          <PriceImage />
        </StyledPriceImage>
      </StyledSectionWrapper>
    </StyledArticleWrapper>
  </MainTemplate>
);

export default PricingPage;
