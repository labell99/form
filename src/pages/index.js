import React from 'react';
import { Container } from '@material-ui/core';
import OrderForm from '../components/form/OrderForm';

const Pedido = () => (
  <Container maxWidth="md" style={{ margin: '1rem auto' }}>
    <OrderForm />
  </Container>
);

export default Pedido;
