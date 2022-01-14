import React from 'react';
import * as fcl from '@onflow/fcl';
import { useState, useEffect } from 'react';
import './Profile.css';
import Market from './market/Market';

fcl
  .config()
  .put('accessNode.api', 'https://access-testnet.onflow.org')
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn');

function Profile() {
  const [user, setUser] = useState();

  useEffect(() => {
    // sets the `user` variable to the person that is logged in through Blocto
    fcl.currentUser().subscribe(setUser);
  }, []);
  return (
    <div className='profile'>
      <h1>Profile Page</h1>
      <h1>Account address: {user && user.addr ? user.addr : ''}</h1>
      <Market />
    </div>
  );
}

export default Profile;
