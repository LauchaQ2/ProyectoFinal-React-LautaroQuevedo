import React from 'react';
import '../NavBar/NavBar.css';
import logo from '../../assets/logo en negro/logo.svg';
import CartWidget from '../CartWidget/CartWidget.js';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function NavBar(){
return(
    <Navbar className="header align-items-center" bg="white" expand="lg">
        <div className="container-fluid d-flex align-items-center justify-content-between mb-0">
        <Navbar.Brand className="align-items-center mb-0"><img id="logo" src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto d-flex align-items-center">
      <Nav.Link className="align-items-center" href="#features">Inicio</Nav.Link>
      <Nav.Link href="#pricing">Productos</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
      <Nav.Link href="#pricing">Nosotros</Nav.Link>
      <Nav.Link><a href="login.html"><img className="imgheader" src="https://i.ibb.co/HGfVk7S/users.png" /></a></Nav.Link>
    </Nav>
    
  </Navbar.Collapse>
        <Nav>
            <Nav.Link><CartWidget/></Nav.Link>
        </Nav>
    </div>
    </Navbar>
)
};