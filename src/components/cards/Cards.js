//imports
import NFTs from './data.json';
import './Cards.css';

export default function Cards() {
  return(
    <div className="Cards">
      <ul className="NFTs">
        {NFTs.map(l => 
          <li className="card">
            <img src={process.env.PUBLIC_URL + '/images/' + l.image} alt="card"/>
            <div className="title">
                <h3>{l.title}</h3>
            </div>
          </li>
        )}
      </ul>
    </div>
  )
}