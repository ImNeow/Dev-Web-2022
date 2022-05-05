import { useEffect, useState } from "react"
import { Button, Row, Col, Form, FormControl, Table, Modal} from "react-bootstrap"

import { Edit } from "./Edit"

import axios from 'axios'
import '../../Assets/Styles/Management.css'

const ObjectManagement = () => {
    const [listObjets,setlistObjets] = useState([])
    const [refreshList,setRefreshList] = useState(false)
    const [editForm,setEditForm] = useState(false)
    const [EditObjet,setEditObjet] = useState('')

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
        setEditObjet(listObjets[index])
        setEditForm(!editForm)
        setRefreshList(!refreshList)
    } 
        

      
      
    return (
        <div className="justify-content-center">
            <h1>Gestion des Objets</h1>
            <Row className="justify-content-md-center mb-4">
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
                <Col md='3'>
                    <Button variant='secondary' onClick={e=>setRefreshList(!refreshList)}> Refresh</Button>
                </Col>

            </Row>
            <Table responsive striped hover size="sm" >
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
                                <td>{myObject.name}</td>
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
                    <Modal.Body className="custom-modal"><Edit myObjet={EditObjet}/></Modal.Body>
            </Modal>
        </div>  
    );
 }


export {ObjectManagement}
