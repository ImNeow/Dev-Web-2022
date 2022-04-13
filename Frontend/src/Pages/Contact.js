import { Container,  Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { useRef } from 'react';


const Contact = () => {
    const form = useRef();
    
    const handleSubmit = (event) => {
        /*Cette fonction vérifie si le champ est rempli
        PRE : l'évènement qui envoie le formulaire
        POST : /
        */ 
            event.preventDefault();
            event.stopPropagation();
            emailjs.sendForm('service_rse51yv', 'template_13on8q2', form.current, 'JioyY1I1MU-1KwY60')
                .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                }, function(error) {
                console.log('FAILED...', error);
                });
            event.target.reset();

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
            <Form ref={form} onSubmit={handleSubmit}>
                <Row className="justify-content-md-center mb-4">
                    <Col xs lg="3">
                        <Form.Group  controlId="validationCustom01">
                            <Form.Control required type="text" placeholder="Nom" name="form_name"/>
                            <Form.Control.Feedback type="invalid">
                            Veuillez indiquer un nom de référence
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col xs lg="3">
                        <Form.Group  controlId="validationCustom02">
                            <Form.Control required type="email" placeholder="Email" name="form_email"/>
                            <Form.Control.Feedback type="invalid">
                            Veuillez indiquer une adresse e-mail valide
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-4">
                    <Col xs lg="6">
                        <Form.Group  controlId="validationCustom03">
                            <Form.Control required type="text" placeholder="Sujet" name="form_subject"/>
                            <Form.Control.Feedback type="invalid">
                            Veuillez indiquer un titre à votre message
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <Form.Group className="mb-3" controlId="Mail_Message">
                        <Form.Control required placeholder="Message" as="textarea" rows={3}  name="form_message"/>
                        <Form.Control.Feedback type="invalid">
                            Veuillez indiquer votre message
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
        </Container>
        </div>
    );
}
    export default Contact
