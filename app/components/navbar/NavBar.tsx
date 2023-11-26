'use client'

import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logout from '../action/logout'

export default function NavBar(props: any) {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
            <img
              alt=""
              src="/images/logo.jpg"
              width="60"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Покоритель котиков</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cats">Список котов</Nav.Link>
            <Nav.Link href="/messages">Сообщения</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className='me-0'>
          { props.auth &&
            <Button variant="secondary" onClick={logout}>Выход</Button>
          }
        </Nav>
      </Container>
    </Navbar>
  );
}
