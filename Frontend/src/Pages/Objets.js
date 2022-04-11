import { Row, Col , Container } from "react-bootstrap"
import { useEffect, useState} from 'react'

import "../Assets/Styles/App.css"

const Objets = (props) => {
  const [filtre, setFiltre] = useState('alphaAsc');
  const [nbrObjetsPerRow, setnbrObjetsPerRow] = useState(5); /*Min : 1 , Max : 6*/
  const type= props.type


  useEffect(()=>{
    /* Cette fonction fait un appel à l'API pour récuperer les objets des Objets par rapport à leurs types
    PRE : /
    POST : /
    */
    fetch("/objets/"+type+"/"+filtre).then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => {
      refreshListObjets(jsonResponse)
    })
  })

  function refreshListObjets(resp){
    /* Cette fonction permet de reactualiser la liste des livres affichée en fonction du filtre
    PRE : la réponse de la DB
    POST : /
    */
    let cards = ''
    
    resp.map((myObjet,index)=>{
      let nameObjet= " ";
      nameObjet = myObjet.name;
        cards += "<div class='col' key='Col'+"+index+" style='margin-bottom:5px'><a href='/detail/books/"+myObjet._id+"' style='text-decoration:none;color:black'><div class='card' key="+myObjet._id+"><img class='card-img' variant='top' src='"+myObjet.link+"'/><div class='card-body' style='background-color:hsl(52, 97%, 55%)'><div class='card-title' style='min-height:2em,font-size:20px,color:black'>"+nameObjet+"</div><div class='card-text priceBD'>"+myObjet.price+"€</div></div></div></a></div>"
      })
    document.getElementById('cards').innerHTML = cards
  }


  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener('change', () => setnbrObjetsPerRow(2));
    window.matchMedia("(min-width: 1000px)").addEventListener('change', () => setnbrObjetsPerRow(3));
    window.matchMedia("(min-width: 1200px)").addEventListener('change', () => setnbrObjetsPerRow(4));
    window.matchMedia("(min-width: 1400px)").addEventListener('change', () => setnbrObjetsPerRow(5));
  }, []);
  

    return <div className="ListContent">
              <Container>
                <Row>
                  <Col>
                    <select id="filterSelect" defaultValue={"alphaAsc"} className="filter" onChange={e => setFiltre(e.target.selectedOptions[0].value)}>
                      <option value="alphaAsc" >Nom: A-Z</option>
                      <option value="alphaDesc" >Nom: Z-A</option>
                      <option value="priceAsc" >Prix: par ordre croissant</option>
                      <option value="priceDesc" >Prix: par ordre décroissant</option>
                    </select>
                  </Col>
                </Row>
                <Row id='cards' xs={1} md={nbrObjetsPerRow}>
                  
                </Row>
              </Container>
            </div>
    }
    export default Objets
