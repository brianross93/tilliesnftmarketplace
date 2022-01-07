// imports 
import React from "react";
import {Link} from "react-router-dom";
import * as fcl from '@onflow/fcl';
import { useState, useEffect } from 'react';

fcl
  .config()
  .put('accessNode.api', 'https://access-testnet.onflow.org')
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn');

function Navbar() {
  
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
    <div>
      <h1>Account address: {user && user.addr ? user.addr : ''}</h1>
      <Link to="/"> Home </Link>
      <Link to="/about"> About </Link>
      <Link to="/market"> Market </Link>
      <Link to="/create"> Create </Link>
    </div>

    <div className="login">
      <button onClick={() => logIn()}>Log In</button>
      <button onClick={() => fcl.unauthenticate()}>Log Out</button>
    </div>
    </>
  );
};

export default Navbar;
