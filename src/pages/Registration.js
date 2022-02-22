import React from 'react';
import {Container, Row, Col, Form, Button, InputGroup } from 'react-bootstrap'
import { useState } from 'react';

const Registration = () => {
    const [validated, setValidated] = useState(false);  
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <div>
            <Container>   
                <Row className='mb-5'></Row>
                <Row className="justify-content-md-center mb-4">
                    <Col md="auto">
                        <h2>Inscription</h2>
                    </Col>
                </Row>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <Row className="justify-content-md-center mb-4">
                        <Col xs lg="3">
                            <Form.Group  controlId="validationCustom01">
                            <Form.Label>Prénom</Form.Label>
                            <Form.Control required type="text" placeholder="Jean"/>
                            <Form.Control.Feedback type="invalid">
                                Veuillez entrer un prénom
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col xs lg="3">
                            <Form.Group controlId="validationCustom02">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control required type="text" placeholder="Dupont"/>
                            <Form.Control.Feedback type="invalid">
                                Veuillez entrer un nom
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center mb-4">
                        <Col xs lg="6">
                            <Form.Group controlId="validationCustom03">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="jean@gmail.com" required />
                            <Form.Control.Feedback type="invalid">
                                Votre e-mail n'est pas valide
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Form.Group className="mb-3">
                                <Form.Check
                                label="Je souhaite m'inscrire à la newsletter"
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Button type="submit" variant="success">S'inscrire</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        </div>
    );
};

export default Registration