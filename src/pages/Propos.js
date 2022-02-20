import { Container, Row, Col } from "react-bootstrap";
import CustomCarousel from "../components/CustomCarousel";
const Propos = () => {
    
    return (
        <div className="about">
        {/* Beginning of the carousel*/} 
            <Container>
                <Row className="justify-content-md-center mb-4">
                    <Col md="auto">
                        <CustomCarousel />
                    </Col>
                </Row>
            </Container>
        </div>
    );
    }
    export default Propos