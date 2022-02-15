import React, { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Placeholder, Card } from 'react-bootstrap';
import { searchBeerByName } from '.';
import ResultsList from './components/ResultsList';

export default function Home() {
  const dispatch = useDispatch();
  const [results, setResults] = useState([]);

  const { status } = useSelector((state) => state.home);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(async (e) => {
      try {
        const results = await dispatch(
          searchBeerByName(e.target.value)
        ).unwrap();

        setResults(results);
      } catch (error) {
        console.error(error);
      }
    }, 300),
    []
  );

  return (
    <>
      <Container style={{ marginTop: '60px' }}>
        <Row>
          <h1>Search your beer!</h1>
          <Form.Control
            type="text"
            placeholder="Enter email"
            onChange={handleSearch}
          />
        </Row>
        <Row>
          <h2 style={{ margin: '1rem 0' }}>Our preferred Malt</h2>
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
              </Card.Body>
            </Card>
          </Row>
        )}
        {status === 'done' && <ResultsList items={results} />}
      </Container>
    </>
  );
}
