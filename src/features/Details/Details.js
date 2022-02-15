import React from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

export default function Details() {
  const params = useParams();
  console.log('params', params);
  return <Container style={{ marginTop: '60px' }}> BeerDetails</Container>;
}
