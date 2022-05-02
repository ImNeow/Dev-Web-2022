import Media from 'react-media'
import {Container, Row, Col} from 'react-bootstrap'

const NotFound = () => {
    return <>
    <Container>    
        <Row className="justify-content-md-center">
            <Col md="auto">
                <p style={{fontSize:'1000%'}}>404</p>
            </Col>
        </Row>
        <Row className="justify-content-md-center">
            <Col md="auto">
                <p style={{fontSize:'250%'}}>Page Introuvable</p>
            </Col>
        </Row>
        <Media query="(min-width: 992px) and (min-height : 600px)" render={() =>
            (
                <img
                    src={"pictures/easter-egg/angry-marsupilami.gif"}
                    style={{
                        right:0,
                        bottom: "13%",
                        position:'fixed'
                    
                        }}
                    alt={"marsup-gif"}
    >
            </img>
            )}
            />
            
    </Container>
</>
    
}
export {NotFound}
