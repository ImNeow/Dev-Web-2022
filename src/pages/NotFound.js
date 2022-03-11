import Media from 'react-media'
import {Container, Row, Col} from 'react-bootstrap'

const NotFound = () => {
    return <>
    <Container>    
        <Row className="justify-content-md-center mb-1">
            <Col md="auto">
                <p style={{fontSize:'20em'}}>404</p>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md="auto">
                <p style={{fontSize:'3em'}}>Page Introuvable</p>
            </Col>
        </Row>
        <Media query="(min-width: 992px)" render={() =>
            (
                <img
                    src={"pictures/easter-egg/angry-marsupilami.gif"}
                    style={{
                        right:0,
                        bottom: "2%",
                        position:'absolute',
                }}
    >
            </img>
            )}
            />
    </Container>
</>
    
}
export default NotFound