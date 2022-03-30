import React from 'react';
import {Row, Col, Button ,Image} from "react-bootstrap"
import { useEffect, useState} from 'react'
import "../Assets/Styles/App.css"
import   {useParams} from "react-router-dom";


const Detail = () => {
    let { id } = useParams();
    const [book, setBook] = useState("");

    useEffect(()=>{
        /* Cette fonction fait une demande à l'API pour récupérer un seul livre
        PRE : /
        POST : /
        */
        fetch("/books/"+id).then(res =>{
          if(res.ok){
            return res.json()
          }
        }).then(jsonResponse => {
          setBook(jsonResponse)
          console.log(jsonResponse)
        })
      },[])
      
    return (
        <div>
            <h1 id='titleDetail'>{book.name }</h1>
            <hr/>
            <Row md="auto">
                <Col md='6'>
                    <Image src={book.link} alt='Image du livre' style={{maxWidth:"60%"}} />
                </Col>
                <Col md='6' style={{marginTop:"5%"}}>
                    <h4 style={{textDecoration:"underline", margin: "15px  0"}}>Description</h4>
                    <p>{book.description}
                    </p>
                    <h4 style={{margin: "15px  0"}}>Prix : <span style={{color: "red"}}>7.50€</span></h4>
                    <Button variant="warning" style={{minWidth:"100%", fontSize:"20px", fontWeight:"bolder"}}>Réserver le livre</Button>
                </Col>
            </Row>
        </div>
    );
};

export default Detail;