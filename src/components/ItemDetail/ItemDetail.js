import React from 'react';
import './ItemDetail.css';
import imgProduct from '../../assets/fragile.svg'
import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail({data}){
    console.log(data[0]);
    return(

        <div className="container mb-2 mt-2">
            <div className="row ">
                <div className="col-6 detail text-center">
                    <img className="img-fluid" src={data[0].pictureUrl} />
                </div>
                <div className="col-6 detail justify-content-center align-content-between text-center">
                    <h1>{data[0].title}</h1>
                    <h5>Tipo de libro: {data[0].description}.</h5>
                    <h3>Precio: ${data[0].price}.</h3>
                    <ItemCount stock="5"/>
                </div>
            </div>
        </div>
    )
}
