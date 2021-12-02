import React from 'react';
import './Item.css';
import imgProduct from '../../assets/fragile.svg'
import ItemCount from '../ItemCount/ItemCount'

export default function Item({data}){
    console.log(data.pictureUrl);
    return(

        <div className="product">
            <h2>{data.title}</h2>
            <img width="100px" src="src\assets\libro1.png" alt="product image" />
            <ItemCount stock="5"/>
        </div>
    )
}
