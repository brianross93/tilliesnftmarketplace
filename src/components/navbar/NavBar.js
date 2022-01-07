// imports 
import './NavBar.css';
import React from "react";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function NavBar() {   
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
        <img
          src={"./TiLLiES_logo.png"}
         
          alt="Tillies logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link to="/">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/market">
              <Nav.Link to="/market">Market</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/create">
              <Nav.Link to="/create">Create</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/about">
              <Nav.Link to="/about">About</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
