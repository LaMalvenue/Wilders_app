import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import "./App.css";
import { Wilder } from "./components/Wilder/Wilder";
import { Header } from "./styled-components/Header";
import { Footer } from "./styled-components/Footer";
import wilders from "./data.json";

function App() {
  return (
    <div>
      <Header>
          <Row>
            <Col md>
              <h1>Wilders Book</h1>
            </Col>
          </Row>
      </Header>
      <main>
        <Container>
          <Row>
            <Col md>
              <h2>Wilders</h2>
            </Col>
          </Row>
          <Row>
            {wilders.map(data => (
              <Col md={6} lg={4} className="mb-4 mt-2" key={`{data.id}`}>
                <Wilder data={data}/>
              </Col>
            ))}
          </Row>
        </Container>
      </main>
      <Footer>
        <div className="container">
          <p>&copy; 2020 Wild Code School</p>
        </div>
      </Footer>
    </div>
  );
}

export default App;