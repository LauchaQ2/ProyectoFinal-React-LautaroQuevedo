import React, {useState, useContext} from 'react';
import '../ModalCart/ModalCart.css';
import { Button } from '@mui/material';
import CartContext from '../../context/CartContext';
import Modal from 'react-bootstrap/Modal'
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas'


export default function ModalCart({products,showCart}){
      
    const {clearCart,removeItem, totalPrice,open, setOpen} = useContext(CartContext)

    const totalProducts = products.map(product => product.quantity).reduce((prev, curr) => prev + curr, 0);
   // const totalPrice = products.map(product => product.price).reduce((prev, curr) => prev + curr, 0);

    const clear = () =>{
        clearCart();
    }
    const [show, setShow] = useState(showCart);

    const handleClose = () => {
        setOpen(!open);
        console.log(showCart)
    }
    const handleShow = () => setShow(true);
  
    
    
    return(

    <div className='modalCart'>
        <div className='d-flex header-modal justify-content-between align-content-center mb-2 p-3 bg-body rounded'>
         <p className='text-center d-flex align-items-center mb-0 title-cart'>Tienes {totalProducts} productos agregados</p>
         <button className='btn' onClick={handleClose}>X</button>
        </div>
        <div>
        {products.map(product => {
                return(
                    <div className='container-fluid d-flex justify-content-between align-items-center' key={product.id}>
                        <img className="img-fluid img-cart" src={product.pictureURL} alt="imagen del producto" />
                        <p className='fontsizeCart bold'>{product.title}</p>
                        <p className='fontsizeCart'>${product.quantity*product.price}</p>
                        <span className='fontsizeCart'>Cant: {product.quantity}</span>
                        <Button className='button-remove' onClick={()=>removeItem(product.id)} style={{background: "red"}} variant="contained">
                        <RemoveIcon fontSize="small"/>
                        </Button>
                    </div>
                )
            })}
            { products.length === 0 ?
                <></>
            :
            <div className='container-fluid d-flex justify-content-around align-items-center mb-3 mt-2'>
            <h6 className='total-style'>Total: {totalPrice}</h6>
                     <Link to={"/cart"}>
                         <Button className='button-cart' onClick={handleClose} style={{background: "red"}} variant="contained">COMPRAR</Button>
                    </Link>
                <Button className='button-cart' onClick={clear} style={{background: "red"}} variant="contained">Vaciar Carrito</Button>
                </div>
            }
            </div>

            </div>
        )
}


/*
<div className='carrito'>
            <p>Tienes {totalProducts} productos agregados</p>
        {products.map(product => {
                return(
                    <div className='item-cart-list' key={product.id}>
                        <div className="item-card-img">
                        <img src={product.pictureURL} alt="imagen del producto" />
                        </div>
                        <p>{product.title}</p>
                        <p>${product.quantity*product.price}</p>
                        <span>Cant: {product.quantity}</span>
                        <Button onClick={()=>removeItem(product.id)} style={{background: "red"}} variant="contained">
                        <RemoveIcon fontSize="small"/>
                        </Button>
                    </div>
                )
            })}
            { products.length === 0 ?
                <></>
            :
            <div className='container-fluid d-flex justify-content-around mt-2'>
            <h6>Total: {totalPrice}</h6>
                     <Link to={"/cart"}>
                         <Button style={{background: "red"}} variant="contained">ir al carrito</Button>
                    </Link>
                <Button onClick={clear} style={{background: "red"}} variant="contained">Vaciar Carrito</Button>
                </div>
            }
            
    </div>*/