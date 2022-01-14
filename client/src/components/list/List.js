import {useEffect, useState} from 'react';
import './List.css';
import Axios from 'axios';
import * as fcl from '@onflow/fcl';
import * as t from '@onflow/types';
import { create } from 'ipfs-http-client';
import { mintNFT } from '../../cadence/transactions/mint_nft.js';
// import Mint from './Mint.js';

const client = create('https://ipfs.infura.io:5001/api/v0');

fcl
  .config()
  .put('accessNode.api', 'https://access-testnet.onflow.org')
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn');

function List() {

  const [name, setName] = useState('')
  const [id, setId] = useState(0)
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState()
  const [description, setDescription] = useState('')
  const [forSale, setForSale] = useState(false)
  
  let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
//experimental read route
  useEffect(() => {
    Axios.get('http://localhost:3001/read', axiosConfig)
    .then(res => {
      console.log(res.data)
      setName(res.data[0].name)
      setId(res.data[0].id)
      setPrice(res.data[0].price)
      setDescription(res.data[0].description)
      setForSale(res.data[0].forSale)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  const addNft = () => {  
    Axios.post('http://localhost:3001/insert', {
      name: name,
      id: id,
      price: price,
      forSale: forSale
    }, axiosConfig)
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    Axios.get('http://localhost:3001/insert', {
      params: { name: name, id: id, price: price, forSale: forSale }  
      //params: {name: name, id: id, price: price, description: description, forSale: forSale}
}
).then(res => {
    console.log(res)
} )
    
})

const mint = async () => {

    try {
      const added = await client.add(file);
      const hash = added.path;

      const transactionId = await fcl
        .send([
          fcl.transaction(mintNFT),
          fcl.args([fcl.arg(hash, t.String), fcl.arg(name, t.String)]),
          fcl.payer(fcl.authz),
          fcl.proposer(fcl.authz),
          fcl.authorizations([fcl.authz]),
          fcl.limit(9999),
        ])
        .then(fcl.decode);

      console.log(transactionId);
      return fcl.tx(transactionId).onceSealed();
    } catch (error) {
      console.log('Error uploading file: ', error);
    }
  };
  return (
    <div className='list'>
      <label>Name:</label>
      <input type='text' onChange={(e) => {
        setName(e.target.value)
      }} />
      <label>ID:</label>
      <input type='number' onChange={(e) => {
        setId(e.target.value)
      }} />
      <label>Filename:</label>
       <input type='file' onChange={(e) => setFile(e.target.files[0])} />
      <label>Price:</label>
      <input type='number' onChange={(e) => {
        setPrice(e.target.value)
      }} />
      <button onClick={() => {addNft(); mint();}}>List NFT</button>
    </div>
  );
}

export default List;