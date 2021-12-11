import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from '../../assets/YoTomo/logo.svg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export default function NavBar() {


  return (
    <Box sx={{
        flexGrow: 1 
      }}>
      <Navbar bg="light" expand="lg">
      <Container fluid>
                
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">
          <img id="logo" src={logo} />
          </Link>
          </Typography>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <Link to="/">
            <Button style={{color: "#000000"}}>Inicio</Button>
          </Link>
          <Link to="/categories">
            <Button style={{color: "#000000"}}>Productos</Button>
          </Link>
          <Link to="/contact">
            <Button style={{color: "#000000"}}>Contacto</Button>
          </Link>
          <Link to="/aboutus">
            <Button style={{color: "#000000"}}>Nosotros</Button>
          </Link>
          </ul>
          </Navbar.Collapse>
            <ShoppingCartIcon sx={{ color: "#000" }} fontSize="small" />
        
        </Container>
        </Navbar>
    </Box>
  );
}

/*import React from 'react';
import '../NavBar/NavBar.css';
import logo from '../../assets/YoTomo/logo.svg';
import CartWidget from '../CartWidget/CartWidget.js';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';

export default function NavBar(){
return(
    <Navbar className="header align-items-center" bg="white" expand="lg">
        <div className="container-fluid d-flex align-items-center justify-content-between mb-0">
        <Navbar.Brand className="align-items-center mb-0"><img id="logo" src={logo} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto d-flex align-items-center">
      <Link to="/">
        <Nav.Link className="align-items-center" href="#features">Inicio</Nav.Link>
      </Link>
      <Nav.Link href="#pricing">Productos</Nav.Link>
      <Link to="/contact">
        <Nav.Link href="/contact">Contacto</Nav.Link>
      </Link>
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
};*/