import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark"  fixed="top">
  <Container>
  <Navbar.Brand to="/home#home" style={{color: "yellow", fontSize: "2rem", fontWeight: "bolder"}}>Ashik</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto" style={{marginLeft: "45%", }}>
      <Nav.Link as={HashLink} style={{color: "white", fontSize: "1rem", fontWeight: "bolder"}} to="/home#home">Home</Nav.Link>
      <Nav.Link as={HashLink} style={{color: "white", fontSize: "1rem", fontWeight: "bolder"}} to="/home#about">About</Nav.Link>
      <Nav.Link as={HashLink} style={{color: "white", fontSize: "1rem", fontWeight: "bolder"}} to="/home#projects">Projects</Nav.Link>
      <Nav.Link as={HashLink} style={{color: "white", fontSize: "1rem", fontWeight: "bolder"}} to="/home#blog">Blog</Nav.Link>
      <Nav.Link as={HashLink} style={{color: "white", fontSize: "1rem", fontWeight: "bolder"}} to="/home#contact">Contact</Nav.Link>
      
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;