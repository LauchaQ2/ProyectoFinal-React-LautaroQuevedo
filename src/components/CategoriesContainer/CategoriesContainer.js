import React, {useEffect, useState} from 'react';
import '../CategoriesContainer/CategoriesContainer.css';
import { Link } from "react-router-dom";
import { apiURL } from '../../config';
import CategoriesBanner from '../CategoriesBanner/CategoriesBanner';


export default function CategoriesContainer(){

    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch(apiURL)
        .then(response =>{
          return response.json();
        })
        .then(resultsProducts =>{
            setProducts(resultsProducts);
            console.log(products.category);
        })
    }, [])



    return(
        <CategoriesBanner products={products}/>
    )
}