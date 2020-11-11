// *************** Imports ***************
import React, {useContext, useEffect} from "react";
import axios from "axios";
// ****** Style ******
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style/App.css";
import {Container, Row, Col, Button} from 'react-bootstrap';
import {Header, Footer} from "./style/elements";
// ****** Components ******
import {Wilder} from "./components/Wilder/Wilder";
import {AddWilder} from "./components/AddWilder";
import {FormContext, formContext, useAddForm} from "./providers/FormContext";
import {useWilders, WildersContext} from "./providers/WildersContext";

function App() {
    // *************** Contextes ***************
    const { wilders } = useWilders();
    const { showAddForm, toggle } = useAddForm();

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
                            <Button className="btn-dark" onClick={() => { toggle() }}>
                                {!showAddForm ? "Afficher" : "Masquer"}
                            </Button>
                            {showAddForm === true && <AddWilder/>}
                        </Col>
                    </Row>
                    <Row>
                        <Col md>
                            <h2>Wilders</h2>
                        </Col>
                    </Row>
                    <Row>
                        {
                            wilders.map(wilder => (
                                <Col md={6} lg={4} className="mb-4 mt-2">
                                    <Wilder key={wilder._id} {...wilder} />
                                </Col>
                            ))
                        }
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