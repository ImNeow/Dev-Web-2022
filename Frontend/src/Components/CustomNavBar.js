import "../Assets/Styles/CustomNavBar.css"
import {Navbar,Nav,Container,NavDropdown,Form,FormControl,Button,Image} from 'react-bootstrap';
import { useState} from 'react'

import logo from "../Assets/Images/logo-original.png"
import searchbutton from "../Assets/Images/search-button.png"
import accountbutton from "../Assets/Images/login.png"



function CustomNavBar() {
  const [searchInput, setSearchInput] = useState("")

  function handleKeyDown(event){
    /*
      Cette fonction récupère les entrées du clavier 
      PRE : l'evenement correspondant aux entrées clavier 
      POST : /
    */
    if(event.key === 'Enter'){
      event.preventDefault();
      document.getElementById('searchButton').click()
    }
  }

  return(<>
    <Navbar bg='dark' className="navbar" expand="lg" >
    <Container>
      <Navbar.Brand href="/accueil"><Image width={40} height={40} src={logo}></Image></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="NavbarLink" href="/accueil">Accueil</Nav.Link>
          <NavDropdown menuVariant="dark" title="Bédéthèque" id="basic-nav-dropdown">
            <NavDropdown.Item href="/bedetheque/BD">BDs</NavDropdown.Item>
            <NavDropdown.Item href="/bedetheque/Manga">Mangas</NavDropdown.Item>
            <NavDropdown.Item href="/bedetheque/Comic">Comics</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/bedetheque/occasion">Occasions</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown menuVariant="dark" title="Objets" id="basic-nav-dropdown" >
              <NavDropdown.Item href="/objet/statuette">Statuettes</NavDropdown.Item>
              <NavDropdown.Item href="/objet/poster">Posters</NavDropdown.Item>
              <NavDropdown.Item target="_blank" href="https://www.befr.ebay.be/sch/cejunito/m.html">Ebay</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown menuVariant="dark" title="Divers" id="dropdown-button-drop-end" drop='end'>
                <NavDropdown.Item href="/objet/montre">Montres</NavDropdown.Item>
                <NavDropdown.Item href="/objet/vaisselle">Vaisselles</NavDropdown.Item>
                <NavDropdown.Item href="/objet/jeudecarte">Jeu de Cartes</NavDropdown.Item>
                <NavDropdown.Item href="/objet/cartepostale">Cartes postales</NavDropdown.Item>
                <NavDropdown.Item href="/objet/gadgets">Gadgets</NavDropdown.Item>
              </NavDropdown>
          </NavDropdown>
          <Nav.Link className="NavbarLink" href="/curiosite">Curiosités</Nav.Link>
          <Nav.Link className="NavbarLink" href="/propos">À propos</Nav.Link>
          <Nav.Link className="NavbarLink" href="/contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Form className="d-flex" id='inputSearch'>
            <FormControl
              type="search"
              placeholder="Recherche..."
              className="me-2 InputSearch"
              aria-label="Search"
              value={searchInput.val}
              onChange={event => setSearchInput(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button id='searchButton' className='search-button' href={'/search/'+searchInput} >
              <Image width={30} height={30} src={searchbutton} >
              </Image>
            </Button>
          <Button className='account-button' href={  localStorage.length == 0 ? "/login":"/administration"  }>
            <Image width={30} height={30} src={accountbutton}>
            </Image>
          </Button>
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  </>
  );  
  }
  
  export {CustomNavBar};
