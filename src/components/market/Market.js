import React from 'react';
import '../../App.css';
import Collection from '../../Collection';
import SaleCollection from '../../SaleCollection';
import * as fcl from '@onflow/fcl';
import { useState, useEffect } from 'react';

fcl
  .config()
  .put('accessNode.api', 'https://access-testnet.onflow.org')
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn');

function Market() {
    const [address, setAddress] = useState();
    const [officialAddress, setOfficialAddress] = useState('');
    const [user, setUser] = useState();

    useEffect(() => {
    // sets the `user` variable to the person that is logged in through Blocto
    fcl.currentUser().subscribe(setUser);
  }, []);

    console.log(<Collection address={officialAddress}></Collection>);
    return (
        <>
        <div>
            <h1>Search Page</h1>
        </div>
        <div>
            <input type='text' onChange={(e) => setAddress(e.target.value)} />
            <button onClick={() => setOfficialAddress(address)}>Search</button>
        </div>

        { user && user.addr && officialAddress && officialAddress !== ''
        ?
        <Collection address={officialAddress}></Collection>
        :
        null
      }

      { user && user.addr && officialAddress && officialAddress !== ''
      ?
      <SaleCollection address={officialAddress}></SaleCollection>
      :
      null
      }
        </>
    )
}

export default Market;