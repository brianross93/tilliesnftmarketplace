// imports
import './NavBar.css';
import React from 'react';
import * as fcl from '@onflow/fcl';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import DarkMode from '../darkmode/darkmode';
import LoginSetup from './LoginSetup';
import logo from '../navbar/tillieslogonew.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

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
    console.log("Im here")
  };

  return (
    <>
      <Navbar expand='lg'>
        <Container>
          <Navbar.Brand href='/'>
            <img src={logo} alt='Tillies Logo'></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
          <h1>Account address: {user && user.addr ? user.addr : ''}</h1>
            <Nav className='me-auto'>
              <LinkContainer to='/'>
                <Nav.Link to='/'>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/marketplace'>
                <Nav.Link to='/marketplace'>Marketplace</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/list'>
                <Nav.Link to='/list'>List an NFT</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
                <Nav.Link to='/about'>About</Nav.Link>
              </LinkContainer>
            </Nav>
            <Dropdown className='dropdown' align='end'>
              <Dropdown.Toggle variant='dark' id='dropdown-basic'>
                <FontAwesomeIcon icon={faUserCircle} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className='menu'>
                  <Dropdown.ItemText>
                    {' '}
                    <button onClick={() => logIn()}>Log In</button>
                  </Dropdown.ItemText>
                  <Dropdown.ItemText>
                    <button onClick={() => fcl.unauthenticate()}>
                      Log Out
                    </button>
                  </Dropdown.ItemText>
                  <Dropdown.ItemText>
                    {' '}
                    <LoginSetup />
                  </Dropdown.ItemText>
                </div>
              </Dropdown.Menu>
            </Dropdown>
            <div className='toggle'>
              <DarkMode />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
