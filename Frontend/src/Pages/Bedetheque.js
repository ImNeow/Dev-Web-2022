import { Row, Col , Container,Pagination, Card } from "react-bootstrap"
import { useEffect, useState} from 'react'
import Media from 'react-media';

import "../Assets/Styles/App.css"

import '../Assets/Styles/Animation.css'
import marsup from '../Assets/Images/marsupilami-down.png'
import dbz from '../Assets/Images/dbzcloud.png'
import batsignal from '../Assets/Images/batsignal.png'
import imageNotFound from "../Assets/Images/image-non-disponible.webp"

const Animation = {'BD':["anim-marsup",marsup],'Manga':["anim-dbz",dbz],'Comic':["anim-signalbat",batsignal]};


const Bedetheque = (props) => {
  const type= props.type
  const nbrBookPerPage = 15
  const [nbrBookPerRow, setnbrBookPerRow] = useState(5); /*Min : 1 , Max : 6*/
  const [filtre, setFiltre] = useState('alphaAsc');
  const [activePage,setActivePage] = useState(1);
  const [nbrPage,setNbrPage] = useState([]);
  const [listBooks,setListBooks] = useState([])

  const animationClassname = Animation[type][0]
  const animationSrc = Animation[type][1]
 
  useEffect(()=>{
    /* Cette fonction fait un appel à l'API pour récuperer le nombre de Livre par rapport à leurs types
    PRE : /
    POST : /
    */
    fetch("/books/"+type+'/count').then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => {
      const items = []
      for(let i = 0; i<jsonResponse/nbrBookPerPage;i++){
        items.push(i+1)
      }
      setNbrPage(items)
    })
  } ,[type])

  useEffect(()=>{
    /* Cette fonction fait un appel à l'API pour récuperer les objets des BDs par rapport à leurs types
    PRE : /
    POST : /
    */
    fetch("/books/"+type+'/'+filtre+'/'+activePage).then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => {
      setListBooks(jsonResponse)
    })
  },[type,filtre,activePage])

 
  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener('change', () => setnbrBookPerRow(2));
    window.matchMedia("(min-width: 1000px)").addEventListener('change', () => setnbrBookPerRow(3));
    window.matchMedia("(min-width: 1200px)").addEventListener('change', () => setnbrBookPerRow(4));
    window.matchMedia("(min-width: 1400px)").addEventListener('change', () => setnbrBookPerRow(5));
  }, []);
  


 

    return<>
      <Media query="(min-width: 992px) and (min-height : 600px)" render={() =>(<div className="animContainer"><img className={animationClassname} alt="animation" src={animationSrc} ></img></div>)}/>

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
            {
              listBooks.map((myBook,index) => {
                return (
                  <Col key={"Col"+index} style={{marginBottom:'5px'}}>
                    <a data-testid="card-link" href={(myBook._id[0]!=='-' ? '/detail/books/'+myBook._id : "/PageNotFound")} style={{textDecoration:'none'}}>
                      <Card data-testid="card" key={myBook._id}>
                        <Card.Img data-testid="card-img" variant="top" src={(myBook.link.startsWith("https://") ? myBook.link : imageNotFound)}/>
                        <Card.Body data-testid="card-body" style={{backgroundColor:'hsl(52, 97%, 55%)'}}>
                          <Card.Title data-testid="card-title" style={{minHeight:"2em",fontSize:"20px",color:'black'}}>{ myBook.name.length<100 ? myBook.name.length>=0 ? myBook.name : "Nom Introuvable" : myBook.name.slice(0,97)+'...'  }</Card.Title>
                          <Card.Text data-testid="card-text" className="priceBD">{ (myBook.price>=0 ? myBook.price+"€": "Prix indisponible") }</Card.Text>
                        </Card.Body>
                      </Card>
                    </a>
                  </Col>
                )
              })  
            }
          </Row>
          <Row className="justify-content-md-center mb-4">
              <Col md="auto">
                <Pagination>
                {
                nbrPage.map((number) => {
                  return(
                    <Pagination.Item className="custom-pagination" onClick={(e)=>setActivePage(e.currentTarget.innerHTML)} key={number} disabled={number === activePage} active={number === activePage}>
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
    export {Bedetheque}
