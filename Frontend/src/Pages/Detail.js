import React, { useEffect } from 'react';
import {Row, Col, Button ,Image, Container} from "react-bootstrap"
import {useState} from 'react'
import   {useParams} from "react-router-dom";

import imageNotFound from "../Assets/Images/image-non-disponible.webp"

import "../Assets/Styles/App.css"


const Detail = (props) => {
    let { id } = useParams();
    const type = props.type;
    const [item, setItem] = useState("");
    const [ReservedButton,setReservedButton] = useState()
    
    useEffect(()=>{
      /* Cette fonction fait un appel à l'API pour récuperer les détails d'un objet à partir de son ID
      PRE : /
      POST : /
      */
      fetch("/"+type+"/detail/"+id).then(res =>{
        if(res.ok){
          return res.json()
        }
      }).then(jsonResponse => {
          setItem(jsonResponse)
          if (type === "books" || type === "objets"){
              setReservedButton(<Button variant="warning" style={{minWidth:"100%", fontSize:"20px", fontWeight:"bolder"}}>Réserver</Button>)    
          }
      })
    },[])
    
    function isImage(url) {
    /* Cette fonction permet de vérifier si l'url est bien une image
        PRE : une url
        POST :  True => si l'url est valide
                False = > si l'url est invalide
    */
        return /^https?:\/\/.+\.(jpg|JPG|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }

      
    return (
        <div>
            <h1 id='titleDetail'>{item.name}</h1>
            <hr/>
            <Container>
            <Row md="auto">
                <Col md='6' style={{textAlign:"center"}} >
                    <Image src={isImage(item.link) ? item.link : imageNotFound} alt='Image du livre' style={{maxWidth:"60%"}} />
                </Col>
                <Col md='6' style={{marginTop:"5%"}}>
                    <h4 style={{textDecoration:"underline", margin: "15px  0"}}>Description</h4>
                    <p>{item.description}
                    </p>
                    <h4 style={{margin: "15px  0"}}><span style={{color: "red"}}>{(item.price>0 ? item.price+"€": "") }</span></h4>
                    {ReservedButton}

                </Col>
            </Row>
            </Container>
        </div>
    );
};

export {Detail};