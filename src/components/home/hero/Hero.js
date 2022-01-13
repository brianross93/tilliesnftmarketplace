// imports
import './Hero.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function Hero() {
  return (
    <div class="jumbotron">
      <Container>
        <Row>
          <Col sm={8} className="text">
            <h1>Welcome to TiLLiES Marketplace</h1>
            <p>The only NFT marketplace run by the community.</p>
          </Col>
          <Col sm={4}>
            <img src="https://www.creativityculturecapital.org/wp-content/uploads/2021/09/22_Diego_Balan_Web-942x1024.png" alt="NFT"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
