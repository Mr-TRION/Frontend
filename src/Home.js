import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';

function Home() {

    return(
        <div>
        
        <Navbar id="nav" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand id="title" href="#home">
              {/* <img
                alt=""
                src="/img/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '} */}
              Scholarship HUB
            </Navbar.Brand>
          </Container>
        </Navbar>

        <div id="home"> 
            <Container>

                <div id="home2">
                <Row>
                <Col>
                    <h3 id="head1">FIND YOUR <br/> PERFECT SCHOLARSHIP</h3>
                    <p id="head2">Get your Scholarship based on your criteria</p>
                    <p id="head3">Click the Dataset Button below</p>
                    <a id="link" href="/">DATASET</a>
                </Col>
                <Col>
                    <img id="img" src="https://www.pngall.com/wp-content/uploads/8/Graduation-Scholarship-PNG.png"/>
                </Col>
            </Row>
              </div>
            </Container>
              
        </div>
      </div>
    )
}


export default Home;