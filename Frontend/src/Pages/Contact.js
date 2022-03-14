import { Container,  Row, Col, Form, Button } from 'react-bootstrap'
import { useState } from 'react';

const Contact = () => {
    const [validated, setValidated] = useState(false);  
    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
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
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="justify-content-md-center mb-4">
                    <Col xs lg="3">
                        <Form.Group  controlId="validationCustom01">
                            <Form.Control required type="text" placeholder="Nom"/>
                            <Form.Control.Feedback type="invalid">
                            Veuillez indiquer un nom de référence
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col xs lg="3">
                        <Form.Group  controlId="validationCustom02">
                            <Form.Control required type="email" placeholder="Email"/>
                            <Form.Control.Feedback type="invalid">
                            Veuillez indiquer une adresse e-mail valide
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-4">
                    <Col xs lg="6">
                        <Form.Group  controlId="validationCustom03">
                            <Form.Control required type="text" placeholder="Sujet"/>
                            <Form.Control.Feedback type="invalid">
                            Veuillez indiquer un titre à votre message
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                <Col xs lg="6">
                    <Form.Group className="mb-3" controlId="Mail_Message">
                        <Form.Control required placeholder="Message" as="textarea" rows={3} />
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
