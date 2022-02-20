import { Container,  Row, Col, Form, Button } from 'react-bootstrap'

const Contact = () => {
    return <div className="Contact">
    <Container>
        <Row className='mb-5'></Row>
        <Row className="justify-content-md-center mb-4">
            <Col md="auto">
                <h2>Contactez-Nous</h2>
            </Col>
        </Row>
        <Row className="justify-content-md-center mb-4">
            <Col xs lg="3">
                <Form.Control placeholder="Nom" />
            </Col>
            <Col xs lg="3">
                <Form.Control placeholder="Email" />
            </Col>
        </Row>
        <Row className="justify-content-md-center mb-4">
            <Col xs lg="6">
                <Form.Control placeholder="Sujet" />
            </Col>
        </Row>
        <Row className="justify-content-md-center">
        <Col xs lg="6">
            <Form.Group className="mb-3" controlId="Mail_Message">
                <Form.Control placeholder="Message" as="textarea" rows={3} />
            </Form.Group>
        </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md="auto">
                <Button variant="warning">Envoyer</Button>
            </Col>
        </Row>
    </Container>
    </div>
}
    export default Contact