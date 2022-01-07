// imports
import './NavBar.css';
import React from 'react';
import { Link } from 'react-router-dom';
import * as fcl from '@onflow/fcl';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import DarkMode from '../darkmode/darkmode';
import logo from '../navbar/tillieslogonew.png';

fcl
  .config()
  .put('accessNode.api', 'https://access-testnet.onflow.org')
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn');

export default function NavBar() {
  const [user, setUser] = useState();

  useEffect(() => {
    // sets the `user` variable to the person that is logged in through Blocto
    fcl.currentUser().subscribe(setUser);
  }, []);

  const logIn = () => {
    // log in through Blocto
    fcl.authenticate();
  };

  return (
    <>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='/'>
            <img src={logo} alt='Tillies Logo'></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <LinkContainer to='/'>
                <Nav.Link to='/'>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/market'>
                <Nav.Link to='/market'>Market</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/create'>
                <Nav.Link to='/create'>Create</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link to='/about'>About</Nav.Link>
              </LinkContainer>
              <DarkMode />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='login'>
        <button onClick={() => logIn()}>Log In</button>
        <button onClick={() => fcl.unauthenticate()}>Log Out</button>
      </div>
    </>
  );
}
