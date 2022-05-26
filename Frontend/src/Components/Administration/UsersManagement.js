import { useEffect, useState } from "react"
import { Button, Row, Col, Form, FormControl, Table, Modal, Container} from "react-bootstrap"

import axios from 'axios'
import '../../Assets/Styles/Management.css'

const UsersManagement = () => {
    const [listUsers,setlistUsers] = useState([])
    const [refreshList,setRefreshList] = useState(false)

    useEffect(()=>{
        /* Cette fonction fait un appel à l'API pour récuperer la liste des users
        PRE : /
        POST : /
        */
        fetch("/users/").then(res =>{
          if(res.ok){
            return res.json()
          }
        }).then(jsonResponse => {
            setlistUsers(jsonResponse) 
        })
      },[refreshList])
    

    function ChangeNewsletter(event,id){
        /* Cette fonction permet de changer l'état de la checkbox pour la newsletter
        PRE : /
        POST : /
        */ 

        const newNewsletter={
            newsletter: event.target.checked
        }

        axios.put("/users/newsletter/"+id, newNewsletter)
        .then((res) =>{
            console.log(res);
        })
        .catch(err =>{
            console.log(err);
        } );
        
    }

    function DelUser(id){
        /* Cette fonction permet de supprimer un user
        PRE : id est un entier
        POST : /
        */
         
        if(id !== '' || id !== 0){
            axios.delete("/users/"+id)
            .then(res =>{ 
                if(res.status === 200){
                    setRefreshList(!refreshList)
                }else{
                    console.log('Erreur lors de la suppression');
                } 
            }
            )}
    }
      
      
    return (
        <div className="justify-content-center">
            <Container>
            <h1>Gestion des Utilisateurs</h1>
    
            <Table responsive striped hover size="sm" style={{cursor:'pointer'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Newsletter</th>
                        <th>Supprimer</th>
                    </tr>                    
                    
                </thead>
                <tbody>
                    
                    {
                        listUsers.map((myUser,index)=>{
                            return(
                                <tr key={myUser._id}>
                                <td>{index+1}</td>
                                <td style={{fontFamily: "cursive"}}>{myUser.firstname + " " + myUser.lastname}</td>
                                <td>{myUser.email}</td>
                                <td>{myUser.firstname === 'admin' && myUser.lastname === 'admin'?  ''  :  <input type="checkbox" defaultChecked={myUser.newsletter} onChange={e=>ChangeNewsletter(e,myUser._id)}></input>}</td>
                                <td>
                                    {myUser.firstname === 'admin' && myUser.lastname === 'admin'?  ''  :  <Button  variant="danger" className="del-button" onClick={e=> DelUser(myUser._id)}>🗑️</Button>}
                                </td>
                            </tr>

                            )
                        })
                    }
                </tbody>
            </Table>
            </Container>
        </div>  
    );
 }
export {UsersManagement}
