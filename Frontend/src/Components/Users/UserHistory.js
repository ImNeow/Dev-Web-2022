import { useState } from "react"
import {Table, Container } from "react-bootstrap"

const UserHistory = () => {
    const [listAchat,setListAchat] = useState([])

    return (
        <div className="justify-content-center">
            <Container>
            <h1>Gestion des Utilisateurs</h1>
    
            <Table responsive striped hover size="sm" style={{cursor:'pointer'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Achat</th>
                        <th>Date</th>
                    </tr>                    
                    
                </thead>
                <tbody>
                    
                    {
                        listAchat.map((myPurchace,index)=>{
                            return(
                                <tr key={myPurchace._id}>
                                <td>{index+1}</td>
                                <td>{myPurchace.name}</td>
                                <td>{myPurchace.date}</td>
                            </tr>

                            )
                        })
                    }
                </tbody>
            </Table>
            </Container>
        </div> 
 )}
export {UserHistory}
