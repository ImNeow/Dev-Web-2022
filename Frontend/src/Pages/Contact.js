import { Container,  Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';


const Contact = () => {
    const formData = useRef();
    const [validated, setValidated] = useState(false);  
    
    const handleSubmit = (event) => {
        /*Cette fonction vérifie si le champ est rempli
        PRE : l'évènement qui envoie le formulaire
        POST : /
        */ 
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            event.preventDefault();
            emailjs.sendForm('service_rse51yv', 'template_13on8q2', formData.current, 'JioyY1I1MU-1KwY60')
                .then(function(response) {
                    document.getElementById("contentForm").innerHTML="<div class='justify-content-md-center mb-4 row'><div class='col-md-auto'><h3 style='color:green'>Votre mail a bien été envoyé !</h3></div></div><div class='justify-content-md-center mb-4 row'><div class='col-md-auto'><h4 style='color:green'>Nous vous répondrons dans les plus brefs délais.</h4></div></div>";
                }, function(error) {
                    document.getElementById("contentForm").innerHTML="<div class='justify-content-md-center mb-4 row'><div class='col-md-auto'><h3 style='color:red'>Service actuellement indisponible !</h3></div></div><div class='justify-content-md-center mb-4 row'><div class='col-md-auto'><h4 style='color:red'>Rééssayez plus tard...</h4></div></div>";
                });
        }
        setValidated(true);


    };

    return(
        <div className="Contact">
        <Container>
            <Row className='mb-5'></Row>
            <Row className="justify-content-md-center mb-4">
                <Col md="auto">
                    <h2>Contactez-Nous</h2>
                    
                </Col>                
            </Row>
            <div id="contentForm">
                <Form noValidate validated={validated} ref={formData} onSubmit={handleSubmit}>
                    <Row className="justify-content-md-center mb-4">
                        <Col xs lg="3">
                            <Form.Group >
                                <Form.Control required type="text" placeholder="Nom" name="form_name" minLength="2" maxLength="25"/>
                                <Form.Control.Feedback type="invalid">
                                Veuillez indiquer un nom de référence
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col xs lg="3">
                            <Form.Group  controlId="validationCustom02">
                                <Form.Control required type="email" placeholder="Email" name="form_email" minLength="5" maxLength="35"/>
                                <Form.Control.Feedback type="invalid">
                                Veuillez indiquer une adresse e-mail valide
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center mb-4">
                        <Col xs lg="6">
                            <Form.Group  controlId="validationCustom03">
                                <Form.Control required type="text" placeholder="Sujet" name="form_subject" maxLength="25"/>
                                <Form.Control.Feedback type="invalid">
                                Veuillez indiquer un titre à votre message
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                    <Col xs lg="6">
                        <Form.Group className="mb-3" controlId="Mail_Message">
                            <Form.Control required placeholder="Message" as="textarea" rows={3}  name="form_message" minLength="10" maxLength="150"/>
                            <Form.Control.Feedback type="invalid">
                                Veuillez indiquer votre message de minimum 10 caractères
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <Button variant="warning" type="submit">Envoyer</Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </Container>
        </div>
    );
}
    export {Contact}
