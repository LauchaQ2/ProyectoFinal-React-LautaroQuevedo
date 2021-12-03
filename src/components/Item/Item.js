import React from 'react';
import './Item.css';
import imgProduct from '../../assets/fragile.svg'
import ItemCount from '../ItemCount/ItemCount'

export default function Item({data}){
    console.log(data.pictureUrl);
    return(

        <div className="product">
            <h4 className="bg-light title">{data.title}</h4>
            <img className="img-item" src={data.pictureUrl} alt={data.title} />
            <h5>${data.price}</h5>
            <ItemCount stock="5"/>
        </div>
    )
}
