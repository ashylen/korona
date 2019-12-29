import React from 'react';

// Modules
import styled from 'styled-components';
import { Link } from 'gatsby';

// Utils
import { phoneNumber, email } from 'utils/constants';

const StyledFooter = styled.footer`
  background-color: #ffac2a;
  color: #343a40;
`;

// @TODO Make single component for logo
const StyledGatsbyLink = styled(props => <Link {...props} />)`
  display: flex;
  padding: 20px 0;
  font-size: 3rem;
  text-decoration: none;
  color: #fff;
`;

const StyledWrapper = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: auto;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const StyledCopy = styled.div`
  padding: 20px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  position: relative;
  margin-top: 10px;

  @media (max-width: 550px) {
    align-items: flex-start;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(86, 86, 120, 0.1) 0,
      rgba(86, 86, 120, 0.6) 50%,
      rgba(86, 86, 120, 0.1) 100%
    );
  }
`;

const StyledContent = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  font-size: 2rem;
  margin-bottom: 5px;

  @media (max-width: 550px) {
    align-items: flex-start;
  }
`;

const StyledItemHeading = styled.div`
  font-weight: 600;
`;

const StyledItem = styled.div`
  padding: 10px 0;
`;

const StyledLink = styled.a`
  text-decoration: none;
  color: inherit;
  text-align: center;
  padding: 10px 0;
  font-size: 2rem;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledGatsbyLink to="/">KORONA</StyledGatsbyLink>
        <div>
          <StyledContent>
            <StyledItemHeading>Adres</StyledItemHeading>
            <StyledItem>Mickiewicza 7, 37-110 Żołynia</StyledItem>
          </StyledContent>
          <StyledContent>
            <StyledItemHeading>Telefon</StyledItemHeading>
            <StyledLink href={`tel:${phoneNumber}`}>
              +48 {phoneNumber}
            </StyledLink>
          </StyledContent>
          <StyledContent>
            <StyledItemHeading>Email</StyledItemHeading>
            <StyledLink href={`mailto:${email}`}>
              {email}
            </StyledLink>
          </StyledContent>
        </div>

        <StyledCopy>
          <div>Korona - Pomoc Drogowa - Przemysław Pac</div>
          <br/>
          <div>Wykonanie strony: <a href="https://github.com/ashylen" target="_blank" rel="noopener noreferrer">Dominik Urban</a></div>
          <br/>
          <div>©{new Date().getFullYear()}</div>
        </StyledCopy>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
