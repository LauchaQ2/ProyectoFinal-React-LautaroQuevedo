import * as React from 'react';
import { useContext, useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from '../../assets/YoTomo/logo.svg';
import {Link} from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css';
import ThemeContext from '../../context/ThemeContext';
import CartContext from '../../context/CartContext';
import MenuIcon from '@mui/icons-material/Menu';
import Offcanvas from 'react-bootstrap/Offcanvas'
import '../../pages/ProductsPage/ProductPage.css'
import Login from '../Login/Login';

export default function NavBar() {
  const [show, setShow] = useState(false);
  const [size, setSize] = useState(window.innerWidth);
    
   useEffect(()=>{
   const handleSize = () =>{
       setSize(window.innerWidth);
   }
   window.addEventListener("resize", handleSize)
   },[])


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Offcanvas className="background-page offcanvas" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <Link to="/">
            <Button style={{color: "#000000"}}>Inicio</Button>
          </Link>
          <Link to="/category/all">
            <Button style={{color: "#000000"}}>Productos</Button>
          </Link>
          <Link to="/contact">
            <Button style={{color: "#000000"}}>Contacto</Button>
          </Link>
          <Link to="/aboutus">
            <Button style={{color: "#000000"}}>Nosotros</Button>
          </Link>
          <Link className="invisible" to="/addproducts">
            <Button className="" style={{color: "#000000"}}>AddProduct</Button>
          </Link>

          </ul>

        </Offcanvas.Body>
      </Offcanvas>

      <Navbar className='navb-background navb mb-4 pr-0' bg="shadow p-3" expand="lg">
      <Container fluid className='navb-background'>
      <Button className={size < 500 ? "ps-0 pr-0" : null} variant="primary" onClick={handleShow}>
       <MenuIcon />
       </Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/">
          <img id={size < 500 ? "logo-mobile" : "logo"} src={logo} />
          </Link>
          </Typography>
          <Button className={size < 500 ? "padding-0" : null} style={{color: "#000000"}}>
          <CartWidget size={size}/>
          </Button>
          <Button className={size < 500 ? "padding-0" : null} style={{color: "#000000"}}>
          <Login size={size}/>
          </Button>

        
        </Container>
        </Navbar>
    
    
</>


  );
}