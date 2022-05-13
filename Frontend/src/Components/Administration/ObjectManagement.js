import { useEffect, useState } from "react"
import { Button, Row, Col, Form, FormControl, Table, Modal, Container} from "react-bootstrap"

import { CustomTable } from "./CustomTable"

import axios from 'axios'
import '../../Assets/Styles/Management.css'

const ObjectManagement = () => {
    const [listObjets,setlistObjets] = useState([])
    const [refreshList,setRefreshList] = useState(false)
    const [editForm,setEditForm] = useState(false)
    const [EditObjet,setEditObjet] = useState('')

    const [showRightToast,setShowRightToast] = useState(true)
    const [showWrongToast,setShowWrongToast] = useState(false)

    const [listType, setListType] = useState([])

    const [nameInput, setNameInput] = useState("")
    const [TypeInput, setTypeInput] = useState("")


    useEffect(()=>{
        /* Cette fonction fait un appel à l'API pour récuperer le nombre de Livre par rapport à leurs types
        PRE : /
        POST : /
        */
        fetch("/objets/").then(res =>{
          if(res.ok){
            return res.json()
          }
        }).then(jsonResponse => {
            setlistObjets(jsonResponse) 
            setListType(jsonResponse.map((types)=>{return (types.type)}))
        })
      },[refreshList])

      useEffect(()=>{
        /* Cette fonction fait un appel à l'API pour récuperer les objets des BDs par rapport à leurs types
        PRE : /
        POST : /
        */
        fetch("/objets/search/?name="+nameInput+"&type="+TypeInput).then(res =>{
            if(res.ok){
              return res.json()
            }
          }).then(jsonResponse => {
              setlistObjets(jsonResponse)
          })
       
        
      },[nameInput,TypeInput])
    

      function DelObjet(id){
        if(id !== '' || id !== 0){
            axios.delete("/objets/"+id)
            .then(res =>{ 
                if(res.status === 200){
                    setRefreshList(!refreshList)
                }else{
                    console.log('Erreur lors de la suppression');
                } 
            }
            )}
        }

    function handleKeyDown(event){
        /*
          Cette fonction récupère les entrées du clavier 
          PRE : l'evenement correspondant aux entrées clavier 
          POST : /
        */
        if(event.key === 'Enter'){
          event.preventDefault();
          document.getElementById('adminSearchButton').click()
        }
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
            <Container>
            <h1>Gestion des Objets</h1>
            <Row className="justify-content-md-center mb-4">
                <Col style={{fontWeight:"bold",fontSize:'120%'}}>Rechcerche :</Col>
                <Col md="3">
                    <Form>
                        <FormControl
                        type="search"
                        placeholder="Nom : 'Tintin au Tibet'"
                        className="me-2 InputSearch"
                        aria-label="Search"
                        value={nameInput.val}
                        onChange={event => setNameInput(event.target.value)}
                        onKeyDown={handleKeyDown}
                        />
                    </Form>
                </Col>
                <Col md="3">
                    <Form>
                        <FormControl
                        type="search"
                        placeholder="Type : 'poster'"
                        className="me-2 InputSearch"
                        aria-label="Search"
                        value={TypeInput.val}
                        onChange={event => setTypeInput(event.target.value)}
                        onKeyDown={handleKeyDown}
                        />
                    </Form>
                </Col>
                <Col md='2'>
                    <Button variant='success' onClick={e=>setRefreshList(!refreshList)}> Refresh</Button>
                </Col>
                <Col md='2'>
                    <Button variant='success' onClick={e=>showEditForm(-1)}>Ajouter</Button>
                </Col>

            </Row>
            <Table responsive striped hover size="sm" style={{cursor:'pointer'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Type</th>
                        <th>Prix</th>
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
                                <td style={{fontFamily: "cursive"}}>{myObject.name}</td>
                                <td>{myObject.type}</td>
                                <td>{myObject.price}€   </td>
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
            </Table>

            <Modal show={editForm} onHide={showEditForm}>
                <Modal.Header className="custom-modal" closeButton>
                    <Modal.Title>Modification</Modal.Title>
                </Modal.Header >
                    <Modal.Body className="custom-modal"><CustomTable type="objets" hiddenFunction={showEditForm} correctFunction={fnShowRightToast} wrongFunction={fnShowWrongToast} myObjet={EditObjet}/></Modal.Body>
            </Modal>
            </Container>
        </div>  
    );
 }


export {ObjectManagement}
