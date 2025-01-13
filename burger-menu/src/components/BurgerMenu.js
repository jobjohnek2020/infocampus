import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from "react-router-dom";
export default function BurgerMenu() {
  return (
    <Navbar expand="lg" collapseOnSelect sticky='top'>
      <Container fluid>
        <Navbar.Toggle />
        <Navbar.Offcanvas placement="start">
          <Offcanvas.Header closeButton/>
          <Offcanvas.Body>
            <Nav>
              <Nav.Link as={Link} eventKey="home" to="/home">Home</Nav.Link>
              <Nav.Link as={Link} eventKey="about" to="/about">About</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}