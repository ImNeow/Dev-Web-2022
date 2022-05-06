import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"

import axios from 'axios'
import '../../Assets/Styles/Management.css'

const CuriosityManagement = () => {
    const [listObjets,setlistObjets] = useState([])
    const [refreshList,setRefreshList] = useState(false)

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


      
    return (
        <div className="justify-content-center">
            <h1>Gestion des Curiosités</h1>
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
                                    <Button variant="success">Modifier</Button>
                                </td>
                                <td>
                                    <Button  variant="danger" style={{backgroundColor:'#f0560e'}} onClick={e=> DelObjet(myObject._id,index)}>Supprimer</Button>
                                </td>
                            </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>  
    );
 }

export {CuriosityManagement}
