import React, {useEffect, useState, useContext} from 'react';
import './Cart.css';
import { Link } from "react-router-dom";
import CartContext from '../../context/CartContext';
import { Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import Checkout from '../Checkout/Checkout';

export default function Cart(){

    const [size, setSize] = useState(window.innerWidth);
    
    useEffect(()=>{
      const handleSize = () =>{
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", handleSize)
    },[])

    const [total, setTotal] = useState([])
    const { productCarts, clearCart, removeItem, totalPrice, checkOutModal, setCheckOutModal, addItem} = useContext(CartContext)

    const [open, setOpen] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
  
      const handleClose = () => {
        setOpen(false);
      };

    const handleCheckout = () =>{
        setCheckOutModal(!checkOutModal)
    }

    const clear = () =>{
        clearCart();
        setTotal([]);
    } 
     productCarts.map((productCart) => {
        const tot = productCart.price * productCart.quantity
        total.push(tot);
    })
    return(
        <div className={productCarts.length === 0 ? "container contvoid d-flex align-content-around flex-wrap mt-3" : "container mt-3"}>
        <div className={productCarts.length < 5 && productCarts.length > 0 ? "container contCart mt-3" : null}>
        {productCarts.length === 0 ?
            <>
                <div className='container-fluid d-flex justify-content-center'>
                    <h3>Mmmm.. yo sé que tenés sed, andá a llenar el carrito</h3>
                </div>
                <div className='container-fluid d-flex justify-content-center'>
                        <Link to="/category/all">
                            <Button className='button-to-products bg-red' style={{background: "red", color: "black"}}>¡A comprar!</Button>
                        </Link>
                </div>
            </>
            :
        <table class="table">
        <thead>
            <tr>
                <th className='cartTitles' scope="col">Nombre</th>
                <th className='cartTitles' scope="col">P. Unit.</th>
                <th className='cartTitles' scope="col">P. Total</th>
                <th className='cartTitles' scope="col">Cantidad</th>
            </tr>
        </thead>
        {productCarts.map(productCart => {
                return(   
                    <>                 
                        <tbody>
                            <tr>
                            <td className={size > 500 ? 'fontsize' : 'fs-7 text-center border'}>
                            <Link className='no-dec' to={`/product/${productCart.id}`}>                           
                            {productCart.title}
                            </Link>
                            </td>
                            <td className={size > 500 ? 'fontsize' : "fs-7 text-center border"}>${productCart.price}</td>
                            <td className={size > 500 ? 'fontsize' : "fs-7 text-center border"}>${productCart.price * productCart.quantity}</td>
                            <td className={size > 500 ? 'fontsize' : "fs-7 text-center border"}>{productCart.quantity}</td>
                            <td className={size > 500 ? 'fontsize' : 'd-flex'}>
                            <Button className={size> 500 ? 'button-remove' : 'button-remove-mobile'}
                             onClick={() =>{
                                        removeItem(productCart.id,productCart.quantity)
                                        setTotal([]);
                                    }} style={{background: "red"}} variant="contained">
                              <RemoveIcon fontSize="small"/>
                            </Button>
                            <Button className={size> 500 ? 'button-remove' : 'button-remove-mobile'} onClick={()=>addItem(productCart.id,productCart.quantity)} style={{background: "red"}} variant="contained">
                            +
                            </Button>
                            </td>
                            </tr>
                        </tbody>
                        </>
                )
            })}
            </table>}
            {productCarts.length === 0 ?
            <div className='container-fluid d-flex justify-content-start'>
            </div>
            :
            <div className={size > 500 ? 'container-fluid d-flex justify-content-around align-items-center mb-3 mt-2' : 'container-fluid text-center d-block'}>
                <h3 className={size > 500 ? 'total-style': 'fs-2 mt-2'}>Total: ${totalPrice}</h3>
                
                <Button className={size > 500 ? 'button-cart': 'button-cart-mobile mt-2'} onClick={handleClickOpen} variant="contained">COMPRAR</Button>
                <Checkout
                open={open} 
                handleClose={handleClose} 
                total={totalPrice}
                size={size}
            />  
                <Link to={"/category/all"}>
                    <Button className={size > 500 ? 'button-cart': 'button-cart-mobile mt-2 mb-2'} variant="contained">SEGUIR COMPRANDO</Button>
                </Link>
            </div>
            }
        </div>
        </div>
    )
}

