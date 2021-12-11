import React from 'react';
import './Item.css';
import imgProduct from '../../assets/fragile.svg'
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';

export default function Item({products}){

    console.log(products);

    return(

        <div className="product">
            <Link to={`/product/${products.id}`}>
            <h5 className="title">{products.title}</h5>
            <span className="stock-text">Stock : {products.stock}</span>
            <img className="img-item" src={products.pictureURL} alt={products.title} />
            <h5>${products.price}</h5>
            </Link>
            <ItemCount stock={products.stock}/>
            
        </div>
    )
}
