import React from 'react';
import { Row, Col, Card, Placeholder } from 'react-bootstrap';
import image from '../../../images/skeleton-card-image.jpeg';

export default function Skeleton() {
  const items = Array.from({ length: 12 });
  return (
    <Row>
      {items.map((_, index) => (
        <Col
          key={index}
          xs="10"
          md="6"
          lg="4"
          xxl="3"
          style={{ marginBottom: '1rem' }}
        >
          <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={6} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
                <Placeholder xs={4} />
                <Placeholder xs={6} /> <Placeholder xs={8} />
              </Placeholder>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
