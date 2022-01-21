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
    const [scrollFixed, setScrollFixed] = useState();

    useEffect(()=>{
      const handleScrollY = () =>{
        setScrollFixed(window.scrollY)
      }
      window.addEventListener("scroll", handleScrollY);
    },[])
    console.log(scrollFixed)

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
      <div className='col-md-2 sidebarCat d-flex justify-content-center'>
      <div className={ scrollFixed > 143 ? 'fixed-top scrolled w-20' : null}>
            <h1 className='text-left fs-2 border-bottom fw-bold mt-2 mb-2'>CATEGORÍAS</h1>
              <h5 className='text-left fs-5 mb-3 mr-3'>
                <Link className='button-category' style={{ color: "#000000" }} onClick={() => { setActiveCategory('all'); } } to={`/category/all`}>
                  Todos
                </Link>
              </h5>

              {categories.map((category) => {
                return (
                  <h5 className='text-left fs-5 mb-3 mr-3'>
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
          <ItemList products={products} />
          </div>
          }

      

      </div>
    )
}