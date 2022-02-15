import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import Skeleton from './Skeleton';
import styles from './ResultsList.module.css';
import noImage from '../../../images/no-image.png';

export default function ResultsList({ items }) {
  return (
    <Row style={{ justifyContent: 'center' }}>
      {items.map((item) => (
        <Col key={item?.id} xs="10" md="6" lg="4" xxl="3">
          <Card style={{ marginBottom: '1rem' }}>
            <Card.Img
              variant="top"
              src={item?.image_url || noImage}
              className={styles.card__image}
            />
            <Card.Body>
              <Card.Title className={styles.card__title}>
                {item?.name}
              </Card.Title>
              <Card.Text style={{ minHeight: '4rem' }}>
                {item?.tagline}
              </Card.Text>
              <Button
                variant="outline-info"
                size="lg"
                style={{ fontSize: '1rem' }}
              >
                Learn More
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

ResultsList.Skeleton = Skeleton;
