
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from '../assets/IMG_5239.PNG'
import './index.css'
function NavBar() {
  return (
    <>
      {['md'].map((expand) => (
        <Navbar key={expand} bg='dark' data-bs-theme="dark" expand={expand} sticky="top" className="padding-0 z-depth-5 bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><img className='logoSize' src={logo} alt='logo' /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              bg='dark' data-bs-theme="dark" 
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={logo} alt="Logo" style={{ maxWidth: '100px' }} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">About</Nav.Link>
                  <Nav.Link href="#action1">Blog</Nav.Link>
                  <Nav.Link href="#action2">Ministry</Nav.Link>                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;