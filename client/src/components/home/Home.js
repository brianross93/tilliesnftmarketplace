import React from 'react';
import '../../App.css';
import Hero from './hero/Hero';
import Cards from '../cards/Cards';

function Home() {
    return (
        <div className="Home">
            <Hero />
            <Cards />
        </div>
        
    )
}

export default Home;