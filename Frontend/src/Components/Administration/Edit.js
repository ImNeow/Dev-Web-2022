import { useEffect, useState} from "react";
import { Row, Col , Container, Button, Table} from "react-bootstrap"
import   {useParams} from "react-router-dom";

import axios from "axios";

const Edit = (props) => {
    let { id } = useParams();
    const type = props.type;

    const [defaultItem, setDefaultItem] = useState("");

    const [Name,setName] = useState("");
    const [Link,setLink] = useState("");
    const [Type,setType] = useState("");
    const [Description,setDescription] = useState("");
    const [Price,setPrice] = useState(0);

    useEffect(()=>{
        fetch("/"+type+"/detail/"+id).then(res =>{
          if(res.ok){
            return res.json()
          }
        }).then(jsonResponse => {
            setDefaultItem(jsonResponse)
            setName(jsonResponse.name)
            setLink(jsonResponse.link)
            setType(jsonResponse.type)
            setDescription(jsonResponse.description)
            setPrice(jsonResponse.price)
        })
      },[])

      useEffect(()=>{
        console.log(Name, Type, Price, Description, Link)
        
      },[Name,Link,Price,Description,Type])


      function sendForm(){
        const newObjet ={
            type: Type,
            name: Name,
            link: Link,
            description: Description,
            price: Price,
        };
        console.log(newObjet)

        axios.put("/objets/"+id, newObjet)
        .then(res => console.log(res))
        .catch(err => console.log(err));
        
      }

    return (
        <div className="Edit">
            <Container >
                <Row className="justify-content-md-center mb-4">
                    <Col md="auto">
                        <Table borderless>
                            <tbody>
                                <tr><td>ID : </td><td>{defaultItem._id}</td></tr> 
                                <tr><td>Name : </td><td><input defaultValue={defaultItem.name} onChange={e=>setName(e.target.value)}></input></td></tr> 
                                <tr><td>Link : </td><td><input defaultValue={defaultItem.link} onChange={e=>setLink(e.target.value)}></input></td></tr> 
                                <tr><td>Type : </td><td><input defaultValue={defaultItem.type} onChange={e=>setType(e.target.value)}></input></td></tr>  
                                <tr><td>Description : </td><td><input defaultValue={defaultItem.description} onChange={e=>setDescription(e.target.value)}></input></td></tr> 
                                <tr><td>Prix : </td><td><input defaultValue={defaultItem.price} onChange={e=>setPrice(e.target.value)}></input></td></tr> 
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
    );
 }
export {Edit}
