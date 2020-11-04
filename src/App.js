import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./App.css";
import wilders from './data';
import { Wilder } from "./components/wilder/wilder";

function App() {
  return (
    <div>
      <header>
        <Container>
          <Row>
            <Col>
              <h1>Wilders Book</h1>
            </Col>
          </Row>
        </Container>
      </header>
      <Container>
        <Row>
          <Col>
            <h2>Wilders</h2>
          </Col>
        </Row>
        <Row>
          {wilders.map(data => (
            <Col xs={3} className="mb-5" key={`${data.id}`}>
              <Wilder data={data}/>
            </Col>
          ))}
        </Row>
      </Container>
      <footer>
        <div className="container">
          <p>&copy; 2020 Wild Code School</p>
        </div>
      </footer>
    </div>
  );
}

export default App;