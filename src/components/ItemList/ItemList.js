import React from 'react';
import '../ItemListContainer/ItemListContainer.css';
import '../ItemList/ItemList.css';
import Item from '../Item/Item.js';

export default function ItemList({products,size}){

    console.log(products)

    return(
        
        <div className="container-fluid d-flex mt-2 flex-wrap justify-content-around">
                   {products.map(product => {
                                              return (
                                              <Item size={size} data={product} />
                                              )
                                              }
                                  )
          }
        </div>
    )
}