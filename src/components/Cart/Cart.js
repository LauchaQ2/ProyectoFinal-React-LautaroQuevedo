import React, {useEffect, useState, useContext} from 'react';
import './Cart.css';
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import CartContext from '../../context/CartContext';
import Modal from 'react-bootstrap/Modal'
import { Button } from '@mui/material';



export default function Cart(){

    const [total, setTotal] = useState([])
    const { productCarts, clearCart} = useContext(CartContext)

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
        <div className='container mt-3'>
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
                <th scope="col">#id</th>
                <th className='fontsize' scope="col"></th>
                <th className='fontsize' scope="col">Nombre</th>
                <th className='fontsize' scope="col">Precio</th>
                <th className='fontsize' scope="col">Cantidad</th>
            </tr>
        </thead>
        {productCarts.map(productCart => {
                return(   
                    <>                 
                        <tbody>
                            <tr>
                            <th scope="row">{productCart.id}</th>
                            <td className='img-card'>
                            <Link to={`/product/${productCart.id}`}>
                            <img className='img-item-cart' src={productCart.pictureURL} alt="imagen del producto" />
                            </Link>
                            </td>
                            <td className='fontsize'>{productCart.title}</td>
                            <td className='fontsize'>${productCart.price * productCart.quantity}</td>
                            <td className='fontsize'>{productCart.quantity}</td>
                            </tr>
                        </tbody>
                        </>
                )
            })}
            </table>}
            {total.length === 0 ?
            <div className='container-fluid d-flex justify-content-start'>
            </div>
            :
            <div className='container-fluid d-flex justify-content-around'>
                <h3>Total: ${total.reduce((acc, el) => acc + el)}</h3>
                <Button onClick={clear} style={{background: "red"}} variant="contained">Vaciar Carrito</Button>
            </div>
            }
        </div>
    )
}
