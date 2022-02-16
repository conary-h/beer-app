import React, { useEffect } from 'react';
import { uniqBy } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Row,
  ListGroup,
  Col,
  Badge,
  Spinner,
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useParams } from 'react-router-dom';
import { getBeerDetails } from './Details.thunks';
import styles from './Details.module.css';

export default function Details() {
  const dispatch = useDispatch();
  const params = useParams();
  const { details, status } = useSelector((state) => state.details);
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
      {status === 'loading' && (
        <Row style={{ justifyContent: 'center' }}>
          <Spinner
            animation="border"
            style={{ width: '5rem', height: '5rem' }}
          />
        </Row>
      )}

      {status === 'done' && (
        <>
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

          <Row style={{ marginTop: '3rem' }}>
            <h2 style={{ textAlign: 'center' }}>Ingredients</h2>
            <Col xs={12} lg={5}>
              <ListGroup variant="flush">
                {uniqBy(ingredients?.hops, 'name').map((item) => (
                  <ListGroup.Item style={{ display: 'flex' }}>
                    {item?.name}

                    <span
                      className={styles.ingredient__amount}
                    >{`${item?.amount?.value} ${item?.amount?.unit}`}</span>
                    <Badge
                      bg="dark"
                      style={{ marginLeft: '1.2rem', padding: '.5rem' }}
                    >
                      {item?.attribute}
                    </Badge>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>

            <Col xs={12} lg={5}>
              <ListGroup variant="flush">
                {uniqBy(ingredients?.malt, 'name').map((item) => (
                  <ListGroup.Item style={{ display: 'flex' }}>
                    {item?.name}

                    <span
                      className={styles.ingredient__amount}
                    >{`${item?.amount?.value} ${item?.amount?.unit}`}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}
