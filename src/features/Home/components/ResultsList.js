import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Skeleton from './Skeleton';

export default function ResultsList({ items }) {
  return (
    <Row style={{ justifyContent: 'center' }}>
      {items.map((item) => (
        <Col key={item?.id} xs="10" md="6" lg="4" xxl="3">
          <Card style={{ marginBottom: '1rem' }}>
            <Card.Img
              variant="top"
              src={item?.image_url}
              style={{
                maxWidth: '100%',
                maxHeight: '15rem',
                objectFit: 'contain',
                padding: '.8rem',
              }}
            />
            <Card.Body>
              <Card.Title>{item?.name}</Card.Title>
              <Card.Text>{item?.tagline}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

ResultsList.Skeleton = Skeleton;
