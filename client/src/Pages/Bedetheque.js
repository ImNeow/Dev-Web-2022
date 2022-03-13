import { Card,CardGroup, Row, Col } from "react-bootstrap"
import { useEffect, useState} from 'react'

const Bedetheque = () => {
  const [listBD, setlistBD] = useState([])

  useEffect(()=>{
    fetch("/api/getImages").then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => setlistBD(jsonResponse))
  },[])

    return <div>
      <Row xs= {1} md = {5}>
        {listBD.map((BD, index) =>{
          console.log(BD)
          return (
          <Col key = {"Col" + index}><Card key={index}>
          <Card.Img variant="top" src = {BD.link} />
          <Card.Body>
          <Card.Title>{BD.name}</Card.Title>
          </Card.Body>
          </Card></Col>)
          })}
       
      </Row>

    </div>
    }
    export default Bedetheque
