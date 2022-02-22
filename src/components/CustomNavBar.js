import "../styles/CustomNavBar.css"
import {Navbar,Nav,Container,NavDropdown,Form,FormControl,Button,Image} from 'react-bootstrap';


function CustomNavBar() {
    return(<>
    <Navbar className="navbar" expand="lg">
    <Container>
      <Navbar.Brand href="accueil"><Image width={40} height={40} src='pictures/logo.png'></Image></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="accueil">Accueil</Nav.Link>
          <NavDropdown title="Bédéthèque" id="basic-nav-dropdown">
            <NavDropdown.Item href="bedetheque">BDs</NavDropdown.Item>
            <NavDropdown.Item href="bedetheque">Mangas</NavDropdown.Item>
            <NavDropdown.Item href="bedetheque">Comics</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="bedetheque">Occasions</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Merchandising" id="basic-nav-dropdown" >
              <NavDropdown title="Figurines" id="basic-nav-dropdown"drop="end">
                <NavDropdown.Item href="merchandising">BDs</NavDropdown.Item>
                <NavDropdown.Item href="merchandising">Mangas</NavDropdown.Item>
                <NavDropdown.Item href="merchandising">Comics</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Divers" id="dropdown-button-drop-end" drop='end'>
                <NavDropdown.Item href="divers">Décoration</NavDropdown.Item>
                <NavDropdown.Item href="divers">Montres</NavDropdown.Item>
                <NavDropdown.Item href="divers">Ex-Libris</NavDropdown.Item>
                <NavDropdown.Item href="divers">Posters/Affiche</NavDropdown.Item>
                <NavDropdown.Item href="divers">Cartes postales</NavDropdown.Item>
                <NavDropdown.Item href="divers">Gadgets</NavDropdown.Item>
              </NavDropdown>
          </NavDropdown>
          <Nav.Link href="curiosite">Curiosités</Nav.Link>
          <Nav.Link href="propos">À propos</Nav.Link>
          <Nav.Link href="contact">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Recherche..."
              className="me-2"
              aria-label="Search"
            />
            <Button className='search-button' variant="warning" href="#action/search">
            <Image width={30} height={30} src='pictures/search-button.png' >
            </Image>
          </Button>
          <Button className='account-button' variant="warning" href="account">
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
