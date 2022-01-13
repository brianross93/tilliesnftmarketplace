//imports
import NFTs from './data.json';
import './Cards.css';
import { Card, Button } from 'react-bootstrap';
import Comments from './comments/Comments';

export default function Cards() {
  return(
    <div className="Cards">
      {NFTs.map(l => 
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/' + l.image} alt="card" className="cardImg"/>
          <Card.Body>
            <Card.Title>{l.title}</Card.Title>
            <Card.Text>
              {l.price}
            </Card.Text>
            <Button variant="primary">favorite</Button>
            <Comments />
          </Card.Body>
        </Card>
      )}
    </div>
  )
}