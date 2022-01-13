//imports
import NFTs from './data.json';
import './Cards.css';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComments } from '@fortawesome/free-solid-svg-icons';
import Comments from './comments/Comments';

export default function Cards() {
  return (
    <div className='Cards'>
      {NFTs.map((l) => (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/images/' + l.image} alt="card" className="cardImg"/>
          <Card.Img
            variant='top'
            src={process.env.PUBLIC_URL + '/images/' + l.image}
            alt='card'
            style={{ height: '18rem' }}
          />
          <Card.Body>
            <Card.Title>{l.title}</Card.Title>
            <Card.Text>{l.price}</Card.Text>
            <Button variant='primary'>
              <FontAwesomeIcon icon={faHeart} />
            </Button>
            <Comments />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}
