import React, { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import { Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Row, Col, Alert, InputGroup } from 'react-bootstrap';
import { Search } from 'react-feather';
import { searchBeerByName } from './Home.thunks';
import { clearResults } from './Home.slice';
import ResultsList from './components/ResultsList';
import styles from './Home.module.css';

export default function Home() {
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const { status, searchResults } = useSelector((state) => state.home);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleSearch = useCallback(
    debounce(async (e) => {
      const text = e.target.value;

      try {
        if (!text.trim()) {
          dispatch(clearResults());
          return;
        }
        dispatch(searchBeerByName(text.replaceAll(' ', '_')));
      } catch (error) {
        console.error(error);
      }
    }, 300),
    []
  );

  return (
    <>
      <Container style={{ marginTop: '60px' }}>
        <Row style={{ margin: '4.5rem 0 3rem', justifyContent: 'center' }}>
          <h1 className={styles.title}>Search your beer:</h1>
          <Col xs={12} xl={4}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Type beer name"
                onChange={handleSearch}
              />
              <InputGroup.Text>
                <Search width={15} height={15} />
              </InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>

        {status === 'loading' && <ResultsList.Skeleton />}
        {status === 'done' && <ResultsList items={searchResults} />}
        {status === 'error' && showAlert && (
          <Alert
            variant="danger"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>There was an error getting your results!</p>
          </Alert>
        )}
      </Container>
    </>
  );
}
