import React from 'react';
import './Item.css';
import imgProduct from '../../assets/fragile.svg'
import ItemCount from '../ItemCount/ItemCount';
import {Link} from 'react-router-dom';

export default function Item({data}){
    console.log(data.pictureUrl);
    return(

        <div className="product">
            <Link to={`/product/${data.id}`}>
            <h4 className="bg-light title">{data.title}</h4>
            <img className="img-item" src={data.pictureUrl} alt={data.title} />
            <h5>${data.price}</h5>
            <ItemCount stock="5"/>
            </Link>
        </div>
    )
}
