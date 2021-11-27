import React from 'react';
import '../Cards/Card.css';
import imgProduct from '../../assets/fragile.svg'
import ItemCount from '../ItemCount/ItemCount'

export default function Card(){
    return(

        <div className="product">
            <h2>PRODUCTO</h2>
            <img width="100" src={imgProduct}/>
            <ItemCount/>
        </div>
    )
}
