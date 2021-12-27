import React from 'react';

export default function ModalCart({products}){
    return(
    <div className='carrito'>
        {products.map(product => {
                return(
                    <div className='item-cart-list' >
                        <p>{product.title}</p>
                        <p>${product.price}</p>
                        <span>Cant: {product.quantity}</span>
                    </div>
                )
            })}
            
    </div>
        )
}