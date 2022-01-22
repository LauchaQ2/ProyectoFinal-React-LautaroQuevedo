import React, {useState, useEffect} from 'react';
import '../ItemListContainer/ItemListContainer.css';
import ItemList from '../ItemList/ItemList';
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
    const [size, setSize] = useState(window.innerWidth);
    
            useEffect(()=>{
            const handleSize = () =>{
                setSize(window.innerWidth);
            }
            window.addEventListener("resize", handleSize)
            },[])

  
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

      <div className='row index'>
                  <h2 className='titlehome text-center'>NUESTROS PRODUCTOS</h2>
      <div className={size < 500 ? 'col-md-2 sidebarCat d-flex justify-content-center':'col-md-2 sidebarCat d-flex justify-content-center h-auto'}>
      <div className={size < 500 && 'w-100 d-flex justify-content-around align-items-center h-auto'}>
            <h1 className={ size > 500 ? 'text-left fs-2 border-bottom fw-bold mt-2 mb-2' : 'fs5 mb-0'}>CATEGORÍAS</h1>
              <h5 className={size > 500 ? 'text-left fff fs-5 mb-3 mr-3' : 'fs-6 mb-0'}>
                <Link className='button-category' style={{ color: "#000000" }} onClick={() => { setActiveCategory('all'); } } to={`/category/all`}>
                  Todos
                </Link>
              </h5>

              {categories.map((category) => {
                return (
                  <h5 className={size > 500 ? 'text-left fs-5 mb-3 mr-3' : 'fs-6 mr-3 mb-0'}>
                    <Link 
                      className='button-category'
                      style={{ color: "#000000" }}
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
          <div className={loader ? "container d-flex justify-content-center align-items-start mt-3 contvoid" : null}>
            <CircularProgress />
          </div>
          :
          <div className='col-md-10'>
          <ItemList size={size} products={products} />
          </div>
          }

      

      </div>
    )
}