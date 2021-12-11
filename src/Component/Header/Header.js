import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Ashik</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" style={{marginLeft: "45%"}}>
      <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} to="/about#about">About</Nav.Link>
      <Nav.Link as={HashLink} to="/projects#projects">Projects</Nav.Link>
      <Nav.Link as={HashLink} to="/blogs#blogs">Blogs</Nav.Link>
      <Nav.Link as={HashLink} to="/contact#contact">Contact</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link to="#deets">More deets</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;