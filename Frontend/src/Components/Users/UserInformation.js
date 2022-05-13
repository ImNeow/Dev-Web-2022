import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap"

import axios from "axios";

const UserInformation = () => {
    const [id,setId] = useState("");
    const [firstname,setFirstname] = useState("");
    const [lastname,setLastname] = useState("");
    const [email,setEmail] = useState("");
    const [newsletter,setNewsletter] = useState(localStorage.getItem('newsletter'));

    useEffect(()=>{
        setFirstname(localStorage.getItem('firstname'));
        setLastname(localStorage.getItem('lastname'));
        setEmail(localStorage.getItem('email'));
        setNewsletter(localStorage.getItem('newsletter'));
        setId(localStorage.getItem('id'))
    },[])


    useEffect(()=>{

        const newNewsletter={
            newsletter: newsletter
        }

        axios.put("/users/newsletter/"+localStorage.getItem('id'), newNewsletter)
                .then((res) =>{
                    console.log(res);
                })
                .catch(err =>{
                    console.log(err);
                } );

    },[newsletter])




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
                        <tr><td>Newsletter </td><td><input type="checkbox" onChange={e=>setNewsletter(!newsletter)} defaultChecked={localStorage.getItem('newsletter')==="true"}></input></td></tr> 
                    </tbody>
                </Table>
            </Container>
            

        </div>
    );
 }
export {UserInformation}
