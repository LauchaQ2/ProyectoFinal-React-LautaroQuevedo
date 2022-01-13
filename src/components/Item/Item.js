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
            <Link to={`/product/${data.id}`}>
            <h5 className="title">{data.title}</h5>
            <img className="img-item" src={data.pictureURL} alt={data.title} />
            <h4>${data.price}</h4>
            </Link>
            <ItemCount item={itemCart} initial={1} onAdd={onAdd} stock={data.stock}/>
            <Link to={`/product/${data.id}`}>
            <Button className="btn button button-buy">Ver detalle</Button>
            </Link>
        </div>
    )
}

//            <span className="stock-text">Stock : {data.stock}</span>
