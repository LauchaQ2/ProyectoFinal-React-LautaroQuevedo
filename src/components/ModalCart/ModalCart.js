import React, {useState, useContext} from 'react';
import '../ModalCart/ModalCart.css';
import { Button } from '@mui/material';
import CartContext from '../../context/CartContext';
import Modal from 'react-bootstrap/Modal'
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas'


export default function ModalCart({products,showCart}){
      
    const {clearCart,removeItem, totalPrice} = useContext(CartContext)

    const totalProducts = products.map(product => product.quantity).reduce((prev, curr) => prev + curr, 0);
   // const totalPrice = products.map(product => product.price).reduce((prev, curr) => prev + curr, 0);

    const clear = () =>{
        clearCart();
    }
    const [show, setShow] = useState(showCart);

    const handleClose = () => setShow(!showCart);
    const handleShow = () => setShow(true);
  
    
    
    return(

    
        <Offcanvas className="offcanvas-carrito" show={show} onHide={handleClose}>
        <Offcanvas.Header className='d-flex justify-content-between shadow p-3 mb-5 bg-body rounded' closeButton>
         <p className='text-center mb-0 title-cart'>Tienes {totalProducts} productos agregados</p>
        </Offcanvas.Header>
        <Offcanvas.Body className='d'>
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
            <div className='container-fluid d-flex justify-content-around align-items-center mt-2'>
            <h6 className='total-style'>Total: {totalPrice}</h6>
                     <Link to={"/cart"}>
                         <Button className='button-cart' style={{background: "red"}} variant="contained">COMPRAR</Button>
                    </Link>
                <Button className='button-cart' onClick={clear} style={{background: "red"}} variant="contained">Vaciar Carrito</Button>
                </div>
            }

        </Offcanvas.Body>
      </Offcanvas>
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