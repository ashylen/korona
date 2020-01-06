import React from 'react';

import { Link } from 'gatsby';
import styled from 'styled-components';

// Components

const StyledH2 = styled.h2`
  font-weight: 600;
  font-size: 4rem;
  margin-bottom: 15px;
  line-height: 1.4;

  @media (max-width: 992px) {
    font-size: 2.5rem;
  }
`;

const StyledSectionContact = styled.section`
  background-color: #343a40;
`;

const StyledContactInner = styled.section`
  max-width: 1440px;
  width: 90%;
  margin: 0 auto;
  text-align: center;

  padding: 30px 0;
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
  line-height: 1.3;

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

const ContactView = () => (
  <StyledSectionContact>
    <StyledContactInner>
      <StyledH2>Potrzebujesz pomocy w innej sprawie?</StyledH2>
      <StyledFormLink to="/kontakt/">
        <span>Przejdź do formularza kontaktowego</span>
      </StyledFormLink>
    </StyledContactInner>
  </StyledSectionContact>
);

export default ContactView;
