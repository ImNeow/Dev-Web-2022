import { Row, Col , Container } from "react-bootstrap"
import image_logo from '../Assets/Images/logo-original.png'
import image_logo_portable from '../Assets/Images/logo-original-portable.png'
import Media from 'react-media';

import luckylukewalking from "../Assets/Images/lucky-luke-walk.gif"
import gastonsleeping from "../Assets/Images/gaston.gif"

import '../Assets/Styles/App.css'

const Accueil = () => {
    return (<>
          <Media query="(min-width: 992px) and (min-height : 600px)" render={() =>(<div className="animContainer"><img className="anim-luckylukewalking" alt="animation" src={luckylukewalking} ></img></div>)}/>

          <Media query="(min-width: 992px) and (min-height : 600px)" render={() =>(<div className="animContainer"><img className="anim-gastonsleeping" alt="animation" src={gastonsleeping} ></img></div>)}/>

        <div className="Accueil">
            <Container className="centered">
                <Row  className="justify-content-center">
                    <Col md="12" className="logo" style={{alignItems:'center'}}>
                    <Media query="(min-width: 768px)" render={() =>(<img src={image_logo}  alt="logo jaune 2" />)}/>
                    <Media query="(max-width: 767px)" render={() =>(<img src={image_logo_portable}  alt="logo jaune 2" />)}/>
                    </Col>
                </Row>
            </Container> 
        </div>
        </>
    );
 }
export {Accueil}