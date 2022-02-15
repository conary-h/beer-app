import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, ListGroup, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router-dom';
import { getBeerDetails } from './Details.thunks';
import styles from './Details.module.css';

export default function Details() {
  const dispatch = useDispatch();
  const params = useParams();
  const { details } = useSelector((state) => state.details);
  const { ingredients } = details;

  useEffect(() => {
    dispatch(getBeerDetails(params?.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container
      style={{
        marginTop: '5rem',
      }}
    >
      <Row>
        <Col>
          <h1 className={styles?.title}>{details?.name}</h1>
          <p>{details?.description}</p>
          <Image
            src={details?.image_url}
            className={styles?.main__image}
            fluid
          />
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center', marginTop: '3rem' }}>
        <h2 style={{ textAlign: 'center' }}>Ingredients</h2>
        <Col xs={12} md={5}>
          <ListGroup variant="flush">
            {ingredients?.hops.map((item) => (
              <ListGroup.Item>{item?.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>

        <Col xs={12} md={5}>
          <ListGroup variant="flush">
            {ingredients?.malt.map((item) => (
              <ListGroup.Item>{item?.name}</ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
