import { Card,Row, Col } from "react-bootstrap"
import { useEffect, useState} from 'react'
import "../Assets/Styles/App.css"

const Bedetheque = (props) => {
  const [listBD, setlistBD] = useState([])
  const [nbrBookPerRow, setnbrBookPerRow] = useState(5); /*Min : 1 , Max : 6*/
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

  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener('change', () => setnbrBookPerRow(2));
    window.matchMedia("(min-width: 1000px)").addEventListener('change', () => setnbrBookPerRow(3));
    window.matchMedia("(min-width: 1200px)").addEventListener('change', () => setnbrBookPerRow(4));
    window.matchMedia("(min-width: 1400px)").addEventListener('change', () => setnbrBookPerRow(5));
  }, []);
  
    return <div className="ListContent">
        <Row xs={1} md={nbrBookPerRow}>
        {
          listBD.map((myBD,index) => {
            let nameBD= " ";
            
              nameBD = myBD.name;

            return (
              <Col key={"Col"+index}>
                <Card key={index}>
                  <Card.Img variant="top" src={myBD.link}/>
                  <Card.Body>
                    <Card.Title style={{minHeight:"2em",fontSize:"22.5px"}}>{nameBD}</Card.Title>
                    <Card.Text  className="priceBD">7.50€</Card.Text>
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
