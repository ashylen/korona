import React from 'react';

// Modules
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';

// Utils
import { phoneNumber, email } from 'utils/constants';

const StyledFooter = styled.footer`
  background-color: #222;
  color: #fff;
`;

// @TODO Make single component for logo
const StyledGatsbyLink = styled(props => <Link {...props} />)`
  display: flex;
  padding: 20px 0;
  font-size: 3rem;
  text-decoration: none;
  color: #f9e242;
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
  padding: ${({ icon }) => (icon ? '10px' : '10px 0')};
  transition: color 0.3s, transform 0.3s, opacity 0.3s;
  will-change: color;
  font-size: ${({ icon }) => (icon ? '4rem' : '2rem')};

  &:hover {
    opacity: 0.7;
    text-decoration: underline;
    color: ${({ icon }) => (icon ? '#fff' : 'inherit')};
    transform: translateY(-2px);
  }
`;

const StyledContactWrapper = styled.div`
  width: 100%;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <StyledGatsbyLink to="/">LOGO</StyledGatsbyLink>
        <StyledContactWrapper>
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
            <StyledLink href={`mailto:${email}`}>{email}</StyledLink>
          </StyledContent>
          <StyledContent>
            <div>
              <StyledLink icon href="https://goo.gl/maps/ng5NhnWPJ3upiuef8">
                <FontAwesomeIcon icon={faInstagram} />
              </StyledLink>
              <StyledLink
                icon
                href="https://www.facebook.com/Pomoc-Drogowa-Korona-100327174801068/"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </StyledLink>
            </div>
          </StyledContent>
        </StyledContactWrapper>

        <StyledCopy>
          <div>© Korona - Pomoc Drogowa - Przemysław Pac</div>
          <br />
          <div>
            Wykonanie strony:{' '}
            <a
              title="dominik.urban.mail@gmail.com"
              href="mailto:dominik.urban.mail@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dominik Urban
            </a>
          </div>
          <br />
          <div>{new Date().getFullYear()}</div>
        </StyledCopy>
      </StyledWrapper>
    </StyledFooter>
  );
};

export default Footer;
