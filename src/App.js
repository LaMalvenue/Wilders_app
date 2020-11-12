// *************** Imports ***************
import React from "react";
import axios from "axios";
// ****** Style ******
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Header, Footer} from "./style/elements";
// ****** Components ******
import {Wilder} from "./components/Wilder/Wilder";
import {AddWilder} from "./components/AddWilder";
import {useAddForm} from "./providers/FormContext";
import {useWilders} from "./providers/WildersContext";

function App() {
    // *************** Contexts ***************
    const { wilders, update } = useWilders();
    const { showAddForm, toggle } = useAddForm();

    const deleteWilder = async (id) => {
     await axios.delete(`http://localhost:5000/api/wilder/${id}`);
     await update();
    }
    const updateWilder = async (id) => {
        await axios.put(`http://localhost:5000/api/wilder/${id}`);
        await update();
    }

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
                <h2>Ajouter un Wilder</h2>
              </Col>
            </Row>
            <Row>
              <Col md>
                <Button
                  className="btn-dark btn"
                  onClick={() => {
                    toggle();
                  }}
                >
                  {!showAddForm ? "Afficher" : "Masquer"}
                </Button>
                {showAddForm === true && <AddWilder />}
              </Col>
            </Row>
            <Row>
              <Col md>
                <h2>Wilders</h2>
              </Col>
            </Row>
            <Row>
              {wilders.map((wilder) => (
                <Col md={6} key={wilder._id} lg={4} className="mb-4 mt-2">
                  <Wilder
                    key={wilder._id}
                    deleteWilder={deleteWilder}
                    updateWilder={updateWilder}
                    {...wilder}
                  />
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