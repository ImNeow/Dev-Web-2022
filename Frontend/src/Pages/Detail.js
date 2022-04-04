import React from 'react';
import {Row, Col, Button ,Image} from "react-bootstrap"
import { useEffect, useState} from 'react'
import "../Assets/Styles/App.css"
import   {useParams} from "react-router-dom";


const Detail = (props) => {
    let { id } = useParams();
    const [item, setItem] = useState("");
    const[price, setPrice] = useState(""); 
    const type = props.type

    useEffect(()=>{
        /* Cette fonction fait une demande à l'API pour récupérer un seul livre
        PRE : /
        POST : /
        */
        
      
       if(type == "books"){
          fetch("/books/"+id).then(res =>{
            if(res.ok){
              return res.json()
            }
          }).then(jsonResponse => {
            setItem(jsonResponse)
            console.log(jsonResponse)
            setPrice("Prix : "+jsonResponse.price+"€")
          })
        }else if(type == "objet"){
          fetch("/objet/"+id).then(res =>{
            if(res.ok){
              return res.json()
            }
          }).then(jsonResponse => {
            setItem(jsonResponse)
            setPrice("Prix : "+jsonResponse.price+"€")
          })
        }else 
      
        if(type == "curiosite"){
          fetch("/curiosite/"+id).then(res =>{
            if(res.ok){
              return res.json()
            }
          }).then(jsonResponse => {
            setItem(jsonResponse)
          })
        }
        },[])
          
    
    return (
        <div>
            <h1 id='titleDetail'>{item.name }</h1>
            <hr/>
            <Row md="auto">
                <Col md='6'>
                    <Image src={item.link} alt='Image du livre' style={{maxWidth:"60%"}} />
                </Col>
                <Col md='6' style={{marginTop:"5%"}}>
                    <h4 style={{textDecoration:"underline", margin: "15px  0"}}>Description</h4>
                    <p>{item.description}
                    </p>
                    <h4 style={{margin: "15px  0"}}><span style={{color: "red"}}>{price}</span></h4>
                    <Button variant="warning" style={{minWidth:"100%", fontSize:"20px", fontWeight:"bolder"}}>Réserver le livre</Button>
                </Col>
            </Row>
        </div>
    );
};

export default Detail;