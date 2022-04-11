import React from 'react';
import {Row, Col, Button ,Image} from "react-bootstrap"
import {useState} from 'react'
import   {useParams} from "react-router-dom";

import "../Assets/Styles/App.css"


const Detail = (props) => {
    let { id } = useParams();
    const [item, setItem] = useState("");
    const[price, setPrice] = useState("");
    const[ReservingSentence, setReservingSentence] = useState("");  
    const[LinkImage, setLinkImage] = useState("");  
    const type = props.type;
    const [loaded,setLoaded] = useState(false)

    if(!loaded){
      if(type === "books"){
        fetch("/books/"+id).then(res =>{
          if(res.ok){
            return res.json()
          }
        }).then(jsonResponse => {
            setItem(jsonResponse)
            setLinkImage(jsonResponse.link);
            setPrice("Prix : "+jsonResponse.price+"€")
            setReservingSentence("Reserver le Livre")
        })
      }else if(type === "objet"){
        fetch("/objets/"+id).then(res =>{
          if(res.ok){
            return res.json()
          }
        }).then(jsonResponse => {
            setItem(jsonResponse)
            setLinkImage(jsonResponse.link);
            setPrice("Prix : "+jsonResponse.price+"€")
            setReservingSentence("Reserver l'Objet")
        })
      }else 
    
      if(type === "curiosite"){
        fetch("/curiosite/"+id).then(res =>{
          if(res.ok){
            return res.json()
          }
        }).then(jsonResponse => {
            setItem(jsonResponse)
            setReservingSentence("Reserver la Curiosité")
        })
      }
      setLoaded(true)
    }
          
    
    return (
        <div>
            <h1 id='titleDetail'>{item.name }</h1>
            <hr/>
            <Row md="auto">
                <Col md='6' style={{textAlign:"center"}} >
                    <Image src={LinkImage} alt='Image du livre' style={{maxWidth:"40%"}} />
                </Col>
                <Col md='6' style={{marginTop:"5%"}}>
                    <h4 style={{textDecoration:"underline", margin: "15px  0"}}>Description</h4>
                    <p>{item.description}
                    </p>
                    <h4 style={{margin: "15px  0"}}><span style={{color: "red"}}>{price}</span></h4>
                    <Button variant="warning" style={{minWidth:"100%", fontSize:"20px", fontWeight:"bolder"}}>{ReservingSentence}</Button>
                </Col>
            </Row>
        </div>
    );
};

export default Detail;