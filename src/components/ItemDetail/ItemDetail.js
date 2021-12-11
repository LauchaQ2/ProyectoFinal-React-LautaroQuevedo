import React from 'react';
import './ItemDetail.css';
import imgProduct from '../../assets/fragile.svg'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({products}){
    return(

        <div className="container mb-2 mt-2">
            <div className="row ">
                <div className="col-6 detail text-center">
                    <img className="img-fluid img-border" src={products.pictureURL} />
                </div>
                <div className="col-6 detail centrado justify-content-center text-center">
                    <h1 className='w'>{products.title}</h1>
                    <h5 className='w'>Descripción: {products.description}</h5>
                    <h3 className='w'>${products.price}</h3>
                    <h5 className='w'>Stock: {products.stock}</h5>
                    <ItemCount stock={products.stock}/>
                </div>
            </div>
        </div>
    )
}
