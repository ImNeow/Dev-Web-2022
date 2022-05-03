import { useEffect, useState } from "react"
import { Button, Row, Col, Form, FormControl, Table} from "react-bootstrap"

import axios from 'axios'
import '../../Assets/Styles/Management.css'

const ObjectManagement = () => {
    const [listObjets,setlistObjets] = useState([])
    const [refreshList,setRefreshList] = useState(false)

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

        

      
      
    return (
        <div className="justify-content-center">
            <h1>Gestion des Objets</h1>
            <Row>
                
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

            </Row>
            <Table responsive striped hover size="sm" >
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Type</th>
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
                                <td>
                                    <Button  variant="success" href={"/administration/objet/"+myObject._id}>/</Button>
                                </td>
                                <td>
                                    <Button  variant="danger" className="del-button" onClick={e=> DelObjet(myObject._id)}>X</Button>
                                </td>
                            </tr>

                            )
                        })
                    }
                </tbody>
            </Table>
        </div>  
    );
 }


 const EditObjet = (props) => {
   return (
       <div> test = {props.name}</div>
   )
 }




export {ObjectManagement,EditObjet}
