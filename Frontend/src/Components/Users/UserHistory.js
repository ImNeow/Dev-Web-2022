import { useEffect, useState } from "react"
import {Table, Container } from "react-bootstrap"

const UserHistory = () => {
    const [listAchat,setListAchat] = useState([])


    useEffect(()=>{
        const templist = [{"name":"Tintin Chez mémé","date":"29/06/2001"},{"name":"La Bilbiomule de Cordoue","date":"17/02/2020"},{"name":"Ladies with guns","date":"12/09/2001"},{"name":"Goldorak","date":"23/01/2021"}]
        setListAchat(templist)
    },[])
    return (
        <div className="justify-content-center">
            <Container>
            <h1>Gestion des Utilisateurs</h1>
    
            <Table responsive striped hover size="sm" style={{cursor:'pointer'}}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Achat(s)</th>
                        <th>Date</th>
                    </tr>                    
                    
                </thead>
                <tbody>
                    
                    {
                        listAchat.map((myPurchace,index)=>{
                            return(
                                <tr key={index+1}>
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
