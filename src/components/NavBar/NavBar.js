import React from 'react';
import '../NavBar/NavBar.css';
import logo from '../../assets/logo en negro/logo_large.png';
import CartWidget from '../CartWidget/CartWidget.js';

export default function NavBar(){
return(
    <header className="header">
        <div className="divLogo"> 
            <img id="logo" src={logo} />
        </div>
        <ul className="menu">
            <li><a className="linkStyle" href="index.html">Inicio</a></li>
            <li><a className="linkStyle" href="products.html">Productos</a></li>
            <li><a className="linkStyle" href="contact.html">Contacto</a></li>
            <li><a className="linkStyle" href="about.html">Nosotros</a></li>
        </ul>
        <ul className="menu2">
            <CartWidget/>
            <li><a href="login.html"> <img className="imgheader" src="https://i.ibb.co/HGfVk7S/users.png" /></a></li>
        </ul>
    </header>
)
};