import "../Assets/Styles/CustomNavBar.css"
import {Navbar,Nav,Container,NavDropdown,Form,FormControl,Button,Image} from 'react-bootstrap';


function CustomNavBar() {
    return(<>
    <Navbar bg='dark' className="navbar" expand="lg" >
    <Container>
      <Navbar.Brand href="accueil"><Image width={40} height={40} src='pictures/logo-original.png'></Image></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link className="NavbarLink" href="accueil">Accueil</Nav.Link>
          <NavDropdown menuVariant="dark" title="Bédéthèque" id="basic-nav-dropdown">
            <NavDropdown.Item href="bedetheque">BDs</NavDropdown.Item>
            <NavDropdown.Item href="bedetheque">Mangas</NavDropdown.Item>
            <NavDropdown.Item href="bedetheque">Comics</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="bedetheque">Occasions</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown menuVariant="dark" title="Objets" id="basic-nav-dropdown" >
              <NavDropdown.Item href="objets">Statuettes</NavDropdown.Item>
              <NavDropdown.Item href="objets">Posters</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown menuVariant="dark" title="Divers" id="dropdown-button-drop-end" drop='end'>
                <NavDropdown.Item href="objets">Montres</NavDropdown.Item>
                <NavDropdown.Item href="objets">Vaiselles</NavDropdown.Item>
                <NavDropdown.Item href="objets">Jeu de Cartes</NavDropdown.Item>
                <NavDropdown.Item href="objets">Cartes postales</NavDropdown.Item>
                <NavDropdown.Item href="objets">Gadgets</NavDropdown.Item>
              </NavDropdown>
          </NavDropdown>
          <Nav.Link className="NavbarLink" href="curiosite">Curiosités</Nav.Link>
          <Nav.Link className="NavbarLink" href="propos">À propos</Nav.Link>
          <Nav.Link className="NavbarLink" href="contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Recherche..."
              className="me-2 InputSearch"
              aria-label="Search"
            />
            <Button className='search-button' href="#action/search">
            <Image width={30} height={30} src='pictures/search-button.png' >
            </Image>
          </Button>
          <Button className='account-button' href="account">
            <Image width={30} height={30} src='pictures/login.png'>
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
  
  export default CustomNavBar;
