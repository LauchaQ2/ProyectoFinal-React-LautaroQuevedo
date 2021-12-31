import React, {useState, useContext} from 'react';
import '../ModalCart/ModalCart.css';
import { Button } from '@mui/material';
import CartContext from '../../context/CartContext';
import Modal from 'react-bootstrap/Modal'
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from "react-router-dom";


export default function ModalCart({products}){
      
    const {clearCart,removeItem} = useContext(CartContext)

    const totalProducts = products.map(product => product.quantity).reduce((prev, curr) => prev + curr, 0);
    const totalPrice = products.map(product => product.price).reduce((prev, curr) => prev + curr, 0);

    const clear = () =>{
        clearCart();
    }
    
    
    
    return(
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
                     <Link to={"/cart"}>
                         <Button style={{background: "red"}} variant="contained">ir al carrito</Button>
                    </Link>
                <Button onClick={clear} style={{background: "red"}} variant="contained">Vaciar Carrito</Button>
                </div>
            }
            
    </div>
        )
}