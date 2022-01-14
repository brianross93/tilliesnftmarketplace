// imports
import Collection from '../../Collection.js';
import SaleCollection from '../../SaleCollection.js';
import * as fcl from '@onflow/fcl';
import * as t from '@onflow/types';
import { useState, useEffect } from 'react';
import { create } from 'ipfs-http-client';
import './List.css';
import { mintNFT } from '../../cadence/transactions/mint_nft.js';
import { listForSaleTx } from '../../cadence/transactions/list_for_sale.js';
import { unlistFromSaleTx } from '../../cadence/transactions/unlist_from_sale.js';

const client = create('https://ipfs.infura.io:5001/api/v0');

fcl
  .config()
  .put('accessNode.api', 'https://access-testnet.onflow.org')
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn');

function Mint() {
  const [user, setUser] = useState();
  const [name, setName] = useState();
  // const [nameOfNFT, setNameOfNFT] = useState('');
  const [id, setID] = useState();
  const [price, setPrice] = useState();
  const [officialAddress, setOfficialAddress] = useState('');
  const [forSale, setForSale] = useState(false)

//   useEffect(() => {
//     // sets the `user` variable to the person that is logged in through Blocto
//     fcl.currentUser().subscribe(setUser);
//   }, []);

//   let axiosConfig = {
//     headers: {
//         'Content-Type': 'application/json;charset=UTF-8',
//         "Access-Control-Allow-Origin": "*",
//     }
//   };

//   useEffect(() => {
//     Axios.get('http://localhost:3001/read', axiosConfig)
//     .then(res => {
//       console.log(res.data)
//       setName(res.data[0].name)
//       setFile(res.data[0].file)
//       setID(res.data[0].id)
//       setPrice(res.data[0].price)
//       setForSale(res.data[0].forSale)
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   }, [])

//   const mintNft = () => {  
//     Axios.post('http://localhost:3001/insert', {
//       name: name,
//       file: file
//     }, axiosConfig)
//     .then(res => {
//       console.log(res)
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   }

//   useEffect(() => {
//     Axios.get('http://localhost:3001/insert', {
//       params: { name: name, id: id, price: price, forSale: forSale }  
//       //params: {name: name, id: id, price: price, description: description, forSale: forSale}
// }
// ).then(res => {
//     console.log(res)
// } )

// })

  //most of these are ultimately passing arguents to functions that have been imported
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

  // Sends argjuents for listForSaleTx
  const listForSale = async () => {
    // //post to our server route
    // Axios.post('http://localhost:3001/insert', {
    //   price: price,
    //   forSale: forSale
    // }, axiosConfig)
    // .then(res => {
    //   console.log(res)
    // })
    // .catch(err => {
    //   console.log(err)
    // })
    setForSale(true)
    const transactionId = await fcl
      .send([
        fcl.transaction(listForSaleTx),
        fcl.args([fcl.arg(parseInt(id), t.UInt64), fcl.arg(price, t.UFix64)]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999),
      ])
      .then(fcl.decode);

    console.log(transactionId);
    return fcl.tx(transactionId).onceSealed();
  };
  // UnlistFromSaleTx which is imported above
  const unlistFromSale = async () => {
    const transactionId = await fcl
      .send([
        fcl.transaction(unlistFromSaleTx),
        fcl.args([fcl.arg(parseInt(id), t.UInt64)]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999),
      ])
      setForSale(false)
      .then(fcl.decode);

    console.log(transactionId);
    return fcl.tx(transactionId).onceSealed();
  };
  console.log(<Collection address={officialAddress}></Collection>);
  return (
    <div className='mint'>
      <div>
        <input type='text' onChange={(e) => setName(e.target.value)} />
        <input type='file' onChange={(e) => setFile(e.target.files[0])} />
        <button onClick={() => mint()}>Mint</button>
      </div>

      <div>
          <input type='text' onChange={(e) => setID(e.target.value)} />
          <input type='text' onChange={(e) => setPrice(e.target.value)} />
          <button onClick={() => listForSale()}>Lift NFT for Sale</button>
          <button onClick={() => unlistFromSale()}>
            Unlist an NFT from Sale
          </button>
      </div>

      {/* This ultimately shows the collection  */}
      {user && user.addr && officialAddress && officialAddress !== '' ? (
        <Collection address={officialAddress}></Collection>
      ) : null}
      {/* This displays the NFT's that are for sale per account address */}
      {user && user.addr && officialAddress && officialAddress !== '' ? (
        <SaleCollection address={officialAddress}></SaleCollection>
      ) : null}
    </div>
  );
}

export default Mint;
