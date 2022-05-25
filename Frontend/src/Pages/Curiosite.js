import { Card,Row, Col , Container } from "react-bootstrap"
import { useEffect, useState} from 'react'

import "../Assets/Styles/App.css"

import imageNotFound from "../Assets/Images/image-non-disponible.webp"


const Curiosite = () => {
    const [listCuriosite, setlistCuriosite] = useState([])
    const [nbrCuriositePerRow, setnbrCuriositePerRow] = useState(5); /*Min : 1 , Max : 6*/
  
  
    useEffect(()=>{
      /* Cette fonction fait un appel à l'API pour récuperer les objets des BDs par rapport à leurs types
      PRE : /
      POST : /
      */
      fetch("/curiosites/").then(res =>{
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
    
    function isImage(url) {
      return /^https?:\/\/.+\.(jpg|JPG|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }
      return <div className="ListContent">
                <Container>
                  <Row xs={1} md={nbrCuriositePerRow}>
                    {
                      listCuriosite.map((myCuriosite,index) => {
                        let nameBD= " ";
                        nameBD = myCuriosite.name;
                        return (
                          <Col key={"Col"+index} style={{marginBottom:'5px'}}>
                            <a data-testid="card-link" href={'/detail/curiosites/'+myCuriosite._id} style={{textDecoration:'none'}}>
                              <Card data-testid="card" key={myCuriosite._id}>
                                <Card.Img data-testid="card-img" variant="top" src={isImage(myCuriosite.link) ? myCuriosite.link : imageNotFound}/>
                                <Card.Body data-testid="card-body" style={{backgroundColor:'hsl(52, 97%, 55%)'}}>
                                  <Card.Title data-testid="card-title"style={{minHeight:"2em",fontSize:"20px",color:'black'}}>{nameBD}</Card.Title>
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
      export {Curiosite}
  