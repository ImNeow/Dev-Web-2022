import { useEffect, useState} from "react";
import { Row, Col , Container, Button, Table} from "react-bootstrap"

import axios from "axios";

const CustomTable = (props) => {
    const Objet = props.myObjet
    const type = props.type

    const hidingFunction = props.hiddenFunction
    const CorrectFunction = props.correctFunction
    const WrongFunction = props.wrongFunction

    const [Id,SetId] = useState(0)
    const [Name,setName] = useState("");
    const [Link,setLink] = useState("");
    const [Type,setType] = useState("statuette");
    const [Description,setDescription] = useState("");
    const [Price,setPrice] = useState("");

    const [newType,setNewType] = useState(false);

    const [listType, setListType] = useState([])

    useEffect(()=>{
        /* Cette fonction permet de définir les différents champs d'un objet
        PRE /
        POST : /
        */
        SetId(Objet._id)
        setName(Objet.name);
        setType(Objet.type);
        setLink(Objet.link);
        setDescription(Objet.description);
        setPrice(Objet.price)
        setListType()

    },[])


      function sendForm(){
          /* Cette fonction permet d'enregistrer ou de modifier un objet à envoyer à la db
          PRE : /
          POST : /
          */

        const newObjet ={
            type: Type,
            name: Name,
            link: Link,
            description: Description,
            price: Price,
        };

        //MODIFICATION D'UN OBJET
        if(Id !== ""){
            if(checkFormValidity("put",newObjet)){
                axios.put("/"+type+"/"+Id, newObjet)
                .then((res) =>{
                    console.log(res);
                    hidingFunction();
                    CorrectFunction();
                })
                .catch(err =>{
                    console.log(err);
                    WrongFunction();
                } );
            }else{
                console.log('erreur')
            }
        }else{// AJOUT D'UN OBJET
            if(checkFormValidity("post",newObjet)){
                console.log(type,newObjet)
                axios.post("/"+type+"/", newObjet)
                .then((res) =>{
                    console.log(res);
                    hidingFunction();
                    CorrectFunction();
                })
                .catch(err =>{
                    console.log(err);
                    WrongFunction();
                } );
            }else{
                console.log('erreur')
            }
        }
        
        
        
      }

      function checkFormValidity(typeDeCheck,objet){
        return true
      }

    return (<>
        <div className="CustomTable">
            <Container >
                <Row className="justify-content-md-center mb-4">
                    <Col md="auto">
                        <Table borderless>
                            <tbody>
                                {Id !== ""?<tr><td>ID : </td><td data-testid="id">{Id}</td></tr> : ""}
                                <tr><td>Name : </td><td data-testid="name"><input defaultValue={Name} style={{width:"100%"}} onChange={e=>setName(e.target.value)}></input></td></tr> 
                                <tr><td>Link : </td><td data-testid="link"><input defaultValue={Link} style={{width:"100%"}} onChange={e=>setLink(e.target.value)}></input></td></tr> 
                                {type !== "curiosite"?<tr><td>Type : </td><td data-testid="type">
                                                                <select hidden={newType} defaultValue={"statuette"} onChange={e=>setType(e.target.value)}>
                                                                    <option value={"statuette"} defaultValue={"statuette"}>Statuette</option>
                                                                    <option value={"poster"} defaultValue={"poster"}>Posters</option>
                                                                    <option value={"montre"} defaultValue={"montre"}>Montres</option>
                                                                    <option value={"vaisselles"} defaultValue={"vaisselles"}>Vaisselles</option>
                                                                    <option value={"jeudecarte"} defaultValue={"jeudeCarte"}>Jeu de cartes</option>
                                                                    <option value={"cartepostale"} defaultValue={"cartesPOstales"}>Cartes Postales</option>
                                                                    <option value={"gadgets"} defaultValue={"gadgets"}>Gadgets</option>
                                                                </select>
                                                                <id>
                                                                <input id='newTypeInput' hidden={!newType} disabled={type==="curiosite"}  onChange={e=>setType(e.target.value)}></input>
                                                                    <label for='newTypeCheckBoxValue' hidden={newType}></label> <input hidden={newType} id='newTypeCheckBoxValue' type='checkbox' onClick={e=>setNewType(!newType)}></input>
                                                                </id>
                                                                </td></tr>  : ""}
                                <tr><td>Description : </td><td data-testid="description"><textarea defaultValue={Description} style={{width:'300px', height:'100px'}} onChange={e=>setDescription(e.target.value)}></textarea></td></tr> 
                                {type !== "curiosite"?<tr><td>Prix : </td><td data-testid="prix"><input type="number" defaultValue={Price} onChange={e=>setPrice(e.target.value)}></input>€</td></tr>  : ""}
                            </tbody>
                        </Table>
                    </Col>

                </Row>
                <Row className="justify-content-md-center mb-4">
                    <Col md="auto">
                        <Button variant="success" onClick={e=>sendForm()}>{Id === ""?"Ajouter":"Modifier"}</Button>
                    </Col>
                </Row>

            </Container>

           

        </div>
    </>
    );
 }
export {CustomTable}
