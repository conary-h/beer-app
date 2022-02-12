import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import logo from '../../images/beer-png.png';

export default function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Beer App
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}
