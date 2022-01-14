import {useEffect, useState} from 'react';
import './List.css';
import Axios from 'axios';
// import Mint from './Mint.js';

function List() {

  const [name, setName] = useState('')
  const [id, setId] = useState(0)
  const [price, setPrice] = useState(0)
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

  // const addNft = () => {
  //   Axios.post('http://localhost:3001/insert', {
  //     name: name,
  //     id: id,
  //     price: price,
  //     description: description,
  //     forSale: forSale
  //   }, axiosConfig)
  // }

  const addNft = () => {  
    Axios.post('http://localhost:3001/insert', {
      name: name,
      id: id,
      price: price,
      description: description,
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
      params: { name: name, id: id, price: price, description: description, forSale: forSale }  
      //params: {name: name, id: id, price: price, description: description, forSale: forSale}
}
).then(res => {
    console.log(res)
} )
    
})
  return (
    <div className='list'>
      <label>Name:</label>
      <input type='text' onChange={(e) => {
        setName(e.target.value)
      }} />
      <label>Id:</label>
      <input type='number' onChange={(e) => {
        setId(e.target.value)
      }} />
      <label>price:</label>
      <input type='number' onChange={(e) => {
        setPrice(e.target.value)
      }} />
      <label>description:</label>
      <input type='text' onChange={(e) => {
        setDescription(e.target.value)
        setForSale()
      }} />
      <button onClick={addNft}>List NFT</button>
    </div>
  );
}

export default List;
