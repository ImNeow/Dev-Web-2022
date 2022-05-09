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
    const [Type,setType] = useState("");
    const [Description,setDescription] = useState("");
    const [Price,setPrice] = useState("");

    const [newType,setNewType] = useState(false);

    const [listType, setListType] = useState([])

    useEffect(()=>{
        SetId(Objet._id)
        setName(Objet.name);
        setType(Objet.type);
        setLink(Objet.link);
        setDescription(Objet.description);
        setPrice(Objet.price)
        setListType()

    },[])


      function sendForm(){

        const newObjet ={
            type: Type,
            name: Name,
            link: Link,
            description: Description,
            price: Price,
        };

        if(checkFormValidity(newObjet)){
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
            console.log('Tout Va Bien')
        }else{
            console.log('erreur')
        }
        
        
      }

      function checkFormValidity(objet){
        return true
            //
      }

    return (<>
        <div className="CustomTable">
            <Container >
                <Row className="justify-content-md-center mb-4">
                    <Col md="auto">
                        <Table borderless>
                            <tbody>
                                <tr><td>ID : </td><td data-testid="id">{Id}</td></tr> 
                                <tr><td>Name : </td><td data-testid="name"><input defaultValue={Name} onChange={e=>setName(e.target.value)}></input></td></tr> 
                                <tr><td>Link : </td><td data-testid="link"><input defaultValue={Link} onChange={e=>setLink(e.target.value)}></input></td></tr> 
                                <tr><td>Type : </td><td data-testid="type">
                                                                <select hidden={newType}>
                                                                    <option selected defaultValue={"Statuette"}>Statuette</option>
                                                                    <option defaultValue={"Poster"}>Posters</option>
                                                                    <option defaultValue={"Montre"}>Montres</option>
                                                                    <option defaultValue={"Vaisselles"}>Vaisselles</option>
                                                                    <option defaultValue={"JeudeCarte"}>Jeu de cartes</option>
                                                                    <option defaultValue={"CartesPOstales"}>Cartes Postales</option>
                                                                    <option defaultValue={"Gadgets"}>Gadgets</option>
                                                                </select>
                                                                <id>
                                                                <input id='newTypeInput' hidden={!newType} disabled={type==="curiosite"}  onChange={e=>setType(e.target.value)}></input>
                                                                    <label for='newTypeCheckBoxValue' hidden={newType}>Nouveau Type ?</label> <input hidden={newType} id='newTypeCheckBoxValue' type='checkbox' onClick={e=>setNewType(!newType)}></input>
                                                                </id>
                                                                </td></tr>
                                <tr><td>Description : </td><td data-testid="description"><textarea defaultValue={Description} style={{width:'300px', height:'100px'}} onChange={e=>setDescription(e.target.value)}></textarea></td></tr> 
                                <tr><td>Prix : </td><td data-testid="prix"><input disabled={type==="curiosite"} defaultValue={Price} onChange={e=>setPrice(e.target.value)}></input></td></tr> 
                            </tbody>
                        </Table>
                    </Col>

                </Row>
                <Row className="justify-content-md-center mb-4">
                    <Col md="auto">
                        <Button variant="success" onClick={e=>sendForm()}>Update</Button>
                    </Col>
                </Row>

            </Container>

           

        </div>
    </>
    );
 }
export {CustomTable}
