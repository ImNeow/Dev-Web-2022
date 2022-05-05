import { useEffect, useState} from "react";
import { Row, Col , Container, Button, Table} from "react-bootstrap"

import axios from "axios";

const Edit = (props) => {
    const Objet = props.myObjet
    
    const [Id,SetId] = useState(0)
    const [Name,setName] = useState("");
    const [Link,setLink] = useState("");
    const [Type,setType] = useState("");
    const [Description,setDescription] = useState("");
    const [Price,setPrice] = useState("");

    useEffect(()=>{
        SetId(Objet._id)
        setName(Objet.name);
        setType(Objet.type);
        setLink(Objet.link);
        setDescription(Objet.description);
        setPrice(Objet.price)
        console.log(Objet)
    },[])

      function sendForm(){

        const newObjet ={
            type: Type,
            name: Name,
            link: Link,
            description: Description,
            price: Price,
        };

        console.log(newObjet)
        axios.put("/objets/"+Id, newObjet)
        .then((res) =>{
            console.log(res);
        })
        .catch(err => console.log(err));
        
      }

    return (<>
        <div className="Edit">
            <Container >
                <Row className="justify-content-md-center mb-4">
                    <Col md="auto">
                        <Table borderless>
                            <tbody>
                                <tr><td>ID : </td><td data-testid="id">{Id}</td></tr> 
                                <tr><td>Name : </td><td data-testid="name"><input defaultValue={Name} onChange={e=>setName(e.target.value)}></input></td></tr> 
                                <tr><td>Link : </td><td data-testid="link"><input defaultValue={Link} onChange={e=>setLink(e.target.value)}></input></td></tr> 
                                <tr><td>Type : </td><td data-testid="type"><input defaultValue={Type} onChange={e=>setType(e.target.value)}></input></td></tr>  
                                <tr><td>Description : </td><td data-testid="description"><input defaultValue={Description} onChange={e=>setDescription(e.target.value)}></input></td></tr> 
                                <tr><td>Prix : </td><td data-testid="prix"><input defaultValue={Price} onChange={e=>setPrice(e.target.value)}></input></td></tr> 
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
export {Edit}
