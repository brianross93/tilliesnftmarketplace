import React from 'react';
import './MarketPlace.css';
import Market from './market/Market';
import Cards from '../cards/Cards';

function MarketPlace() {
  return (
    <div className='marketplace'>
      <h1>MarketPlace</h1>
      <Market />
      <Cards />
    </div>
  );
}

export default MarketPlace;
