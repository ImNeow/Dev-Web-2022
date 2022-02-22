import { Container,  Row, Col, Form, Button } from 'react-bootstrap'

const Connect = () => {
    return (
    <div className="Connect">
        <Container>   
            <Row className='mb-5'></Row>
            <Row className="justify-content-md-center mb-4">
                <Col md="auto">
                    <h2>Connexion</h2>
                </Col>
            </Row>
            <Form >
                <Row className="justify-content-md-center mb-4">
                    <Col xs lg="6">
                        <Form.Label htmlFor="email">Adresse e-mail</Form.Label>
                        <Form.Control id="email"  placeholder="jean@gmail.be" type='email' />
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-4">
                    <Col xs lg="6">
                        <Form.Label htmlFor="password">Mot de passe</Form.Label>
                        <Form.Control id="password" placeholder="e5#3ft4%6" type='password' />
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Button variant="success" type='submit'>Se connecter</Button>
                    </Col>
                </Row>
            </Form>
            <br />
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <a href='/incription'>Vous n'avez pas encore de compte ? Cliquez ici pour vous en créer un !</a>
                </Col>
            </Row>
        </Container>
    </div>
    );
}
    export default Connect