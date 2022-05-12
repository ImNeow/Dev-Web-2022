import { useEffect, useState } from "react"
import { Button, Row, Col, Form, FormControl, Table, Modal, Toast, ToastContainer} from "react-bootstrap"

import { CustomTable } from "./CustomTable"

import axios from 'axios'
import '../../Assets/Styles/Management.css'

const CuriosityManagement = () => {
    const [listObjets,setlistObjets] = useState([])
    const [refreshList,setRefreshList] = useState(false)
    const [editForm,setEditForm] = useState(false)
    const [EditObjet,setEditObjet] = useState('')

    const [showRightToast,setShowRightToast] = useState(true)
    const [showWrongToast,setShowWrongToast] = useState(false)

    useEffect(()=>{
        /* Cette fonction fait un appel à l'API pour récuperer le nombre de Livre par rapport à leurs types
        PRE : /
        POST : /
        */
        fetch("/curiosite/").then(res =>{
          if(res.ok){
            return res.json()
          }
        }).then(jsonResponse => {
            setlistObjets(jsonResponse)
        })
      },[refreshList])

      function DelObjet(id,index){
        if(id !== '' || id !== 0){
            axios.delete("/curiosite/"+id)
            .then(res =>{ 
                if(res.status === 200){
                    setRefreshList(!refreshList)
                }else{
                    console.log('Erreur lors de la suppression');
                } 
            }
            )}
    }


    
    function showEditForm(index){
        if(index !== -1){
            setEditObjet(listObjets[index])
            setEditForm(!editForm)
            setRefreshList(!refreshList)
        }else{
            setEditObjet({
                "_id": "",
                "name": "",
                "link": "",
                "type": "statuette",
                "description": "",
                "price": 0
            })
            setEditForm(!editForm)
            setRefreshList(!refreshList)
        }
    }  
        
    function fnShowRightToast(){
        setShowRightToast(!showRightToast);
    }

    function fnShowWrongToast(){
        setShowWrongToast(!showWrongToast);
    }


      
    return (
        <div className="justify-content-center">
            <h1>Gestion des Curiosités</h1>
            <Row className="justify-content-md-center mb-4">
                <Col md='1'>
                    <Button variant='success' onClick={e=>setRefreshList(!refreshList)}> Refresh</Button>
                </Col>
                <Col md='2'>
                    <Button variant='success' onClick={e=>showEditForm(-1)}>Ajouter</Button>
                </Col>

            </Row>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Numéro</th>
                        <th>Nom</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                    </tr>                    
                    
                </thead>
                <tbody>
                    {
                        listObjets.map((myObject,index)=>{
                            return(
                                
                                <tr key={myObject._id}>
                                <td>{index+1}</td>
                                <td>{myObject.name}</td>
                                <td>
                                    <Button  variant="success" onClick={e=>showEditForm(index)}>📝</Button>
                                </td>
                                <td>
                                    <Button  variant="danger" className="del-button" onClick={e=> DelObjet(myObject._id)}>🗑️</Button>
                                </td>
                            </tr>

                            )
                        })
                    }
                </tbody>
            </table>

            <Modal show={editForm} onHide={showEditForm}>
                <Modal.Header className="custom-modal" closeButton>
                    <Modal.Title>Modification</Modal.Title>
                </Modal.Header >
                    <Modal.Body className="custom-modal"><CustomTable type="curiosite" hiddenFunction={showEditForm} correctFunction={fnShowRightToast} wrongFunction={fnShowWrongToast} myObjet={EditObjet}/></Modal.Body>
            </Modal>

        </div>  
    );
 }

export {CuriosityManagement}
