import { Card,Row, Col } from "react-bootstrap"
import { useEffect, useState} from 'react'
import "../Assets/Styles/App.css"

const Bedetheque = (props) => {
  const [listBD, setlistBD] = useState([])
  const nbrBDPerRow = 5; /*Min : 1 , Max : 6*/
  const type= props.type


  useEffect(()=>{
    fetch("/books/getBooks?type="+type).then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => {
      setlistBD(jsonResponse)
      console.log(jsonResponse)
    })
  },[])
  
    return <div className="ListContent">
        <Row xs={1} md={nbrBDPerRow}>
        {
          listBD.map((myBD,index) => {
            let nameBD= " ";
              if(myBD.name.length>27){
                nameBD = myBD.name.substr(0,25)+"...";
              }
              else{
                nameBD = myBD.name;
              }
            return (
              <Col key={"Col"+index}>
                <Card key={index}>
                  <Card.Img variant="top" src={myBD.link}/>
                  <Card.Body>
                  <Card.Title style={{fontSize:"22.5px"}}>{nameBD}</Card.Title>
                    <Card.Text className="priceBD">
                      7.50€
                    </Card.Text>
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
