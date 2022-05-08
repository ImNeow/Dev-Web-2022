import { Row, Col , Container, Card, Pagination} from "react-bootstrap"
import { useEffect, useState} from 'react'
import Media from 'react-media';

import "../Assets/Styles/App.css"

import '../Assets/Styles/Animation.css'
import gaston_hello from '../Assets/Images/gaston_hello.gif'
import imageNotFound from "../Assets/Images/image-non-disponible.webp"

const Animation = {'statuette':["anim-gaston",gaston_hello]};

const Objets = (props) => {
  const nbrObjetPerPage = 15
  const [filtre, setFiltre] = useState('alphaAsc');
  const [nbrObjetsPerRow, setnbrObjetsPerRow] = useState(5); /*Min : 1 , Max : 6*/
  const [listObjets,setlistObjets] = useState([])
  const [activePage,setActivePage] = useState(1);
  const [nbrPage,setNbrPage] = useState([]);
  const type= props.type

  /*const animationClassname = Animation[type][0]*/
  /*const animationSrc = Animation[type][1]*/

  useEffect(()=>{
    /* Cette fonction fait un appel à l'API pour récuperer le nombre de Livre par rapport à leurs types
    PRE : /
    POST : /
    */
    fetch("/objets/"+type+'/count').then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => {
      const items = []
      for(let i = 0; i<jsonResponse/nbrObjetPerPage;i++){
        items.push(i+1)
      }
      if(items.length!==1){
        setNbrPage(items)
      }
    })
  },[type])


  useEffect(()=>{
    /* Cette fonction fait un appel à l'API pour récupérer les objets des Objets par rapport à leurs types
    PRE : /
    POST : /
    */
    fetch("/objets/"+type+"/"+filtre+'/'+activePage).then(res =>{
      if(res.ok){
        return res.json()
      }
    }).then(jsonResponse => {
      setlistObjets(jsonResponse)
    })
  },[type,filtre,activePage])


  useEffect(() => {
    window.matchMedia("(min-width: 768px)").addEventListener('change', () => setnbrObjetsPerRow(2));
    window.matchMedia("(min-width: 1000px)").addEventListener('change', () => setnbrObjetsPerRow(3));
    window.matchMedia("(min-width: 1200px)").addEventListener('change', () => setnbrObjetsPerRow(4));
    window.matchMedia("(min-width: 1400px)").addEventListener('change', () => setnbrObjetsPerRow(5));
  }, []);
  
  function isImage(url) {
    return /^https?:\/\/.+\.(jpg|JPG|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }


    return<>
      <Media query="(min-width: 992px) and (min-height : 600px)" render={() =>(<div className="animContainer"><img className='anim' alt="gaston" src={Animation.statuette[1]} ></img></div>)}/>
              
      <div className="ListContent">

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
          {
              listObjets.map((myObject,index) => {
                return (
                  <Col key={"Col"+index} style={{marginBottom:'5px'}}>
                    <a data-testid="card-link" href={myObject._id[0]!=='-' ? '/detail/objets/'+myObject._id : "/PageNotFound"} style={{textDecoration:'none'}}>
                      <Card data-testid="card" key={myObject._id}>
                        <Card.Img data-testid="card-img" variant="top" src={isImage(myObject.link) ? myObject.link : imageNotFound}/>
                        <Card.Body data-testid="card-body" style={{backgroundColor:'hsl(52, 97%, 55%)'}}>
                          <Card.Title data-testid="card-title" style={{minHeight:"2em",fontSize:"20px",color:'black'}}>{ myObject.name.length<100 ? myObject.name.length>=0 ? myObject.name : "Nom Introuvable" : myObject.name.slice(0,97)+'...'  }</Card.Title>
                          <Card.Text data-testid="card-text" className="priceBD">{ (myObject.price>0 ? myObject.price+"€": "Prix indisponible") }</Card.Text>
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
                    <Pagination.Item onClick={(e)=>setActivePage(e.currentTarget.innerHTML)} key={number} active={number === activePage}>
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
    export {Objets}
