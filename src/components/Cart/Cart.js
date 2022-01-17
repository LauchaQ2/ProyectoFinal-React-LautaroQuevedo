import React, {useEffect, useState, useContext} from 'react';
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import './Cart.css';
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import CartContext from '../../context/CartContext';
import Modal from 'react-bootstrap/Modal'
import { Button } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import Checkout from '../Checkout/Checkout';
import ModalCart from '../ModalCart/ModalCart'
import PayModal from '../PayModal/PayModal';

export default function Cart(){

    

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
        console.log(checkOutModal)
    }

    const clear = () =>{
        clearCart();
        setTotal([]);
    } 
     productCarts.map((productCart) => {
        const tot = productCart.price * productCart.quantity
        total.push(tot);
    })
    console.log(total)
    return(
        <div className={productCarts.length === 0 ? "container contvoid d-flex align-content-around flex-wrap mt-3" : "container mt-3"}>
        {productCarts.length === 0 ?
            <>
                <div className='container-fluid d-flex justify-content-center'>
                    <h3>Mmmm.. yo sé que tenés sed, andá a llenar el carrito</h3>
                </div>
                <div className='container-fluid d-flex justify-content-center'>
                        <Link to="/category/all">
                            <Button style={{background: "red", color: "black"}}>¡A comprar!</Button>
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
                            <td className='fontsize'>
                            <Link className='no-dec' to={`/product/${productCart.id}`}>                           
                            {productCart.title}
                            </Link>
                            </td>
                            <td className='fontsize'>${productCart.price}</td>
                            <td className='fontsize'>${productCart.price * productCart.quantity}</td>
                            <td className='fontsize'>{productCart.quantity}</td>
                            <td className='fontsize'>
                            <Button className='button-remove'
                             onClick={() =>{
                                        removeItem(productCart.id,productCart.quantity)
                                        setTotal([]);
                                    }} style={{background: "red"}} variant="contained">
                              <RemoveIcon fontSize="small"/>
                            </Button>
                            <Button className='button-remove' onClick={()=>addItem(productCart.id,productCart.quantity)} style={{background: "red"}} variant="contained">
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
            <div className='container-fluid d-flex justify-content-around'>
                <h3>Total: ${totalPrice}</h3>
                
                <Button onClick={handleClickOpen} style={{background: "red"}} variant="contained">COMPRAR</Button>
                <Checkout
                open={open} 
                handleClose={handleClose} 
                total={totalPrice}
            />
                <Button onClick={clear} style={{background: "red"}} variant="contained">Vaciar Carrito</Button>
            </div>
            }
        </div>
    )
}

