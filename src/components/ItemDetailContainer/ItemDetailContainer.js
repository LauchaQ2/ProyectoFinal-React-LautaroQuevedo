import React, {useEffect, useState} from 'react';
import '../ItemListContainer/ItemListContainer.css';
import '../ItemList/ItemList.css';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import Container from 'react-bootstrap/Nav';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Col from 'react-bootstrap/Col';
import { useParams } from 'react-router-dom';
import { apiURL } from '../../config';

export default function ItemDetailContainer(){

const {id} = useParams();
console.log(id);

const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch(apiURL)
        .then(response =>{
          return response.json();
        })
        .then(resultsProducts =>{
          resultsProducts.filter( resultProduct =>{
            if (resultProduct.id === id){
              setProducts(resultProduct)
            }
          })
          setTimeout( () => {
            setLoader(false)
          }, 2000);
        })
    }, [])


    console.log(products);
    return(
        
        <div className="container-fluid d-flex flex-wrap justify-content-center">
          {
                    loader
                        ?
                        <CircularProgress />
                        :
                        <>
                            {<ItemDetail products={products}/>}
                            </>
          }
        </div>
    )
}