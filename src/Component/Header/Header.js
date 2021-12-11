import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand to="/home#home">Md.Ashik</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" style={{marginLeft: "45%", }}>
      <Nav.Link as={HashLink} style={{color: "white"}} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} style={{color: "white"}} to="/home#about">About</Nav.Link>
      <Nav.Link as={HashLink} style={{color: "white"}} to="/home#projects">Projects</Nav.Link>
      <Nav.Link as={HashLink} style={{color: "white"}} to="/home#blogs">Blogs</Nav.Link>
      <Nav.Link as={HashLink} style={{color: "white"}} to="/home#contact">Contact</Nav.Link>
      
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;