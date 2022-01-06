import React from 'react';
import '../../App.css';
import Collection from '../../Collection';
import { useState } from 'react';

function Market() {
    const [address, setAddress] = useState();
    const [officialAddress, setOfficialAddress] = useState('');

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
        </>
    )
}

export default Market;