import React, {useState, useContext, useEffect} from 'react';
import '../ModalCart/ModalCart.css';
import { Button } from '@mui/material';
import CartContext from '../../context/CartContext';
import Modal from 'react-bootstrap/Modal'
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from "react-router-dom";
import Offcanvas from 'react-bootstrap/Offcanvas'


export default function ModalCart({products,showCart}){
      
    const {clearCart,removeItem, totalPrice,open, setOpen, addItem} = useContext(CartContext)

    const totalProducts = products.map(product => product.quantity).reduce((prev, curr) => prev + curr, 0);
   // const totalPrice = products.map(product => product.price).reduce((prev, curr) => prev + curr, 0);
   const [size, setSize] = useState(window.innerWidth);
    
   useEffect(()=>{
   const handleSize = () =>{
       setSize(window.innerWidth);
   }
   window.addEventListener("resize", handleSize)
   },[])

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

    <div className='modalCart background-page'>
        <div className='d-flex background-page header-modal mb-2 justify-content-between align-content-center p-3 rounded'>
         <p className='text-center background-page d-flex align-items-center ms-3 mb-0 title-cart'>Tienes {totalProducts} productos agregados</p>
         <button className='btn background-page' onClick={handleClose}>X</button>
        </div>
        <div>
        {products.map(product => {
                return(
                    <div className='container-fluid detail border-box mb-2 d-flex justify-content-between align-items-center' key={product.id}>
                        <img className="img-fluid img-cart" src={product.pictureURL} alt="imagen del producto" />
                        <p className={size > 500 ? 'fontsizeCart bold' : 'fs-7 w-25 text-center text-wrap'}>{product.title}</p>
                        <p className={size > 500 ? 'fontsizeCart bold' : 'fs-7 w-25 text-center text-wrap'}>${product.quantity*product.price}</p>
                        <Button className={size> 500 ? 'button-remove' : 'button-remove-mobile'} onClick={()=>removeItem(product.id,product.quantity)} variant="contained">
                        <RemoveIcon fontSize="small"/>
                        </Button>
                        <input type="text" className={size> 500 ? 'button-remove' : 'button-remove-mobile'} readOnly value={product.quantity}/>
                        <Button className={size> 500 ?'button-remove' : 'button-remove-mobile'} onClick={()=>addItem(product.id,product.quantity)} variant="contained">
                        +
                        </Button>
                    </div>
                )
            })}
            { products.length === 0 ?
                <></>
            :
            <div className={size > 500 ? 'container-fluid d-flex justify-content-around align-items-center mb-3 mt-2' : 'container-fluid d-block'}>
            <h6 className={size > 500 ? 'total-style': 'fs-2 mt-2'}>Total: ${totalPrice}</h6>
                     <Link to={"/cart"}>
                         <Button className={size > 500 ? 'button-cart': 'button-cart-mobile mt-2'} onClick={handleClose} variant="contained">INICIAR COMPRA</Button>
                    </Link>
                <Button className={size > 500 ? 'button-cart' : 'button-cart-mobile mt-2'} onClick={clear} variant="contained">Vaciar Carrito</Button>
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