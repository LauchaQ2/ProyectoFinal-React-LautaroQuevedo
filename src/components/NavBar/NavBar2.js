import React from 'react'
import './NavBar2.css'
import logo from '../../assets/logomangas.png';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CartWidget from '../CartWidget/CartWidget'

export default function NavBar2() {

    return(
        <AppBar position="static">
            <nav>
                <div className="container-logo">
                    <img src={logo} alt="Logo ecommerce"/>
                </div>
                <div className="container-navegation">
                    <ul>
                        <li><Button variant="outlined">Home</Button></li>
                        <li><Button variant="outlined">Products</Button></li>
                        <li><Button variant="outlined">Contact</Button></li>
                        <li><Button variant="outlined">About</Button></li>
                    </ul>  
                    <CartWidget />
                </div> 
            </nav>
        </AppBar>
    )
}