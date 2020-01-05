import React from 'react';

// Modules
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import GoogleMapReact from 'google-map-react';

// Components

const StyledSectionInfo = styled.div`
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

const StyledFormWrapper = styled.div`
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

const StyledFormInner = styled.div`
  width: 50%;
  padding: 25px;
  min-height: 500px;
  margin-left: auto;
  display: flex;
  align-items: center;

  background-color: #222;

  @media (max-width: 992px) {
    width: 100%;
    padding: 25px 10px;
  }
`;

// const handleSubmit = (values, { setSubmitting }) => {
const handleSubmit = () => {};

const StyledInput = styled(Field)`
  padding: 10px;
  margin: 12px 0 0;
  width: 100%;
  border: 1px solid #d1d1d1;
  font-family: 'Montserrat', sans-serif;
`;

const StyledMapWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: auto;
  width: 50%;
  height: 100%;

  @media (max-width: 992px) {
    position: relative;
    width: 100%;
    height: 300px;
  }
`;

const StyledLegend = styled.legend`
  color: #f9e242;
  font-size: 2.5rem;
  margin-bottom: 10px;
  font-weight: 600;
`;

const StyledError = styled.div`
  background-color: #dc3545;
  color: #fff;
  padding: 10px;
`;

const StyledInputWrapper = styled.div`
  min-width: 250px;
  max-width: 400px;
  @media (max-width: 992px) {
    max-width: unset;
  }
`;

const renderMarkers = (map, maps) => {
  const marker = new maps.Marker({
    position: { lat: 50.160065, lng: 22.298928 },
    map,
    title: 'Korona - Pomoc Drogowa - Przemysław Pac',
  });

  return marker;
};

const StyledSubmitButton = styled.button`
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
    color: #222;
    border-color: transparent;

    &:after {
      transform: translateX(0);
    }
  }
`;

const ContactView = () => (
  <StyledSectionInfo>
    <StyledFormWrapper>
      <StyledFormInner>
        <Formik
          initialValues={{ email: '' }}
          validate={values => {
            const errors = {};
            if (!values.email) {
              errors.email = 'Wymagane';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Niepoprawny adres e-mail';
            }

            if (!values.name) {
              errors.name = 'Wymagane';
            }

            if (!values.phone) {
              errors.phone = 'Wymagane';
            }
            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <fieldset>
                <StyledLegend>Skontaktuj się z nami!</StyledLegend>
                <p>Zgłoś się do nas poprzez poniższy formularz, oddzwonimy.</p>

                <br />
                <StyledInputWrapper>
                  <StyledInput type="name" name="name" placeholder="Imię" />
                  <ErrorMessage name="name" component={StyledError} />
                </StyledInputWrapper>

                <StyledInputWrapper>
                  <StyledInput
                    type="email"
                    name="email"
                    placeholder="Adres E-mail"
                  />

                  <ErrorMessage name="email" component={StyledError} />
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <StyledInput
                    type="phone"
                    name="phone"
                    placeholder="Numer telefonu"
                  />
                  <ErrorMessage name="phone" component={StyledError} />
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <StyledInput
                    as="select"
                    name="vehicleType"
                    placeholder="Co trzeba przewieźć?"
                  >
                    <option value="">-- Co trzeba przewieźć? --</option>
                    <option value="car">Samochód</option>
                    <option value="moto">Motocykl</option>
                    <option value="tractor">Traktor</option>
                  </StyledInput>
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <StyledInput type="from" name="from" placeholder="Skąd?" />
                  <ErrorMessage name="from" component={StyledError} />
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <StyledInput type="to" name="to" placeholder="Dokąd?" />
                  <ErrorMessage name="to" component={StyledError} />
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <StyledInput
                    as="textarea"
                    type="textarea"
                    rows="5"
                    name="text"
                    placeholder="Wprowadź treść wiadomości..."
                  />
                  <ErrorMessage name="text" component={StyledError} />
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <label>
                    <Field
                      type="checkbox"
                      name="agreement"
                      placeholder="Numer telefonu"
                    />
                    Oświadczam, że zapoznałem się i akceptuję treść Regulaminu
                    Serwisu oraz Polityki Ochrony Prywatności.
                  </label>
                </StyledInputWrapper>

                <StyledSubmitButton type="submit" disabled={isSubmitting}>
                  <span>WYŚLIJ</span>
                </StyledSubmitButton>
              </fieldset>
            </Form>
          )}
        </Formik>
      </StyledFormInner>
    </StyledFormWrapper>
    <StyledMapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyC4TPqQPvhA03ii7oYtBNltsc7JQI8urrg' }}
        defaultCenter={{ lat: 50.160065, lng: 22.298928 }}
        defaultZoom={11}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      />
    </StyledMapWrapper>
  </StyledSectionInfo>
);

export default ContactView;
