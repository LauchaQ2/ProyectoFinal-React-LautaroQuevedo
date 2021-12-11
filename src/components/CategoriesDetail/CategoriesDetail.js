import React, {useEffect, useState} from 'react';
import '../CategoriesContainer/CategoriesContainer.css';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { apiURL } from '../../config';
import CircularProgress from '@mui/material/CircularProgress';
import ItemList from '../ItemList/ItemList';


export default function CategoriesDetail(){
    const {category} = useParams();
    console.log(category);

const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch(apiURL)
        .then(response =>{
          return response.json();
        })
        .then(resultsProducts =>{
          resultsProducts.filter( resultProduct =>{
            if (resultProduct.category === category){
              products.push(resultProduct);
            }
          })
          setTimeout( () => {
            console.log(products);
            setLoader(false)
          }, 2000);
        })
    }, [category])


    console.log(products);
    return(
        <div>
            <h1 className='text-center'>Cervezas</h1>
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