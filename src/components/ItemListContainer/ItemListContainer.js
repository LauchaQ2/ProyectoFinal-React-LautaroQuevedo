import React, {useState, useEffect} from 'react';
import '../ItemListContainer/ItemListContainer.css';
import Item from '../Item/Item.js';
import Container from 'react-bootstrap/Nav';
import ItemList from '../ItemList/ItemList';
import { apiURL } from '../../config';
import CircularProgress from '@mui/material/CircularProgress';



export default function ItemListContainer(){

    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch(apiURL)
        .then(response =>{
          return response.json();
        })
        .then(data =>{
          setProducts(data);
          setTimeout( () => {
            setLoader(false)
          }, 2000);
        })
    }, [])

    return(
        <div>
            <h2 className='titlehome text-left mb-2'>PRODUCTOS</h2>
            {
                
            loader
                  ?
                    <div className='text-center'>
                    <CircularProgress />
                    </div>
                  :
                  <ItemList products={products}/>
            }
            
        </div>
    )
}