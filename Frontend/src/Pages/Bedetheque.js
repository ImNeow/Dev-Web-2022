import { Card,Row, Col , Container } from "react-bootstrap"
import { useEffect, useState} from 'react'
import Media from 'react-media';

import "../Assets/Styles/App.css"

import '../Assets/Styles/Animation.css'
import marsup from '../Assets/Images/marsupilami-down.png'
import dbz from '../Assets/Images/dbzcloud.png'


const Animation = {'BD':["anim-marsup",marsup],'Manga':["anim-dbz",dbz],'Comic':["anim-XXX","XXX"]};

const Bedetheque = (props) => {
  const [listBD, setlistBD] = useState([])
  const [nbrBookPerRow, setnbrBookPerRow] = useState(5); /*Min : 1 , Max : 6*/
  const type= props.type

  const animationClassname = Animation[type][0]
  const animationSrc = Animation[type][1]

  useEffect(()=>{
    /* Cette fonction fait un appel à l'API pour récuperer les objets des BDs par rapport à leurs types
    PRE : /
    POST : /
    */
    fetch("/books/"+type).then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => {
      setlistBD(jsonResponse)
    })
  },[])


  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener('change', () => setnbrBookPerRow(2));
    window.matchMedia("(min-width: 1000px)").addEventListener('change', () => setnbrBookPerRow(3));
    window.matchMedia("(min-width: 1200px)").addEventListener('change', () => setnbrBookPerRow(4));
    window.matchMedia("(min-width: 1400px)").addEventListener('change', () => setnbrBookPerRow(5));
  }, []);
  

    return<>
      <Media query="(min-width: 992px) and (min-height : 600px)" render={() =>(<div className="animContainer"><img className={animationClassname} src={animationSrc} ></img></div>)}/>

    <div className="ListContent">
              
                
              <Container className="containerContent">
                <Row xs={1} md={nbrBookPerRow}>
                  {
                    listBD.map((myBD,index) => {
                      let nameBD= " ";
                      nameBD = myBD.name;
                      return (
                        <Col key={"Col"+index} style={{marginBottom:'5px'}}>
                          <a href={'/detail/books/'+myBD._id} style={{textDecoration:'none'}}>
                            <Card key={myBD._id}>
                              <Card.Img variant="top" src={myBD.link}/>
                              <Card.Body style={{backgroundColor:'hsl(52, 97%, 55%)'}}>
                                <Card.Title style={{minHeight:"2em",fontSize:"20px",color:'black'}}>{nameBD}</Card.Title>
                                <Card.Text  className="priceBD">{myBD.price}€</Card.Text>
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
            </> 
    }
    export default Bedetheque
