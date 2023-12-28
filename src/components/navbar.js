import React  from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../App.css';

function NavBar() {
  return (
    <>
    <Navbar expand="lg" className="">
      <Container>
      <Navbar.Brand href="/" className='store-name'>CFA Oviedo/North UCF</Navbar.Brand>
      </Container>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <NavDropdown.Item href="/about">Meet the Operators</NavDropdown.Item>
              <NavDropdown.Item href="/meet-the-team">Meet the Team</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Training" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.pathway.cfahome.com/">Pathway</NavDropdown.Item>
              <NavDropdown.Item href="/path-for-growth">Path For Growth</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Food Safety" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.pathway.cfahome.com/">Food Safety Guidelines</NavDropdown.Item>
              <NavDropdown.Item href="https://chick-fil-a.compliancemetrix.com/rql/p/ahomevrestauranthomeactivator">SAFE/ERQA</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/uniforms">Uniforms</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar
