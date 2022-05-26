import { Row, Col ,Tab ,Nav} from "react-bootstrap"
import {useNavigate} from 'react-router-dom';
import { useEffect, useState } from "react";

import {UserInformation} from '../Components/Users/UserInformation'
import {UserHistory} from '../Components/Users/UserHistory'

import {ObjectManagement} from '../Components/Administration/ObjectManagement'
import {CuriosityManagement} from '../Components/Administration/CuriosityManagement'
import {UsersManagement} from '../Components/Administration/UsersManagement'
import {NewsletterManagement} from '../Components/Administration/NewsletterManagement'


import "../Assets/Styles/Administration.css"



const Administration = () => {
    let navigate = useNavigate();
    const [menus,setMenu] = useState(["Informations","Historique"])

    useEffect(() => {
        // Vérification du role d'administrateur et modification du menu
        if(localStorage.getItem('role')==="admin"){
            setMenu(["Informations","Gestion des Objets","Gestion des Curiosités","Gestion des Utilisateurs","Newsletter"]);
        }
    },[])

    return (
        <div className="Administration">
            <Tab.Container defaultActiveKey="Informations">
                
                <Row md="auto" className="justify-content-center custom-row">
                    <Col md='3' className="custom-tab-menu">
                        <Nav className="flex-column">
                            {
                                menus.map((myMenu)=>{
                                    return (
                                        <Nav.Item key={myMenu} eventKey={myMenu}>
                                            <Nav.Link className="menu" eventKey={myMenu}>{myMenu}</Nav.Link>
                                        </Nav.Item>
                                            )
                                    })}

                                <Nav.Item>
                                    <Nav.Link className="deco-button menu" eventKey="deconnexionButton" onClick={e=>{
                                        navigate('/accueil');
                                        localStorage.clear();
                                        window.location.reload()
                                    }}>Déconnexion</Nav.Link>
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
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
 }
export {Administration}
