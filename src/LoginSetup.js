// imports
import './App.css';
import Collection from './Collection.js';
import * as fcl from '@onflow/fcl';
import { useState, useEffect } from 'react';
import { setupUserTx } from './cadence/transactions/setup_user.js';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore'

fcl
  .config()
  .put('accessNode.api', 'https://access-testnet.onflow.org')
  .put('discovery.wallet', 'https://fcl-discovery.onflow.org/testnet/authn');

function LoginSetup() {
  const [user, setUser] = useState([]);
  const usersCollection = collection(db, 'users')

  useEffect(() => {
    // sets the `user` variable to the person that is logged in through Blocto
    fcl.currentUser().subscribe(setUser);
    //create a async function
    const getUsers = async () => {
      //this returns all the documents inside the users collection
      const data = await getDocs(usersCollection);
      //this spreads the collection so we can obtain just the data and id
      setUser(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
      console.log(data.name)
    }
    getUsers();
  }, []);

  const logIn = () => {
    // log in through Blocto
    fcl.authenticate();
  };

  // This sets up a user. This is creating their account address where they will create and store
  //their blockchain items
  const setupUser = async () => {
    const transactionId = await fcl
      .send([
        fcl.transaction(setupUserTx),
        fcl.args([]),
        fcl.payer(fcl.authz),
        fcl.proposer(fcl.authz),
        fcl.authorizations([fcl.authz]),
        fcl.limit(9999),
      ])
      .then(fcl.decode);

    console.log(transactionId);
    return fcl.tx(transactionId).onceSealed();
  };

  return (
    <div className='login'>
      <button onClick={() => setupUser()}>Setup User</button>
    </div>
  );
}

export default LoginSetup;
