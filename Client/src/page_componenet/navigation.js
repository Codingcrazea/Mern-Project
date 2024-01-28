import React from "react";
import "./page.css";
import "../App.css"
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, Nav, Container, NavDropdown ,Carousel,Button} from 'react-bootstrap';

function Navigation(){
   return(<>
   <Navbar expand="lg" className="bg-body-dark">
      <Container>
        <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
             
             
            <NavDropdown title="Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="/contact">Contact us</NavDropdown.Item>
              <NavDropdown.Item href="/disclaimer">
                Disclaimer
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
              <NavDropdown.Item href="/about">About</NavDropdown.Item>
            </NavDropdown>
            
            
            
            <Nav.Link className="h_login" href="/login">Login</Nav.Link>
            <Nav.Link className="h_register" href="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
   
   </>)
}
export default Navigation;