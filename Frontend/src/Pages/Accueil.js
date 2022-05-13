import { Row, Col , Container } from "react-bootstrap"
import image_logo from '../Assets/Images/logo-original.png'
import image_vitrine from '../Assets/Images/vitrine.png'
import '../Assets/Styles/App.css'

const Accueil = () => {
    return (
        <div className="Accueil" style={{BackgroundColor:"red"}}>
            <Container>
                <Row  className="justify-content-center">
                    <Col md="4" style={{textAlign:"center", marginTop:"5%"}}>
                        <h2>Rue du Progrès 9</h2><br />
                        <h2>1300 Wavre</h2><br />
                        <h2>010 24 85 95</h2><br />
                    </Col>
                    <Col md="4">
                        <img src={image_logo} alt="logo jaune 2" />
                    </Col>
                    <Col md="4" style={{textAlign:"center", marginTop:"5%"}}>
                        <table className="infoHorraire">
                            <tr><td>Lundi</td><td className="tdInfoHorraire">14h00-18h30</td></tr>
                            <tr><td>Mardi</td><td className="tdInfoHorraire">11h00-18h30</td></tr>
                            <tr><td>Mercredi</td><td className="tdInfoHorraire">11h00-18h30</td></tr>
                            <tr><td>Jeudi</td><td className="tdInfoHorraire">11h00-18h30</td></tr>
                            <tr><td>Vendredi</td><td className="tdInfoHorraire">11h00-18h30</td></tr>
                            <tr><td>Samedi</td><td className="tdInfoHorraire">10h00-18h30</td></tr>
                            <tr><td>Dimanche</td><td className="tdInfoHorraire">Fermé</td></tr>
                        </table>
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
 }
export {Accueil}
