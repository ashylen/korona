import React from 'react';

// Modules
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

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
    padding: 25px 0;
  }
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
  font-size: 1.1rem;
  padding: 5px 10px;
`;

const StyledInputWrapper = styled.div`
  min-width: 250px;
  max-width: 400px;

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

// const handleSubmit = (values, { setSubmitting }) => {
const handleSubmit = (values, { resetForm }) => {
  const formData = new FormData();
  formData.append('service_id', 'gmail');
  formData.append('template_id', 'template_uNovYqTW');
  formData.append('user_id', 'user_Dkbtihfauz6skjHuzH6iS');
  const messageHtml = `Email: ${values.email} <br/>Imię: ${
    values.name
  }<br/>Telefon: ${values.phone}<br/>Pojazd: ${values.vehicleType}<br/>Treść: ${
    values.content
  }<br/>Oświadczenie zaznaczone: ${values.agreement ? 'TAK' : 'NIE'}`;

  formData.append('message_html', messageHtml);

  axios
    .post('https://api.emailjs.com/api/v1.0/email/send-form', formData, {
      headers: {
        'content-type': 'multipart/form-data',
      },
    })
    .then(() => {
      resetForm();
      alert('Wysłano!');
    })
    .catch(() => {
      alert(`Oops...Wystąpił problem! Spróbuj wysłać formularz jeszcze raz.`);
    });

  // emailjs
  //   .send(
  //     'gmail',
  //     'template_uNovYqTW',
  //     templateParams,
  //     'user_Dkbtihfauz6skjHuzH6iS'
  //   )
  //   .then(
  //     response => {
  //       console.log('SUCCESS!', response.status, response.text);
  //     },
  //     err => {
  //       console.log('FAILED...', err);
  //     }
  //   );
};

const StyledInput = styled(Field)`
  padding: 10px;
  margin: 12px 0 0;
  width: 100%;
  border: 1px solid #d1d1d1;
  font-family: 'Montserrat', sans-serif;
`;

const StyledTextarea = styled.textarea`
  padding: 10px;
  margin: 12px 0 0;
  width: 100%;
  border: 1px solid #d1d1d1;
  font-family: 'Montserrat', sans-serif;
`;

const StyledCheckbox = styled(Field)`
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

const StyledGatsbyLink = styled.a`
  color: #f9e242;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.6;
  }
`;

const ContactView = () => (
  <StyledSectionInfo>
    <StyledFormWrapper>
      <StyledFormInner>
        <Formik
          initialValues={{
            email: '',
            name: '',
            phone: '',
            vehicleType: '',
            content: '',
            agreement: false,
          }}
          validate={values => {
            console.log(values);
            const errors = {};
            if (!values.email) {
              errors.email = 'To pole jest wymagane';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Niepoprawny adres e-mail';
            }

            if (!values.name) {
              errors.name = 'To pole jest wymagane';
            }

            if (!values.vehicleType) {
              errors.vehicleType = 'To pole jest wymagane';
            }

            if (!values.agreement) {
              errors.agreement = 'To pole musi być zaznaczone';
            }

            // if (!values.content) {
            //   errors.content = 'Wymagane';
            // }

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
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <StyledInput
                    type="vehicleType"
                    name="vehicleType"
                    placeholder="Pojazd"
                  />
                  <ErrorMessage name="vehicleType" component={StyledError} />
                </StyledInputWrapper>

                <StyledInputWrapper>
                  <br />
                  <p>
                    Poniżej wprowadź treść swojego zapytania. <br /> Pamiętaj,
                    aby dokładnie określić trasę oraz co będzie przewożone.
                    Ułatwi to wycenę usługi.
                  </p>
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <Field
                    as={StyledTextarea}
                    rows="5"
                    name="content"
                    placeholder="Wprowadź treść zapytania..."
                  />
                  <ErrorMessage name="text" component={StyledError} />
                </StyledInputWrapper>
                <br />
                <StyledInputWrapper>
                  <StyledCheckbox
                    id="agreement"
                    type="checkbox"
                    name="agreement"
                  />
                  <label htmlFor="agreement">
                    Oświadczam, że zapoznałem się i akceptuję treść{' '}
                    <StyledGatsbyLink
                      target="_blank"
                      rel="noopener norefferer"
                      href="/regulamin-serwisu/"
                    >
                      Regulaminu Serwisu
                    </StyledGatsbyLink>{' '}
                    oraz{' '}
                    <StyledGatsbyLink
                      target="_blank"
                      rel="noopener norefferer"
                      href="/polityka-prywatnosci/"
                    >
                      Polityki Ochrony Prywatności
                    </StyledGatsbyLink>
                    .
                  </label>
                  <ErrorMessage name="agreement" component={StyledError} />
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
