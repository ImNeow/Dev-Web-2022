import { Card,Row, Col , Container } from "react-bootstrap"
import { useEffect, useState} from 'react'
import Media from 'react-media';

import "../Assets/Styles/App.css"


const Curiosite = () => {
    const [listCuriosite, setlistCuriosite] = useState([])
    const [nbrCuriositePerRow, setnbrCuriositePerRow] = useState(5); /*Min : 1 , Max : 6*/
  
  
    useEffect(()=>{
      /* Cette fonction fait un appel à l'API pour récuperer les objets des BDs par rapport à leurs types
      PRE : /
      POST : /
      */
      fetch("/curiosite/").then(res =>{
        if(res.ok){
          return res.json()
        }
      }).then(jsonResponse => {
        setlistCuriosite(jsonResponse)
      })
    },[])
  
  
    useEffect(() => {
      window.matchMedia("(min-width: 768px)").addEventListener('change', () => setnbrCuriositePerRow(2));
      window.matchMedia("(min-width: 1000px)").addEventListener('change', () => setnbrCuriositePerRow(3));
      window.matchMedia("(min-width: 1200px)").addEventListener('change', () => setnbrCuriositePerRow(4));
      window.matchMedia("(min-width: 1400px)").addEventListener('change', () => setnbrCuriositePerRow(5));
    }, []);
    
  
      return <div className="ListContent">
                <Container>
                  <Row xs={1} md={nbrCuriositePerRow}>
                    {
                      listCuriosite.map((myCuriosite,index) => {
                        let nameBD= " ";
                        nameBD = myCuriosite.name;
                        return (
                          <Col key={"Col"+index} style={{marginBottom:'5px'}}>
                            <a href={'/detail/curiosite/'+myCuriosite._id} style={{textDecoration:'none'}}>
                              <Card key={myCuriosite._id}>
                                <Card.Img variant="top" src={myCuriosite.link}/>
                                <Card.Body style={{backgroundColor:'hsl(52, 97%, 55%)'}}>
                                  <Card.Title style={{minHeight:"2em",fontSize:"20px",color:'black'}}>{nameBD}</Card.Title>
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
      export default Curiosite
  