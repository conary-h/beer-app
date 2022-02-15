import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/beer-png.png';

export default function Header() {
  return (
    <Link to="/">
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              style={{ marginRight: '.5rem' }}
            />
            Beer App
          </Navbar.Brand>
        </Container>
      </Navbar>
    </Link>
  );
}
