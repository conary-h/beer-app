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
  Accordion,
  ProgressBar,
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
        <div className={styles.details__content}>
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

          <Row style={{ margin: '3rem 0 4rem' }}>
            <h2 className={styles.section__title}>Ingredients</h2>
            <Col xs={12} lg={6}>
              <ListGroup className={styles.list__group} variant="flush">
                <h5 className={styles.list__title}>Hops</h5>
                {uniqBy(ingredients?.hops, 'name').map((item, index) => (
                  <ListGroup.Item
                    key={`ingredient-hops-${index}`}
                    style={{ display: 'flex' }}
                  >
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

            <Col xs={12} lg={6}>
              <ListGroup className={styles.list__group} variant="flush">
                <h5 className={styles.list__title}>Malt</h5>
                {uniqBy(ingredients?.malt, 'name').map((item, index) => (
                  <ListGroup.Item
                    key={`ingredient-malt-${index}`}
                    style={{ display: 'flex' }}
                  >
                    {item?.name}
                    <span
                      className={styles.ingredient__amount}
                    >{`${item?.amount?.value} ${item?.amount?.unit}`}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>

          <Row>
            <h2 className={styles.section__title}>Additional information</h2>

            <Col>
              <h6 style={{ marginBottom: '1rem' }}>Attenuation level</h6>
              <ProgressBar
                now={details?.attenuation_level}
                label={`${details?.attenuation_level}`}
              />
            </Col>

            <Accordion defaultActiveKey="0" style={{ marginTop: '3rem' }}>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Food Pairing</Accordion.Header>
                <Accordion.Body>
                  {details?.food_pairing.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>First Brewed</Accordion.Header>
                <Accordion.Body>
                  This incredible beer was originally brewed on &nbsp;
                  {details?.first_brewed}
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Contributed by</Accordion.Header>
                <Accordion.Body>
                  Awesome contributions made by: &nbsp;
                  {details?.contributed_by}
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>Brewer Tips</Accordion.Header>
                <Accordion.Body>{details?.brewers_tips}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Row>
        </div>
      )}
    </Container>
  );
}
