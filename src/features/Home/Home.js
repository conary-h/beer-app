import React, { useEffect } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Placeholder, Card } from 'react-bootstrap';
import { getSuggestedCatalog } from '.';

export default function Home() {
  const dispatch = useDispatch();
  const { suggestedItems, status } = useSelector((state) => state.home);
  const onDropdownChange = (items) => {
    console.log('changed');
  };

  useEffect(() => {
    dispatch(getSuggestedCatalog());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Container>
        <Row>
          <h1>Search your beer!</h1>
          <Select
            onChange={onDropdownChange}
            name="filters"
            options={[{ value: 'ci', label: 'simon' }].map((tag) => ({
              value: tag.value,
              label: tag.label,
            }))}
            className="Companies__Dropdown"
          />
        </Row>
        <Row>
          <h2>Our preferred Malt</h2>
          <Col xs={12} style={{ marginBottom: '50px' }}>
            Eiusmod dolore proident esse eiusmod sit ipsum pariatur et deserunt
            et Lorem quis. Id quis ea ea exercitation occaecat reprehenderit
            consectetur et. Deserunt nostrud velit mollit ad magna quis elit ex
          </Col>
        </Row>
        {status === 'loading' && (
          <Row>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={6} />
                </Placeholder>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder xs={7} /> <Placeholder xs={4} />{' '}
                  <Placeholder xs={4} /> <Placeholder xs={6} />{' '}
                  <Placeholder xs={8} />
                </Placeholder>
                <Placeholder.Button variant="primary" xs={6} />
              </Card.Body>
            </Card>
          </Row>
        )}
      </Container>
    </>
  );
}
