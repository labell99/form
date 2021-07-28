import React, { useState } from 'react';
import styled from 'styled-components';
import { navigate } from 'gatsby';

// material-ui
import { Card, CardContent, CardActions, Grid, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Button } from 'gatsby-theme-material-ui';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';

// formiks
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import * as axios from 'axios';

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

// styles
const StyledButton = styled(Button)`
  width: 175px;
  color: white;
  background: #0073BF;

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
    if (!values.VaccineName && tabValue === 0) {
      errors.street = 'No IDS data entered';
    }

    return errors;
  };

  async function getUser() {
    try {
	  const headers = {
        'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZjZlY2Y2YmQ2MDE5MGJiNDNkYzU2MCIsImlhdCI6MTYyNzAyODI0MCwiZXhwIjoxNjI5NjIwMjQwfQ.PY3BjVa3pxE_Z8DRY6Jv4Jv9TSobrYuWs98g4a5a2wM',
        'accept': 'application/json'
      };
      const response = await axios.get(`http://54.198.204.54:1337/ids`, { headers });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <Formik
          initialValues={{
            VaccineName: '',
            RecordNumber: '',
            VaccineType: '',
            VaccineApplication: '',
            VaccineTarget: '',
            mRNAType: '',
            ntShortName: '',
            ntLongName: '',
            ntCode: '',
            AminoAcid: '',
            Conserved: '',
            VariantTargets: '',
            Description: '',
            Category: '',
            Type: '',
            Subcategory: '',
            IPReference: '',
            PublicationSource: '',
            DOI: '',
            RefLinks: '',
            AIAnalyticsReport: '',
            Notes: '',
            Users: '',
            pick: !!tabValue,
          }}
          validationSchema={Yup.object({
            VaccineName: Yup.string(),
            RecordNumber: Yup.string(),
            VaccineType: Yup.string(),
            VaccineApplication: Yup.string(),
            VaccineTarget: Yup.string(),
            mRNAType: Yup.string(),
            ntShortName: Yup.string(),
            ntLongName: Yup.string(),
            ntCode: Yup.string(),
            AminoAcid: Yup.string(),
            Conserved: Yup.string(),
            VariantTargets: Yup.string(),
            Description: Yup.string(),
            Category: Yup.string(),
            Type: Yup.string(),
            Subcategory: Yup.string(),
            IPReference: Yup.string(),
            PublicationSource: Yup.string(),
            DOI: Yup.string(),
            RefLinks: Yup.string(),
            AIAnalyticsReport: Yup.string(),
            Notes: Yup.string(),
            Users: Yup.string(),
            pick: Yup.bool(),
          })}
          validate={validate}
          onSubmit={(values, actions) => {
            values.pick = !!tabValue;
            console.log("tr: ",axios);
            getUser();
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
                      <Field fullWidth component={TextField} name="Subcategory" type="text" label="Subcategory" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="IPReference" type="text" label="IP Reference" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="PublicationSource" type="text" label="Publication Source" />
                    </Grid>


                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="DOI" type="text" label="DOI" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="RefLinks" type="text" label="Ref Links" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="AIAnalyticsReport" type="text" label="AI Analytics Report" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Notes" type="text" label="Notes" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Users" type="text" label="Users" />
                    </Grid>

                  </Grid>
                </CardContent>
                <CardActions
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '8px' }}
                >
                  <StyledButton theme={theme} disabled={formik.isSubmitting} onClick={formik.submitForm} size="large">
                    Submit Data
                  </StyledButton>
                  <StyledButton theme={theme} disabled size="large">
                    Print Report
                  </StyledButton>
                  <StyledButton theme={theme} disabled size="large">
                    Send Report
                  </StyledButton>
                </CardActions>
              </Card>
            </Form>
          )}
        </Formik>
      </MuiPickersUtilsProvider>
    </>
  );
};

export default OrderForm;
