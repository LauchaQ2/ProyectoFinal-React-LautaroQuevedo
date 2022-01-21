import React, {useState, useEffect} from 'react';
import '../ItemListContainer/ItemListContainer.css';
import Item from '../Item/Item.js';
import Container from 'react-bootstrap/Nav';
import ItemList from '../ItemList/ItemList';
import { apiURL } from '../../config';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import getProducts from '../../FirebaseRequests/GetProductsCollection';

export default function ItemListContainer(){
    const {category} = useParams();
    const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState('all')
    const categories = ['vino', 'cerveza', 'licor','vodka']


    useEffect(() => {
      getProducts
        .then(data =>{
          setProducts(data.filter((data) => (category === 'all' || activeCategory === 'all') ? data : data.category === activeCategory))
          setTimeout( () => {
            setLoader(false)
          }, 1000);
        })
       
    },[ category, activeCategory ])

    return(

      <div className='row'>
                  <h2 className='titlehome text-center'>NUESTROS PRODUCTOS</h2>
      <div className='col-md-2'>
      <div className='container-fluid'>
            <h1 className='text-left fs-2 fw-bold mb-2'>CATEGORÍAS</h1>
              <h5 className='text-left fs-4 mb-2 mr-3'>
                <Link style={{ color: "#000000" }} onClick={() => { setActiveCategory('all'); } } to={`/category/all`}>
                  TODOS
                </Link>
              </h5>

              {categories.map((category) => {
                return (
                  <h5 className='text-left fs-4 mb-3 mr-3'>
                    <Link style={{ color: "#000000" }}
                      onClick={() => { setActiveCategory(category); } }
                      to={`/category/${category}`}
                      key={category}>


                      {category}

                    </Link>
                  </h5>
                );

              })}
            </div>
            </div>
        {loader
          ?
          <div className={loader ? "container contvoid" : null}>
            <CircularProgress />
          </div>
          :
          <div className='col-md-10'>
          <ItemList products={products} />
          </div>
          }

      

      </div>
    )
}