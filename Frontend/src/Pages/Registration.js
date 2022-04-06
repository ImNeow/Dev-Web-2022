import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import { useState } from 'react';
import axios from "axios";
import Redirect from "react"


const Registration = () => {
    const [validated, setValidated] = useState(false);  
    const handleSubmit = (event) => {
        /*Cette fonction vérifie si le champ est rempli
        PRE : les informations envoyé par le formulaire
        POST : /
        */ 
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            sendForm(event);
            
        }
        setValidated(true);
        
    };

    const sendForm = (event) =>{
        /*Cette fonction va envoyer les informations sur un utilisateur à la base de données
        PRE : les informations envoyé par le formulaire
        POST : /
        */ 
        const user ={
            lastname: event.target[1].value,
            firstname: event.target[0].value,
            password: event.target[3].value,
            email: event.target[2].value,
            newsletter:event.target[5].checked
        };
        
        axios
        .post("/users/", user)
        .then(res => console.log(res))
        .catch(err => console.log(err));
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
                            <Form.Control required type="text" placeholder="Jean" minLength="2"/>
                            <Form.Control.Feedback type="invalid">
                                Veuillez entrer un prénom
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col xs lg="3">
                            <Form.Group controlId="validationCustom02">
                            <Form.Label>Nom</Form.Label>
                            <Form.Control required type="text" placeholder="Dupont" minLength="2"/>
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
                            <Form.Control type="email" placeholder="jean@gmail.com" required minLength="5"/>
                            <Form.Control.Feedback type="invalid">
                                Votre e-mail n'est pas valide
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center mb-4">
                        <Col xs lg="3">
                            <Form.Group  controlId="validationCustom04">
                            <Form.Label>Mot de passe</Form.Label>
                            <Form.Control required type="password" placeholder="Mot de passe" minLength="8"/>
                            <Form.Control.Feedback type="invalid">
                                Veuillez entrer un mot de passe
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col xs lg="3">
                            <Form.Group controlId="validationCustom05">
                            <Form.Label>Entrez à nouveau votre mot de passe</Form.Label>
                            <Form.Control required type="password" placeholder="Mot de passe" minLength="8"/>
                            <Form.Control.Feedback type="invalid">
                                Veuillez à nouveau entrer un mot de passe
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Form.Group className="mb-3">
                                <Form.Check
                                label="Je souhaite m'inscrire à la newsletter" defaultChecked={true}
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
