import React, {useEffect, useState} from 'react';
import '../ItemListContainer/ItemListContainer.css';
import '../ItemList/ItemList.css';
import Item from '../Item/Item.js';
import Container from 'react-bootstrap/Nav';
import Grid from '@mui/material/Grid';
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';


export default function ItemList({products}){

    console.log(products)

    return(
        
        <div className="container-fluid d-flex flex-wrap justify-content-around">
                   {products.map(product => {
                                              return (
                                              <Item data={product} />
                                              )
                                              }
                                  )
          }
        </div>
    )
}