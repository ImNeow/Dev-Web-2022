import { Row, Col , Container, Form, Button} from "react-bootstrap"

const NewsletterManagement = () => {
    return (
        <div className="NewsletterManagement">
             <Container>
            <Row className='mb-5'></Row>
            <Row className="justify-content-md-center mb-4">
                <Col md="auto">
                    <h2>Gestion de la Newsletter</h2>
                </Col>                
            </Row>

            <div id="contentForm">
                    <Row className="justify-content-md-center">
                    <Col xs lg="10">
                        <Form.Group className="mb-4" controlId="Mail_Message">
                            <Form.Control required placeholder="Message" as="textarea" rows={15}  name="form_message" minLength="10" maxLength="150"/>
                            <Form.Control.Feedback type="invalid">
                                Veuillez indiquer votre message de minimum 10 caractères
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col md="auto" style={{marginBottom:"2%"}}> 
                            <Button variant="success" type="submit">Envoyer</Button>
                        </Col>
                    </Row>
            </div>
    
            </Container>
        </div>
    );
 }
export {NewsletterManagement}
