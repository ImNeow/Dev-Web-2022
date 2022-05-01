import { Row, Col } from "react-bootstrap"
import {useNavigate} from 'react-router-dom';
import { useState, useEffect } from "react";
import Tab from 'react-bootstrap/Tab'
import Nav from 'react-bootstrap/Nav'

import UserInformations from '../Components/Users/UserInformation'
import UserHistory from '../Components/Users/UserHistory'

import ObjectManagement from '../Components/Administration/ObjectManagement'
import CuriosityManagement from '../Components/Administration/CuriosityManagement'
import UsersManagement from '../Components/Administration/UsersManagement'
import NewsletterManagement from '../Components/Administration/NewsletterManagement'


import "../Assets/Styles/App.css"

const Menus = ["Informations","Historique","Gestion des Objets","Gestion des curiosités","Gestion des utilisateurs","Newsletter"]


const Accueil = () => {
    let navigate = useNavigate();


    return (
        <div className="Administration">
            <Tab.Container id="" defaultActiveKey="Informations">
                
                <Row md="auto" style={{marginLeft:"10px", marginTop:"10px"}}>
                    <Col md='3' style={{textAlign:"center", marginTop:"3%",marginLeft:"3%",paddingBottom:'3%', border:"solid black 4px", backgroundColor:'#ffc917'}} >
                        <Nav variant="" className="flex-column">
                            {
                                Menus.map((myMenu)=>{
                                    return (
                                        <Nav.Item>
                                            <Nav.Link className="menu" eventKey={myMenu}>{myMenu}</Nav.Link>
                                        </Nav.Item>
                                            )
                                    })}
                                <Nav.Item>
                                    <Nav.Link className="menu" style={{backgroundColor:'#f0560e'}} eventKey="deconnexionButton" onClick={e=>navigate('/accueil')}>Deconnexion</Nav.Link>
                                </Nav.Item>

                        </Nav>
                    </Col>
                
                    <Col md='3' style={{textAlign:"center", width:"60%",marginTop:"3%",marginLeft:"5%",paddingBottom:'3%',border:"solid black 4px",backgroundColor:'#ffc917'}} >
                    <Tab.Content>                                
                        
                        <Tab.Pane eventKey="Informations">
                                <UserInformations/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Historique">
                            <UserHistory/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Gestion des Objets">
                                <ObjectManagement/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Gestion des curiosités">
                                <CuriosityManagement/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Gestion des utilisateurs">
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
export default Accueil
