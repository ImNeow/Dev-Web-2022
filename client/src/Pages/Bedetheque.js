import { Card,Row, Col } from "react-bootstrap"
import { useEffect, useState} from 'react'

const Bedetheque = () => {
  const [listBD, setlistBD] = useState([])
  const nbrBDPerRow = 5; /*Min : 1 , Max : 6*/


  useEffect(()=>{
    fetch("/api/getImages").then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => {
      setlistBD(jsonResponse)
    })
  },[])
  
    return <div className="ListContent">
        <Row xs={1} md={nbrBDPerRow}>
        {
          listBD.map((myBD,index) => {
            return (
              <Col key={"Col"+index}>
                <Card key={index}>
                  <Card.Img variant="top" src={myBD.link}/>
                  <Card.Body>
                    <Card.Title>{myBD.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            )
          })  
        }
        </Row>

    </div>
    }
    export default Bedetheque
