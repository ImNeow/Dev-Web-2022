import { Card,Row, Col , Container } from "react-bootstrap"
import { useEffect, useState} from 'react'
import Media from 'react-media';

import "../Assets/Styles/App.css"

import marsup from '../Assets/Images/marsupilami-down.png'

const Bedetheque = (props) => {
  const [listBD, setlistBD] = useState([])
  const [nbrBookPerRow, setnbrBookPerRow] = useState(5); /*Min : 1 , Max : 6*/
  const type= props.type


  useEffect(()=>{
    /* Cette fonction fait un appel à l'API pour récuperer les objets des BDs par rapport à leurs types
    PRE : /
    POST : /
    */
    fetch("/books/Books?type="+type).then(res =>{
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
              <Media query="(min-width: 992px) and (min-height : 600px)" render={() =>(<img className='anim' src={marsup} ></img>)}/>
              <Container>
                <Row xs={1} md={nbrBookPerRow}>
                  {
                    listBD.map((myBD,index) => {
                      let nameBD= " ";
                      nameBD = myBD.name;
                      return (
                        <Col key={"Col"+index} style={{marginBottom:'5px'}}>
                          <a href='/detail' style={{textDecoration:'none'}}>
                            <Card key={index}>
                              <Card.Img variant="top" src={myBD.link}/>
                              <Card.Body style={{backgroundColor:'hsl(52, 97%, 55%)'}}>
                                <Card.Title style={{minHeight:"2em",fontSize:"20px",color:'black'}}>{nameBD}</Card.Title>
                                <Card.Text  className="priceBD">7.50€</Card.Text>
                              </Card.Body>
                            </Card>
                          </a>
                        </Col>
                      )
                    })  
                  }
                </Row>
              </Container>
            </div>
    }
    export default Bedetheque
