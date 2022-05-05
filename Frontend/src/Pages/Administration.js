import { Row, Col ,Tab ,Nav} from "react-bootstrap"
import {useNavigate} from 'react-router-dom';

import {UserInformation} from '../Components/Users/UserInformation'
import {UserHistory} from '../Components/Users/UserHistory'

import {ObjectManagement,EditObjet} from '../Components/Administration/ObjectManagement'
import {CuriosityManagement,EditCuriosity} from '../Components/Administration/CuriosityManagement'
import {UsersManagement} from '../Components/Administration/UsersManagement'
import {NewsletterManagement} from '../Components/Administration/NewsletterManagement'


import "../Assets/Styles/Administration.css"

const Menus = ["Informations","Historique","Gestion des Objets","Gestion des Curiosités","Gestion des Utilisateurs","Newsletter"]


const Administration = () => {
    let navigate = useNavigate();


    return (
        <div className="Administration">
            <Tab.Container defaultActiveKey="Informations">
                
                <Row md="auto" className="justify-content-center custom-row">
                    <Col md='3' className="custom-tab-menu">
                        <Nav variant="" className="flex-column">
                            {
                                Menus.map((myMenu)=>{
                                    return (
                                        <Nav.Item key={myMenu}>
                                            <Nav.Link className="menu" eventKey={myMenu}>{myMenu}</Nav.Link>
                                        </Nav.Item>
                                            )
                                    })}

                                <Nav.Item>
                                    <Nav.Link className="deco-button menu" eventKey="deconnexionButton" onClick={e=>navigate('/accueil')}>Deconnexion</Nav.Link>
                                </Nav.Item>

                        </Nav>
                    </Col>
                
                    <Col md='3' className="custom-tab-content">
                    <Tab.Content>                                
                        
                        <Tab.Pane eventKey="Informations">
                                <UserInformation/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Historique">
                            <UserHistory/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Gestion des Objets">
                                <ObjectManagement/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Gestion des Curiosités">
                                <CuriosityManagement/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Gestion des Utilisateurs">
                                <UsersManagement/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Newsletter" >
                                <NewsletterManagement/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="editObjet" >
                                <EditObjet/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="editCuriosite" >
                                <EditCuriosity/>
                        </Tab.Pane>

                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
 }
export {Administration}
