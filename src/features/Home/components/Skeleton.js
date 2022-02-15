import React from 'react';
import { Row, Col, Card, Placeholder } from 'react-bootstrap';
import noImage from '../../../images/no-image.png';

export default function Skeleton() {
  return (
    <Row>
      <Col xs="10" md="6" lg="4" xxl="3">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={noImage} />
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

      <Col xs="10" md="6" lg="4" xxl="3">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={noImage} />
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

      <Col xs="10" md="6" lg="4" xxl="3">
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={noImage} />
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
    </Row>
  );
}
