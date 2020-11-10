// *************** Imports ***************
import React, {useEffect, useState} from "react";
import axios from "axios";
// ****** Bootstrap ******
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from 'react-bootstrap';
// ****** CSS ******
import "./App.css";
// ****** Components ******
import {Wilder} from "./components/Wilder/Wilder";
import {AddWilder} from "./components/AddWilder/AddWilder";
// ****** Styled-components ******
import {Header} from "./styled-components/Header";
import {Footer} from "./styled-components/Footer";

function App() {

    const [wilders, setWilders] = useState([]);
        useEffect(() => {
            const fetchWilders = async () => {
                try {
                    const response = await axios.get('http://localhost:5000/api/wilder');
                    const wilders = response.data.result;
                    setWilders(wilders);
                } catch {
                    console.error('Error');
                }
            };
            fetchWilders();
        }, []);

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
                           <AddWilder/>
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