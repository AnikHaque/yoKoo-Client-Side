import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css'
const Footer = () => {
    return (
        <div>
            <Container fluid className="footer">
  <Row>
    <Col>
    <h5>yoKoo</h5>
    <p>Copyright © 2021 yoKoo All Rights Reserved.</p>
    </Col>
    <Col>
    <h4>
    Newsletter Signup

    </h4>
    <p>Enter your email address to get latest
updates and offers from us.</p>

<Form>
  <input></input>
  <input type="submit"></input>

</Form>

    </Col>
    <Col>
    <h4>Social Links</h4>
    <li>
        <a href="#">Facebook</a>
    </li>
    <li>
        <a href="#">Instagram</a>
    </li>
    <li>
        <a href="#">Github</a>
    </li>
    <li>
        <a href="#">Linkedin</a>
    </li>
    </Col>
    <Col>
    <h4>Helpline</h4>

    <li>
Mirpur 2 , Dhaka Bangladesh
    </li>
    <br></br>
    <li>
    
   +880 1814803281

    </li>
    <br></br>
    <li>
    Mon to Friday
    </li>
    </Col>
    
  </Row>
</Container>
        </div>
    );
};

export default Footer;