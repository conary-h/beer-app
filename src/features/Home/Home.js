import React, { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';
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
        {status === 'loading' && <ResultsList.Skeleton />}
        {status === 'done' && <ResultsList items={results} />}
      </Container>
    </>
  );
}
