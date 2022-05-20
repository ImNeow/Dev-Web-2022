import { Container,  Row, Col, Form, Button, Table } from 'react-bootstrap'
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
    
            <Row style={{marginTop:'2%'}} className="justify-content-md-center">
                <Col md="auto">
            <iframe title="jaune2Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2526.275903316567!2d4.607511915967908!3d50.7148203761609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c17d750f12629d%3A0xe2a0c623d3108322!2sLibrairie%20Jaune%202!5e0!3m2!1sfr!2sbe!4v1653060499662!5m2!1sfr!2sbe" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Col>
                <Col md="auto">
                    <Table className="infoHorraire">
                            <tr><td colSpan={2} style={{textAlign:'center'}} >Horaire</td></tr>
                            <tr><td>Lundi</td><td >14h00-18h30</td></tr>
                            <tr><td>Mardi</td><td >11h00-18h30</td></tr>
                            <tr><td>Mercredi</td><td>11h00-18h30</td></tr>
                            <tr><td>Jeudi</td><td >11h00-18h30</td></tr>
                            <tr><td>Vendredi</td><td >11h00-18h30</td></tr>
                            <tr><td>Samedi</td><td>10h00-18h30</td></tr>
                            <tr><td>Dimanche</td><td>Fermé</td></tr>
                         
                        </Table>
                </Col>
            </Row>
        </Container>
        </div>
    );
}
    export {Contact}
