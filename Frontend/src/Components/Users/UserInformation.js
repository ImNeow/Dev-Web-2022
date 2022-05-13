import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap"

const UserInformation = () => {
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [newsletter,setNewsletter] = useState("");

    useEffect(()=>{
        setFirstname(localStorage.getItem('firstname'));
        setLastname(localStorage.getItem('lastname'));
        setEmail(localStorage.getItem('email'));
        setNewsletter(localStorage.getItem('newsletter'));
    },[])

    return (
        <div className="userInformation">
            <Container fluid>
                <h1>Informations</h1>
                <Table responsive striped size="sm" >
                    <thead>
                    </thead>
                    <tbody>
                        <tr><td>Nom</td><td>{firstname}</td></tr>
                        <tr><td>Prénom</td><td>{lastname}</td></tr>
                        <tr><td>Email </td><td>{email}</td></tr>
                        <tr><td>Newsletter </td><td>{newsletter}</td></tr> 
                    </tbody>
                </Table>
            </Container>
            
        </div>
    );
 }
export {UserInformation}
