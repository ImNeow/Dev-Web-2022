import { Row, Col , Container } from "react-bootstrap"
import image_vitrine from '../Assets/Images/vitrine.png'

const Accueil = () => {
    return (
        <div class="Accueil">
        <Container>
            <Row className="justify-content-center">
                <Col md="auto">
                    <img src={image_vitrine} alt="devanture du magasin" height={804} width={1148}/>
                </Col>
            </Row>
        </Container>
        </div>
    );
 }
export default Accueil
