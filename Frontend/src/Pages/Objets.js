import { Card,Row, Col , Container } from "react-bootstrap"
import { useEffect, useState} from 'react'

import "../Assets/Styles/App.css"

const Objets = (props) => {
  const [listObjets, setlistObjets] = useState([])
  const [nbrObjetsPerRow, setnbrObjetsPerRow] = useState(5); /*Min : 1 , Max : 6*/
  const type= props.type


  useEffect(()=>{
    /* Cette fonction fait un appel à l'API pour récuperer les objets des Objets par rapport à leurs types
    PRE : /
    POST : /
    */
    fetch("/objets/"+type).then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => {
      setlistObjets(jsonResponse)
      console.log(jsonResponse)
    })
  },[])


  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener('change', () => setnbrObjetsPerRow(2));
    window.matchMedia("(min-width: 1000px)").addEventListener('change', () => setnbrObjetsPerRow(3));
    window.matchMedia("(min-width: 1200px)").addEventListener('change', () => setnbrObjetsPerRow(4));
    window.matchMedia("(min-width: 1400px)").addEventListener('change', () => setnbrObjetsPerRow(5));
  }, []);
  

    return <div className="ListContent">
              <Container>
                <Row xs={1} md={nbrObjetsPerRow}>
                  {
                    listObjets.map((myObjet,index) => {
                      let nameObjet= " ";
                      nameObjet = myObjet.name;
                      return (
                        <Col key={"Col"+index} style={{marginBottom:'5px'}}>
                          <a href={'/detail/objet/'+myObjet._id} style={{textDecoration:'none'}}>
                            <Card key={myObjet._id}>
                              <Card.Img variant="top" src={myObjet.link}/>
                              <Card.Body style={{backgroundColor:'hsl(52, 97%, 55%)'}}>
                                <Card.Title style={{minHeight:"2em",fontSize:"20px",color:'black'}}>{nameObjet}</Card.Title>
                                <Card.Text  className="priceObjet">{myObjet.price}€</Card.Text>
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
    export default Objets
