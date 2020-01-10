import styled from 'styled-components';
import { Field } from 'formik';

export const StyledSectionInfo = styled.div`
  color: #fff;
  background-color: #222;

  margin: 45px 0 0;
  position: relative;

  display: flex;
  align-items: center;

  @media (max-width: 992px) {
    flex-flow: column;
  }
`;

export const StyledFormWrapper = styled.div`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 20px;
  z-index: 5;
  position: relative;
  height: 100%;

  @media (max-width: 992px) {
    padding: 0;
  }
`;

export const StyledFormInner = styled.div`
  width: 50%;
  padding: 25px;
  min-height: 500px;
  margin-left: auto;
  display: flex;
  align-items: center;

  background-color: #222;

  @media (max-width: 992px) {
    width: 100%;
    padding: 25px 0;
  }
`;

export const StyledMapWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: auto;
  width: 50%;
  height: 100%;
  z-index: 6;

  @media (max-width: 992px) {
    position: relative;
    width: 100%;
    height: 300px;
  }
`;

export const StyledLegend = styled.legend`
  color: #f9e242;
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 600;
`;

export const StyledError = styled.div`
  background-color: #dc3545;
  color: #fff;
  font-size: 1.1rem;
  padding: 5px 10px;
`;

export const StyledInputWrapper = styled.div`
  min-width: 250px;
  max-width: 400px;
  display: flex;
  flex-flow: column;

  & > p {
    font-size: 1.4rem;
    background: #545454;
    border-radius: 5px;
    padding: 10px;
    line-height: 1.2;
  }

  & > label {
    font-size: 1.3rem;
    line-height: 1.5;
  }

  @media (max-width: 992px) {
    max-width: unset;
  }
`;

export const StyledSubmitButton = styled.button`
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
  min-width: 250px;
  font-size: 2rem;
  display: flex;
  justify-content: center;

  background: none;
  font-family: 'Montserrat', sans-serif;

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
    ${({ isSubmitting }) =>
      !isSubmitting && 'color: #222;border-color: transparent;'}

    &:after {
      ${({ isSubmitting }) => isSubmitting && 'display:none;'}
      transform: translateX(0);
    }
  }
`;

export const StyledInput = styled(Field)`
  padding: 10px;
  margin: 12px 0 0;
  width: 100%;
  border: 1px solid #d1d1d1;
  font-family: 'Montserrat', sans-serif;
`;

export const StyledTextarea = styled.textarea`
  padding: 10px;
  margin: 12px 0 0;
  width: 100%;
  border: 1px solid #d1d1d1;
  font-family: 'Montserrat', sans-serif;
`;

export const StyledCheckbox = styled(Field)`
  position: absolute;
  opacity: 0;

  & + label {
    position: relative;
    cursor: pointer;
    padding: 0;
  }

  & + label:before {
    content: '';
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    width: 20px;
    height: 20px;
    border: 2px solid #f9e242;
  }

  &:focus + label:before {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.12);
  }

  &:checked + label:before {
    background: #f9e242;
  }

  &:disabled + label {
    color: #b8b8b8;
    cursor: auto;
  }

  &:disabled + label:before {
    box-shadow: none;
    background: #ddd;
  }
`;

export const StyledGatsbyLink = styled.a`
  color: #f9e242;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.6;
  }
`;

export const StyledFieldset = styled.fieldset`
  opacity: ${({ isSubmitting }) => (isSubmitting ? '0.35' : '1')};
`;
