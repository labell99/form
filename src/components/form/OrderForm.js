import React, { useState } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

// material-ui
import { Card, CardContent, CardActions, Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Button } from 'gatsby-theme-material-ui';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// formik
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';

// moment
import MomentUtils from '@date-io/moment';
import moment from 'moment';

// order components
import Confirm from './Confirm';
import OrderProducts from './OrderProducts';
import OrderHeader from './OrderHeader';

// netlify form encode
const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

// phone regex
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// styles
const StyledButton = styled(Button)`
  width: 175px;
  color: white;
  background: ${({ theme }) =>
    `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`};

  @media screen and (min-width: 600px) {
    width: 300px;
  }
`;

const OrderForm = () => {
  const [price, setPrice] = useState(50);
  const [tabValue, setTabValue] = useState(0);
  const [confirmShow, setConfirmShow] = useState(false);

  const theme = useTheme();

  const validate = values => {
    const errors = {};

    // Address
    if (!values.street && tabValue === 0) {
      errors.street = 'Insira um endereço válido';
    }
    if (!values.number && tabValue === 0) {
      errors.number = 'Insira o número';
    }
    if (!values.neighbor && tabValue === 0) {
      errors.neighbor = 'Insira o bairro';
    }

    return errors;
  };

  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Formik
          initialValues={{
            name: '',
            product: '',
            street: '',
            number: '',
            neighbor: '',
            quantity: 100,
            pick: !!tabValue,
            phone: '',
            date: moment().add(2, 'days'),
          }}
          validationSchema={Yup.object({
            name: Yup.string().required('Name is required'),
            product: Yup.string().required('Choose your version'),
            street: Yup.string(),
            number: Yup.string(),
            neighbor: Yup.string(),
            date: Yup.string().required('Choose a date'),
            phone: Yup.string()
              .required('Phone is required')
              .matches(phoneRegExp, 'Invalid phone format'),
            pick: Yup.bool(),
          })}
          validate={validate}
          onSubmit={(values, actions) => {
            values.pick = !!tabValue;

            if (!confirmShow) {
              setConfirmShow(true);
            } else {
              values.date = values.date.format('L');

              // for testing purposes //
              console.log('success...', values);
              actions.resetForm();
              setConfirmShow(false);
              navigate('/success', {
                state: { success: true },
              });

            }
          }}
        >
          {formik => (
            <Form name="Orders" data-netlify="true">
              <Card>
                <CardContent>
                  {/* Header */}
                  <OrderHeader />

                  <Grid container spacing={2}>
                    {/* Products */}
                    <OrderProducts formik={formik} />

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="VaccineName" type="text" label="Vaccine Name" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="RecordNumber" type="text" label="Record Number" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="VaccineType" type="text" label="Vaccine Type" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="VaccineApplication" type="text" label="Vaccine Application" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="VaccineTarget" type="text" label="Vaccine Target" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="mRNAType" type="text" label="mRNA Type" />
                    </Grid>


                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="ntShortName" type="text" label="Nucleotide Short Name" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="ntLongName" type="text" label="Nucleotide Long Name" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="ntCode" type="text" label="Nucleotide Sequence" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="AminoAcid" type="text" label="Amino Acid" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Conserved" type="text" label="Conserved" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="VariantTargets" type="text" label="Variant Targets" />
                    </Grid>


                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Description" type="text" label="Description" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Category" type="text" label="Category" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Type" type="text" label="Type" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="name" type="text" label="Name" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="name" type="text" label="Name" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="name" type="text" label="Name" />
                    </Grid>


                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="name" type="text" label="Name" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="name" type="text" label="Name" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="name" type="text" label="Name" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="name" type="text" label="Name" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="name" type="text" label="Name" />
                    </Grid>

                  </Grid>
                </CardContent>
                <CardActions
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px' }}
                >
                  <StyledButton theme={theme} disabled={formik.isSubmitting} onClick={formik.submitForm} size="large">
                    Submit Data
                  </StyledButton>
                </CardActions>
              </Card>
              {confirmShow && formik.isValid ? (
                <Confirm
                  submit={formik.submitForm}
                  values={formik.values}
                  setConfirmShow={setConfirmShow}
                  setSubmitting={formik.setSubmitting}
                  confirmShow={confirmShow}
                />
              ) : null}
            </Form>
          )}
        </Formik>
      </MuiPickersUtilsProvider>
    </>
  );
};

export default OrderForm;
