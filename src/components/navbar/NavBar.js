// imports 
import './NavBar.css';
import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function NavBar() {   
  return (
    <Navbar bg="#435058" expand="lg">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/">Home</Nav.Link>
            <Nav.Link to="/market">Market</Nav.Link>
            <Nav.Link to="/create">Create</Nav.Link>
            <Nav.Link to="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
