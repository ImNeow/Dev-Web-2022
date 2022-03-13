import { Container, Row, Col } from "react-bootstrap";
import CustomCarousel from "../Components/CustomCarousel";
const Propos = () => {
    
    return (
        <div className="about">
        {/* Beginning of the carousel*/} 
            <Container>
                <Row className="justify-content-md-center mb-4">
                    <Col md="auto">
                        <h1>Notre magasin</h1>
                    </Col>
                </Row>
                <Row className="justify-content-md-center mb-4">
                    <Col md="5">
                        <CustomCarousel />
                    </Col>
                </Row>
            </Container>
            <Container fluid>
                <Row >
                    <Col style={{textAlign : 'left', fontWeight : 'bold'}}>1984</Col>
                </Row>
                    <p className="apropos"/>C'est l'année de notre vrai démarrage. Quelques tables de jardin achetées en solde, quelques timides piles de nouveautés et nous voilà partis pour une aventure qui n'a cessé d'évoluer au fil des années. 
                    15 ans dans le nord-est de Bruxelles. <br/><br/>
                <Row >
                    <Col style={{textAlign : 'left', fontWeight : 'bold'}}>1999</Col>
                </Row> 
                    Déménagement à Wavre dans notre petit magasin de 60 m². <br/><br/>
                <Row >
                    <Col style={{textAlign : 'left', fontWeight : 'bold'}}>2006</Col>
                </Row>
                    <p className="apropos"/>Trop à l'étroit, nous arrivons à la Rue du Progrès avec 300 m² ! Enfin un peu de place ! <br/><br/>
                <Row >
                    <Col style={{textAlign : 'left', fontWeight : 'bold'}}>2014</Col>
                </Row>
                    <p className="apropos"/>Nous récupérons l'étage de notre magasin (encore 300 m²) pour enfin trouver de la place pour tout ce que nous accumulons depuis plus de 30 ans !<br/>
                    Nous pouvons actuellement proposer toutes les nouveautés (BD - Mangas - Comics), un très grand rayon d'occasions et maintenant un énorme choix d'albums rares ou épuisés !<br/><br/>
                <Row >
                    <Col style={{textAlign : 'left', fontWeight : 'bold'}}>2017</Col>
                </Row>
                    <p className="apropos"/>Nouvelle étape dans notre évolution, avec la reprise de la boutique par notre ainé, Cédric, aidé par son petit frère, Nicolas.
                    Ils assureront la suite logique de cette aventure !
            </Container>
        </div>

    );
    }
    export default Propos
