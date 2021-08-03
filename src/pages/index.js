import React from 'react';
import { Container } from '@material-ui/core';
import OrderForm from '../components/form/OrderForm';

const Pedido = () => (
  <Container maxWidth="sm" style={{ margin: '1rem auto', flexDirection: 'row', justifyContent: 'flex-start' }}>
    <OrderForm />
  </Container>
);

export default Pedido;
