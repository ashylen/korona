import React from 'react';

// Modules
import { Formik, Form, Field, ErrorMessage } from 'formik';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

// Components
import {
  StyledSectionInfo,
  StyledFormWrapper,
  StyledFormInner,
  StyledMapWrapper,
  StyledLegend,
  StyledError,
  StyledInputWrapper,
  StyledSubmitButton,
  StyledInput,
  StyledTextarea,
  StyledCheckbox,
  StyledGatsbyLink,
  StyledFieldset,
} from './styles';

const renderMarkers = (map, maps) => {
  const marker = new maps.Marker({
    position: { lat: 50.160065, lng: 22.298928 },
    map,
    // icon: icons[features[i].type].icon,
    title: 'Korona - Pomoc Drogowa - Przemysław Pac',
  });

  return marker;
};

const handleSubmit = (values, { resetForm, setSubmitting }) => {
  setSubmitting(true);
  const formData = new FormData();
  formData.append('service_id', 'gmail');
  formData.append('template_id', 'template_VHE8b0Ru');
  formData.append('user_id', 'user_4NvtMlo9dw816sW5SfxOV');
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
      alert('Formularz został wysłany!');
      setSubmitting(false);
    })
    .catch(() => {
      alert(`Oops...Wystąpił problem! Spróbuj wysłać formularz jeszcze raz.`);
      setSubmitting(false);
    });
};

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

            if (!values.content) {
              errors.content = 'To pole jest wymagane';
            }

            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <StyledFieldset isSubmitting={isSubmitting}>
                <StyledLegend>Skontaktuj się z nami!</StyledLegend>
                <p>Zgłoś się do nas poprzez poniższy formularz, oddzwonimy.</p>

                <br />
                <StyledInputWrapper>
                  <StyledInput type="text" name="name" placeholder="Imię" />
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
                    type="number"
                    name="phone"
                    placeholder="Numer telefonu"
                  />
                </StyledInputWrapper>
                <StyledInputWrapper>
                  <StyledInput
                    type="text"
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
                  <ErrorMessage name="content" component={StyledError} />
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

                <StyledSubmitButton
                  type="submit"
                  disabled={isSubmitting}
                  isSubmitting={isSubmitting}
                >
                  {isSubmitting ? (
                    <FontAwesomeIcon icon={faCog} className="fa-spin" />
                  ) : (
                    <span>WYŚLIJ</span>
                  )}
                </StyledSubmitButton>
              </StyledFieldset>
            </Form>
          )}
        </Formik>
      </StyledFormInner>
    </StyledFormWrapper>
    <StyledMapWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDQsU1P1vzNUktmPtJIe3GEnOMpz18jVT8' }}
        defaultCenter={{ lat: 50.160065, lng: 22.298928 }}
        defaultZoom={11}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      />
    </StyledMapWrapper>
  </StyledSectionInfo>
);

export default ContactView;
