import { Row, Col , Container } from "react-bootstrap"
import {useNavigate} from 'react-router-dom';
import "../Assets/Styles/App.css"
import { useState, useEffect } from "react";

const Accueil = () => {
    let navigate = useNavigate();
    const [Content,setContent] = useState("Info");
    useEffect(()=>{
        switch(Content){
            case "Info":
                document.getElementById("title").innerHTML="Informations";
                document.getElementById("content").innerHTML="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nisl enim. Fusce sit amet interdum elit, quis lobortis ligula. Nunc congue libero at turpis vulputate, sed vulputate nisi feugiat. Integer venenatis risus leo, vel luctus sapien scelerisque sed. Nullam eu neque maximus, suscipit leo id, tempus velit. Morbi rutrum quam nec mi ultrices, nec mollis lorem condimentum. Morbi posuere, dui in aliquet hendrerit, nunc urna hendrerit erat, a vehicula ipsum orci maximus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ipsum ultrices, malesuada enim ac, efficitur lorem.</p>";
                for(let i =0; i<5; i++){
                    document.getElementById("content").innerHTML+="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nisl enim. Fusce sit amet interdum elit, quis lobortis ligula. Nunc congue libero at turpis vulputate, sed vulputate nisi feugiat. Integer venenatis risus leo, vel luctus sapien scelerisque sed. Nullam eu neque maximus, suscipit leo id, tempus velit. Morbi rutrum quam nec mi ultrices, nec mollis lorem condimentum. Morbi posuere, dui in aliquet hendrerit, nunc urna hendrerit erat, a vehicula ipsum orci maximus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ipsum ultrices, malesuada enim ac, efficitur lorem.</p>";
                }
            case "Histo":
                document.getElementById("title").innerHTML="Historique";
                document.getElementById("content").innerHTML="<p>Tommy est trop bon, consectetur adipiscing elit. Nunc quis nisl enim. Fusce sit amet interdum elit, quis lobortis ligula. Nunc congue libero at turpis vulputate, sed vulputate nisi feugiat. Integer venenatis risus leo, vel luctus sapien scelerisque sed. Nullam eu neque maximus, suscipit leo id, tempus velit. Morbi rutrum quam nec mi ultrices, nec mollis lorem condimentum. Morbi posuere, dui in aliquet hendrerit, nunc urna hendrerit erat, a vehicula ipsum orci maximus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ipsum ultrices, malesuada enim ac, efficitur lorem.</p>";
                for(let i =0; i<5; i++){
                    document.getElementById("content").innerHTML+="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nisl enim. Fusce sit amet interdum elit, quis lobortis ligula. Nunc congue libero at turpis vulputate, sed vulputate nisi feugiat. Integer venenatis risus leo, vel luctus sapien scelerisque sed. Nullam eu neque maximus, suscipit leo id, tempus velit. Morbi rutrum quam nec mi ultrices, nec mollis lorem condimentum. Morbi posuere, dui in aliquet hendrerit, nunc urna hendrerit erat, a vehicula ipsum orci maximus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ipsum ultrices, malesuada enim ac, efficitur lorem.</p>";
                }
            case "GestObj":
                document.getElementById("title").innerHTML="Gestion des objets";
                document.getElementById("content").innerHTML="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nisl enim. Fusce sit amet interdum elit, quis lobortis ligula. Nunc congue libero at turpis vulputate, sed vulputate nisi feugiat. Integer venenatis risus leo, vel luctus sapien scelerisque sed. Nullam eu neque maximus, suscipit leo id, tempus velit. Morbi rutrum quam nec mi ultrices, nec mollis lorem condimentum. Morbi posuere, dui in aliquet hendrerit, nunc urna hendrerit erat, a vehicula ipsum orci maximus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ipsum ultrices, malesuada enim ac, efficitur lorem.</p>";
                for(let i =0; i<5; i++){
                    document.getElementById("content").innerHTML+="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nisl enim. Fusce sit amet interdum elit, quis lobortis ligula. Nunc congue libero at turpis vulputate, sed vulputate nisi feugiat. Integer venenatis risus leo, vel luctus sapien scelerisque sed. Nullam eu neque maximus, suscipit leo id, tempus velit. Morbi rutrum quam nec mi ultrices, nec mollis lorem condimentum. Morbi posuere, dui in aliquet hendrerit, nunc urna hendrerit erat, a vehicula ipsum orci maximus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ipsum ultrices, malesuada enim ac, efficitur lorem.</p>";
                }
            case "GestCurio":
                document.getElementById("title").innerHTML="Gestion des curiosité";
                document.getElementById("content").innerHTML="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nisl enim. Fusce sit amet interdum elit, quis lobortis ligula. Nunc congue libero at turpis vulputate, sed vulputate nisi feugiat. Integer venenatis risus leo, vel luctus sapien scelerisque sed. Nullam eu neque maximus, suscipit leo id, tempus velit. Morbi rutrum quam nec mi ultrices, nec mollis lorem condimentum. Morbi posuere, dui in aliquet hendrerit, nunc urna hendrerit erat, a vehicula ipsum orci maximus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ipsum ultrices, malesuada enim ac, efficitur lorem.</p>";
                for(let i =0; i<5; i++){
                    document.getElementById("content").innerHTML+="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nisl enim. Fusce sit amet interdum elit, quis lobortis ligula. Nunc congue libero at turpis vulputate, sed vulputate nisi feugiat. Integer venenatis risus leo, vel luctus sapien scelerisque sed. Nullam eu neque maximus, suscipit leo id, tempus velit. Morbi rutrum quam nec mi ultrices, nec mollis lorem condimentum. Morbi posuere, dui in aliquet hendrerit, nunc urna hendrerit erat, a vehicula ipsum orci maximus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ipsum ultrices, malesuada enim ac, efficitur lorem.</p>";
                }
            case "GestUser":
                document.getElementById("title").innerHTML="Gestion des utilisateurs";
                document.getElementById("content").innerHTML="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nisl enim. Fusce sit amet interdum elit, quis lobortis ligula. Nunc congue libero at turpis vulputate, sed vulputate nisi feugiat. Integer venenatis risus leo, vel luctus sapien scelerisque sed. Nullam eu neque maximus, suscipit leo id, tempus velit. Morbi rutrum quam nec mi ultrices, nec mollis lorem condimentum. Morbi posuere, dui in aliquet hendrerit, nunc urna hendrerit erat, a vehicula ipsum orci maximus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ipsum ultrices, malesuada enim ac, efficitur lorem.</p>";
                for(let i =0; i<5; i++){
                    document.getElementById("content").innerHTML+="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nisl enim. Fusce sit amet interdum elit, quis lobortis ligula. Nunc congue libero at turpis vulputate, sed vulputate nisi feugiat. Integer venenatis risus leo, vel luctus sapien scelerisque sed. Nullam eu neque maximus, suscipit leo id, tempus velit. Morbi rutrum quam nec mi ultrices, nec mollis lorem condimentum. Morbi posuere, dui in aliquet hendrerit, nunc urna hendrerit erat, a vehicula ipsum orci maximus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ipsum ultrices, malesuada enim ac, efficitur lorem.</p>";
                }
            case "News":
                document.getElementById("title").innerHTML="Newsletter";
                document.getElementById("content").innerHTML="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nisl enim. Fusce sit amet interdum elit, quis lobortis ligula. Nunc congue libero at turpis vulputate, sed vulputate nisi feugiat. Integer venenatis risus leo, vel luctus sapien scelerisque sed. Nullam eu neque maximus, suscipit leo id, tempus velit. Morbi rutrum quam nec mi ultrices, nec mollis lorem condimentum. Morbi posuere, dui in aliquet hendrerit, nunc urna hendrerit erat, a vehicula ipsum orci maximus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ipsum ultrices, malesuada enim ac, efficitur lorem.</p>";
                for(let i =0; i<5; i++){
                    document.getElementById("content").innerHTML+="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis nisl enim. Fusce sit amet interdum elit, quis lobortis ligula. Nunc congue libero at turpis vulputate, sed vulputate nisi feugiat. Integer venenatis risus leo, vel luctus sapien scelerisque sed. Nullam eu neque maximus, suscipit leo id, tempus velit. Morbi rutrum quam nec mi ultrices, nec mollis lorem condimentum. Morbi posuere, dui in aliquet hendrerit, nunc urna hendrerit erat, a vehicula ipsum orci maximus enim. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum id ipsum ultrices, malesuada enim ac, efficitur lorem.</p>";
                }
                

        }

    },[Content])
    return (
        <div className="Administration">
            <Row md="auto" style={{marginLeft:"10px", marginTop:"10px"}}>
                <Col md='3' style={{textAlign:"center", marginTop:"3%"}} >
                    <ul style={{listStyleType: "none", padding:"0", border:"solid black 4px", backgroundColor:"#ffc917"}}>
                        <li className="listAccount" style={{marginTop:"4%"}} onClick={e=>setContent("Info")}>Information</li>
                        <li className="listAccount" onClick={e=>setContent("Histo")}>Historique</li>
                        <li className="listAccount" onClick={e=>setContent("GestObj")}>Gestion des objets</li>
                        <li className="listAccount" onClick={e=>setContent("GestCurio")}>Gestion des curiosités</li>
                        <li className="listAccount" onClick={e=>setContent("GestUser")}>Gestion des utilisateurs</li>
                        <li className="listAccount" onClick={e=>setContent("News")}>Newsletter</li>
                        <li className="listAccount" style={{backgroundColor: "#f0560e"}} onClick={e=>navigate('/accueil')}>Deconnexion</li>
                    </ul>
                </Col>

                <Col md='8' style={{textAlign:"center", backgroundColor:"#ffc917", marginTop:"1.5%", marginLeft:"5%",marginBottom:"5%", border:"solid black 4px"}}>
                    <h2 id="title">Informations</h2>
                    <div id="content">

                    </div>



                </Col>
            </Row>
        </div>
    );
 }
export default Accueil
