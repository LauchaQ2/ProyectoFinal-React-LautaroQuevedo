import React,{useState, useContext} from 'react-dom';
import { useLocation } from 'react-router-dom';
import ItemCount from '../../components/ItemCount/ItemCount';
import CartContext from '../../context/CartContext';
import Cart from '../../components/Cart/Cart';


export default function CartPage(){

    
    return(
        <div>
        <h1 className='text-center containerBanner'>Detalle de su compra</h1>
       <Cart/>
        </div>
    )
}