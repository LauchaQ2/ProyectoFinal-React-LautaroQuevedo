import React from 'react';
import '../ModalCart/ModalCart.css';

export default function ModalCart({products}){
    return(
    <div className='carrito'>
        {products.map(product => {
                return(
                    <div className='item-cart-list' >
                        <div className="item-card-img">
                        <img src={product.img} alt="imagen del producto" />
                        </div>
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        <span>Cant: {product.quantity}</span>
                    </div>
                )
            })}
            
    </div>
        )
}