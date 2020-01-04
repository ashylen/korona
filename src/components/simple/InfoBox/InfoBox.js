import React from 'react';

// Modules
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledH2 = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  margin: 10px auto 15px;
  line-height: 1.2;
`;

const StyledIcon = styled.div`
  text-align: center;
  font-size: 3rem;
  padding-bottom: 10px;
`;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-flow: column;
  align-items: center;
  transition: transform 0.3s;

  &:after {
    content: '';
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    position: absolute;
    width: 30%;
    height: 1px;
    background: #f9e242;
  }

  &:hover {
    transform: translateY(-3px);
  }
`;

const InfoBox = ({ icon, children }) => {
  return (
    <StyledWrapper>
      <StyledIcon>
        <FontAwesomeIcon icon={icon} />
      </StyledIcon>
      <StyledH2>{children}</StyledH2>
    </StyledWrapper>
  );
};

InfoBox.propTypes = {
  children: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default InfoBox;
