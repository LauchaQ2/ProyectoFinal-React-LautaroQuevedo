import React, {useEffect, useState} from 'react';
import '../CategoriesContainer/CategoriesContainer.css';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { apiURL } from '../../config';
import CircularProgress from '@mui/material/CircularProgress';
import ItemList from '../ItemList/ItemList';
import CategoryTitle from '../CategoryTitle/CategoryTitle';


export default function CategoriesDetail(){
    const {category} = useParams();
    console.log(category);

const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const [categtitle, setCategtitle] = useState([])
    
    useEffect(() => {
        fetch(apiURL)
        .then(response =>{
          return response.json();
        })
        .then(resultsProducts =>{
         const filteredData = resultsProducts.filter( resultProduct => resultProduct.category === category);
         setProducts(filteredData);
          if(category === '1'){
            setCategtitle("VINOS");
            console.log(categtitle);
          } else{
            setCategtitle("CERVEZAS")
            console.log(categtitle);
          }
          setTimeout( () => {
            console.log(products);
            setLoader(false)
          }, 2000);
         
        })
    }, [category])

    

    console.log(products);
    return(
        <div>
            {
                
            loader
                  ?
                    <div className='text-center'>
                    <CircularProgress />
                    </div>
                  :
                  <><CategoryTitle title={categtitle} /><ItemList products={products} /></>
            }
            
        </div>
    )
}