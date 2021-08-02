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
import axios from 'axios';

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

  async function getUser(values) {
	console.log("val ",values);
    try {
      var resp = await axios.post('http://54.198.204.54:1337/auth/local', {
         identifier: 'lee_abell@hotmail.com',
         password: 'Test123!',
      });
      var authtoken = "Bearer " + resp.data.jwt;
	  const headers = {
        'Authorization': authtoken,
        'accept': 'application/json'
      };
      const responseg = await axios.get(`http://54.198.204.54:1337/ids`, { headers });
      const response = await axios.post(`http://54.198.204.54:1337/ids`, values);
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
            Emergence: '',
            NtShortName: '',
            NtLongName: '',
            FACTAtarget: '',
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
            FACTAGenome: '',
            Notes: '',
            Users: '',
            Notes2: '',
            SpikeVariants: '',
            OtherVariants: '',
            PANGO: '',
            BVBRC: '',
            pick: !!tabValue,
          }}
          validationSchema={Yup.object({
            VaccineName: Yup.string(),
            RecordNumber: Yup.string(),
            VaccineType: Yup.string(),
            VaccineApplication: Yup.string(),
            VaccineTarget: Yup.string(),
            Emergence: Yup.string(),
            NtShortName: Yup.string(),
            NtLongName: Yup.string(),
            FACTAtarget: Yup.string(),
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
            FACTAGenome: Yup.string(),
            Notes: Yup.string(),
            Users: Yup.string(),
            Notes2: Yup.string(),
            SpikeVariants: Yup.string(),
            OtherVariants: Yup.string(),
            PANGO: Yup.string(),
            BVBRC: Yup.string(),
            pick: Yup.bool(),
          })}
          validate={validate}
          onSubmit={(values, actions) => {
			console.log("submit");
            values.pick = !!tabValue;
            getUser(values);
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
                      <Field fullWidth component={TextField} name="Emergence" type="text" label="Emergence" />
                    </Grid>


                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="NtShortName" type="text" label="Nucleotide Short Name" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="NtLongName" type="text" label="Nucleotide Long Name" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="FACTAtarget" type="text" label="FACTAtarget" />
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
                      <Field fullWidth component={TextField} name="DOI" type="text" label="Phenotypes" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="RefLinks" type="text" label="Ref Links" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="FACTAGenome" type="text" label="FACTAGenome" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Notes" type="text" label="Notes" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Users" type="text" label="Users" />
                    </Grid>

                     {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="Notes2" type="text" label="Variant Source Note (SIB)" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="SpikeVariants" type="text" label="Spike Variants" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="OtherVariants" type="text" label="Other Variants" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="PANGO" type="text" label="PANGO" />
                    </Grid>

                    {/* Name */}
                    <Grid item xs={12}>
                      <Field fullWidth component={TextField} name="BVBRC" type="text" label="BVBRC" />
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
