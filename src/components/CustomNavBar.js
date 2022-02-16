import "../styles/CustomNavBar.css"
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';

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
            <NavDropdown.Item href="#action/2.1">BDs</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.2">Mangas</NavDropdown.Item>
            <NavDropdown.Item href="#action/2.3">Comics</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/2.4">Occasions</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Merchandising" id="basic-nav-dropdown" >
              <NavDropdown title="Figurines" id="basic-nav-dropdown"drop="end">
                <NavDropdown.Item href="#action/3.1">BDs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Mangas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Comics</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Divers" id="dropdown-button-drop-end" drop='end'>
                <NavDropdown.Item href="#action/4.1">Décoration</NavDropdown.Item>
                <NavDropdown.Item href="#action/4.2">Montres</NavDropdown.Item>
                <NavDropdown.Item href="#action/4.3">Ex-Libris</NavDropdown.Item>
                <NavDropdown.Item href="#action/4.4">Posters/Affiche</NavDropdown.Item>
                <NavDropdown.Item href="#action/4.5">Cartes postales</NavDropdown.Item>
                <NavDropdown.Item href="#action/4.6">Gadgets</NavDropdown.Item>
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
          <Button className='account-button' variant="warning" href="#action/account">
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
