import React from 'react';
import { useState, useEffect } from 'react';
import { db } from '../../firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import '../../App.css';

function Create() {
  const [users, setUser] = useState([]);
  const usersCollection = collection(db, 'users');

  useEffect(() => {
    // sets the `user` variable to the person that is logged in through Blocto
    //create a async function
    const getUsers = async () => {
      //this returns all the documents inside the users collection
      const data = await getDocs(usersCollection);
      //this spreads the collection so we can obtain just the data and id
      setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log(data);
      console.log(users.name);
    };
    getUsers();
  }, []);

  return (
    <div className='Create'>
      <h1>Mint Page</h1>
      {users.map((user) => {
        return (
          <div>
            {' '}
            <h1>Name: {user.name}</h1>
          </div>
        );
      })}
    </div>
  );
}

export default Create;
