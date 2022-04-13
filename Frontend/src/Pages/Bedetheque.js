import { Row, Col , Container,Pagination } from "react-bootstrap"
import { useEffect, useState} from 'react'
import   {useParams} from "react-router-dom";
import Media from 'react-media';

import "../Assets/Styles/App.css"

import '../Assets/Styles/Animation.css'
import marsup from '../Assets/Images/marsupilami-down.png'
import dbz from '../Assets/Images/dbzcloud.png'
import batsignal from '../Assets/Images/batsignal.png'

const Animation = {'BD':["anim-marsup",marsup],'Manga':["anim-dbz",dbz],'Comic':["anim-signalbat",batsignal]};


const Bedetheque = (props) => {
  const [nbrBookPerRow, setnbrBookPerRow] = useState(5); /*Min : 1 , Max : 6*/
  const [filtre, setFiltre] = useState('alphaAsc');
  const type= props.type
  const [page,setPage] = useState(1);
  const [nbrPage,setNbrPage] = useState([1,2]);

  const animationClassname = Animation[type][0]
  const animationSrc = Animation[type][1]
  

  fetch("/books/"+type+'/count').then(res =>{
    if(res.ok){
      return res.json()
    }
  }).then(jsonResponse => {
    console.log(jsonResponse)
  })
 

  useEffect(()=>{
    /* Cette fonction fait un appel à l'API pour récuperer les objets des BDs par rapport à leurs types
    PRE : /
    POST : /
    */
    fetch("/books/"+type+'/'+filtre+'/'+page).then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => {
      refreshListBooks(jsonResponse)
    })
  })

  function refreshListBooks(resp){
    /* Cette fonction permet de reactualiser la liste des livres affichée en fonction du filtre
    PRE : la réponse de la DB
    POST : /
    */
    let cards = ''
    
    resp.map((myBD,index)=>{
      let nameBD= " ";
      nameBD = myBD.name;
        cards += "<div class='col' key='Col'+"+index+" style='margin-bottom:5px'><a href='/detail/books/"+myBD._id+"' style='text-decoration:none;color:black'><div class='card' key="+myBD._id+"><img class='card-img' variant='top' src='"+myBD.link+"'/><div class='card-body' style='background-color:hsl(52, 97%, 55%)'><div class='card-title' style='min-height:2em,font-size:20px,color:black'>"+nameBD+"</div><div class='card-text priceBD'>"+myBD.price+"€</div></div></div></a></div>"
      })
    document.getElementById('cards').innerHTML = cards
  }
 
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
          <Row id='cards' xs={1} md={nbrBookPerRow}>
            
          </Row>
          <Row className="justify-content-md-center mb-4">
              <Col md="auto">
                <Pagination>
                {
                nbrPage.map((number) => {
                  return(
                    <Pagination.Item onClick={(e)=>setPage(e.currentTarget.innerHTML)} key={number} active={number == page}>
                    {number}
                    </Pagination.Item>
                 );
                })
                
                }

                </Pagination>
              </Col>
          </Row>
        </Container>
      </div>
      </> 
    }
    export default Bedetheque
