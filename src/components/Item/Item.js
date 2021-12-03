import React from 'react';
import './Item.css';
import imgProduct from '../../assets/fragile.svg'
import ItemCount from '../ItemCount/ItemCount'

export default function Item({data}){
    console.log(data.pictureUrl);
    return(

        <div className="product">
            <h2>{data.title}</h2>
            <img width="100px" src={`../../assets/${data.pictureUrl}`} alt="product image" />
            <h4>${data.price}</h4>
            <ItemCount stock="5"/>
        </div>
    )
}
