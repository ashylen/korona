import React from 'react';

// Modules
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';

// Components

const StyledSectionInfo = styled.div`
  color: #fff;
  background-color: #343a40;
  padding: 25px 0 35px;
`;

const StyledFormWrapper = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: auto;
`;

const handleSubmit = (values, { setSubmitting }) => {
  setTimeout(() => {
    // alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  }, 400);
};

const StyledInput = styled.input`
  padding: 10px;
  margin: 0;
  border: 1px solid #d1d1d1;
`;

const ContactView = () => (
  <StyledSectionInfo>
    <StyledFormWrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <fieldset>
              <legend>Formularz kontaktowy</legend>
              <div>
                <label htmlFor="name">
                  Imie
                  <StyledInput id="name" type="name" name="name" />
                </label>
                <ErrorMessage name="name" component="div" />
              </div>

              <div>
                <label htmlFor="email">
                  Email
                  <StyledInput type="email" name="email" />
                </label>
                <ErrorMessage name="email" component="div" />
              </div>
              <div>
                <label htmlFor="phone">
                  Telefon
                  <StyledInput type="phone" name="phone" />
                </label>
                <ErrorMessage name="phone" component="div" />
              </div>
              <div>
                <Field as="select" name="vehicleType">
                  <option value="car">Samochód</option>
                  <option value="moto">Motocykl</option>
                  <option value="tractor">Traktor</option>
                </Field>
              </div>

              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </fieldset>
          </Form>
        )}
      </Formik>
    </StyledFormWrapper>
  </StyledSectionInfo>
);

export default ContactView;
