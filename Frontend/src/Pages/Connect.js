import { Container,  Row, Col, Form, Button } from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';
import axios from "axios";
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react';

const Connect = () => {
    const [authenticated,setAuthenticated] = useState([])

    const handleSubmit = (event) => {
        /*Cette fonction vérifie si le champ est rempli
        PRE : les informations envoyé par le formulaire
        POST : /
        */ 
        event.preventDefault();
        sendForm(event);  
    };

    useEffect(()=>{
        console.log(authenticated)
    },[authenticated])
    const sendForm = (event) =>{
        /*Cette fonction va envoyer les informations sur un utilisateur à la base de données
        PRE : les informations envoyé par le formulaire
        POST : /
        */ 
        const user ={
            email: event.target[0].value,
            password: event.target[1].value
        };


        axios.post("/login", user , { withCredentials: true })
        .then(res => setAuthenticated(Cookies['AuthToken']))
        .catch(err => console.log(err));
  };
    return (
    <div className="Connect">
        <Container>   
            <Row className='mb-5'></Row>
            <Row className="justify-content-md-center mb-4">
                <Col md="auto">
                    <h2>Connexion</h2>
                </Col>
            </Row>
            <Form onSubmit={sendForm}>
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
                    <a href='/registration'> Vous n'avez pas encore de compte ? Cliquez ici pour vous en créer un !</a>
                </Col>
            </Row>
        </Container>
    </div>
    );
}
    export default Connect
