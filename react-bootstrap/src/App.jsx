import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './App.css'
import React from 'react';
import { Row, Col } from 'react-bootstrap';

function App() {


  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Tradingview</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">News</Nav.Link>
            <Nav.Link href="#pricing">OptionChain</Nav.Link>
            <Nav.Link href="#pricing">Chart</Nav.Link>
          </Nav>
          <br />
        </Container>
      </Navbar>

      <Carousel fade>
        <Carousel.Item>
          <img src="https://www.usnews.com/object/image/00000149-8acc-d676-a1c9-baee74080000/141107-marketvolatility-stock?update-time=1518189871102&size=responsive640" alt="" text="First slide" height={600} width={1916} />
          
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/012/610/678/small_2x/stacks-of-gold-coins-and-moving-charts-and-columns-on-the-background-of-a-dynamic-stock-market-board-3d-render-video.jpg" alt="" text="Second slide" height={600} width={1912} />
          
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://m.economictimes.com/thumb/height-450,width-600,imgsize-50622,msid-117239276/big-advice-from-peter-lynch-ace-investment-guru-on-how-to-make-money-in-the-stock-market.jpg" alt="" text="Third slide" height={600} width={1913} />
        </Carousel.Item>
      </Carousel>

<h2 className='st'>
     Last Upadate 
</h2>

<CardGroup>
  <Card>
    <Card.Img variant="top" src="https://logo.clearbit.com/sbi.co.in" />
    <Card.Body>
      <Card.Title>State Bank of India (SBI)</Card.Title>
      <Card.Text>
        India's largest public sector bank with a vast network of over 22,000 branches. 
        SBI offers a wide range of banking products and financial services. Current stock 
        price: ₹750 (NSE). Market cap: ₹6.7 lakh crore.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 5 mins ago</small>
    </Card.Footer>
  </Card>
  
  <Card>
    <Card.Img variant="top" src="https://logo.clearbit.com/itcportal.com" />
    <Card.Body>
      <Card.Title>ITC Limited</Card.Title>
      <Card.Text>
        Diversified conglomerate with businesses in FMCG, hotels, paperboards, packaging, 
        agri-business, and IT. Known for brands like Aashirvaad, Bingo!, and Classmate. 
        Current stock price: ₹420 (NSE). Market cap: ₹5.2 lakh crore.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 5 mins ago</small>
    </Card.Footer>
  </Card>
  
  <Card>
    <Card.Img variant="top" src="https://logo.clearbit.com/idfcbank.com" />
    <Card.Body>
      <Card.Title>IDFC First Bank</Card.Title>
      <Card.Text>
        Private sector bank offering retail and corporate banking services. Known for 
        competitive interest rates on deposits and loans. Current stock price: ₹85 (NSE). 
        Market cap: ₹58,000 crore. Recent focus on digital banking transformation.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 5 mins ago</small>
    </Card.Footer>
  </Card>


<Card>
  <Card.Img variant="top" src="https://logo.clearbit.com/swiggy.com" />
  <Card.Body>
    <Card.Title>Swiggy</Card.Title>
    <Card.Text>
      Leading Indian food delivery platform with instant grocery delivery service Instamart.
      Operates in 500+ cities. Valued at $10.7 billion (2022). Competes with Zomato in the foodtech space.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 15 mins ago</small>
  </Card.Footer>
</Card>

<Card>
  <Card.Img variant="top" src="https://logo.clearbit.com/bajajfinserv.in" />
  <Card.Body>
    <Card.Title>Bajaj Finance</Card.Title>
    <Card.Text>
      Leading NBFC offering loans, credit cards, and financial services. Current stock price: ₹7,245 (NSE).
      Market cap: ₹4.5 lakh crore. Part of Bajaj Finserv group with 60+ million customers.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 10 mins ago</small>
  </Card.Footer>
</Card>

<Card>
  <Card.Img variant="top" src="https://logo.clearbit.com/hdfcbank.com" />
  <Card.Body>
    <Card.Title>HDFC Bank</Card.Title>
    <Card.Text>
      India's largest private sector bank by assets. Current stock price: ₹1,485 (NSE). 
      Market cap: ₹11.2 lakh crore. Offers banking, loans, credit cards, and investment services 
      to 68 million customers.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 8 mins ago</small>
  </Card.Footer>
</Card>

<Card>
  <Card.Img variant="top" src="https://logo.clearbit.com/tataconsumer.com" />
  <Card.Body>
    <Card.Title>Tata Consumer</Card.Title>
    <Card.Text>
      FMCG company housing Tata Tea, Tetley, Tata Salt, and Starbucks India. Current stock price: ₹1,120 (NSE).
      Market cap: ₹1.1 lakh crore. Expanding in packaged foods and beverages segment.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 12 mins ago</small>
  </Card.Footer>
</Card>

<Card>
  <Card.Img variant="top" src="https://logo.clearbit.com/adani.com" />
  <Card.Body>
    <Card.Title>Adani Enterprises</Card.Title>
    <Card.Text>
      Infrastructure conglomerate with businesses in airports, ports, energy, and mining. 
      Current stock price: ₹3,250 (NSE). Market cap: ₹3.7 lakh crore. Flagship company of Adani Group.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 20 mins ago</small>
  </Card.Footer>
</Card>

<Card>
  <Card.Img variant="top" src="https://logo.clearbit.com/infosys.com" />
  <Card.Body>
    <Card.Title>Infosys</Card.Title>
    <Card.Text>
      Global IT services and consulting company headquartered in Bengaluru. Current stock price: ₹1,550 (NSE).
      Market cap: ₹6.4 lakh crore. Provides digital services to clients in 50+ countries with 350k+ employees.
    </Card.Text>
  </Card.Body>
  <Card.Footer>
    <small className="text-muted">Last updated 7 mins ago</small>
  </Card.Footer>
</Card>
</CardGroup>     

    <footer className="bg-dark text-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>TradingView</h5>
            <p>Stay updated with market news and analytics.</p>
          </Col>
          <Col md={4}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-light">Home</a></li>
              <li><a href="#features" className="text-light">News</a></li>
              <li><a href="#pricing" className="text-light">OptionChain</a></li>
              <li><a href="#chart" className="text-light">Chart</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <p>Email: support@tradingview.com</p>
            <p>Phone: +91 98765 43210</p>
          </Col>
        </Row>
        <hr className="border-top border-light" />
        <p className="text-center mb-0">© {new Date().getFullYear()} TradingView. All rights reserved.</p>
      </Container>
    </footer>

    </>
    
  )
}

export default App
