import React, {useState, useContext} from 'react';
import '../ModalCart/ModalCart.css';
import { Button } from '@mui/material';
import CartContext from '../../context/CartContext';
import Modal from 'react-bootstrap/Modal'
import RemoveIcon from '@mui/icons-material/Remove';

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
            <Modal.Footer>
                <Button onClick={clear} style={{background: "red"}} variant="contained">Vaciar Carrito</Button>
            </Modal.Footer>
    </div>
        )
}