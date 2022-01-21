import React, {useState, useContext} from 'react';
import './Item.css';
import imgProduct from '../../assets/fragile.svg'
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';
import { Button } from '@mui/material';


export default function Item({data}){

    const { addProducts , productCarts, setQuant} = useContext(CartContext)
        console.log("data item: ", data)

        const itemCart = {
            title: data.title,
            id: data.id,
            price: data.price,
            pictureURL: data.pictureURL,
            quantity: 1,
        }

    const onAdd = (quantity) => {
        addProducts(itemCart, quantity)
    }

    return(

        <div className="product">
            <img className="img-item" src={data.pictureURL} alt={data.title} />
            <h5 className="fs-6 ms-3 mt-2 fw-bold title word-wrap">{data.title}</h5>
            <h4 className="fs-8 ms-3 price">${data.price}</h4>
            <ItemCount item={itemCart} initial={1} onAdd={onAdd} stock={data.stock}/>
            <Link to={`/product/${data.id}`}>
            <Button className="btn button mt-2 button-buy">Detalles</Button>
            </Link>
        </div>
    )
}

//            <span className="stock-text">Stock : {data.stock}</span>
