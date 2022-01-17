import React, {useState, useEffect} from 'react';
import InfoBanner from '../../components/InfoBanner/InfoBanner';
import SliderFilter from '../../components/SliderFilter/SliderFilter';
import Banner from '../../components/Banner/Banner'
import getProducts from '../../FirebaseRequests/GetProductsCollection';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './HomePage.css'


export default function HomePage(){
    const [loader, setLoader] = useState(true)
    const [offers, setOffers] = useState([])
    const [featuredProducts, setFeaturedProducts] = useState([])
    useEffect(() => {
        getProducts
          .then(data =>{
            setOffers(data.filter((data) => data.price < 600))
            setFeaturedProducts(data.filter((data) => data.price > 1500))
            setTimeout( () => {
              setLoader(false)
            }, 500);
          })
         
      },[])

    return(
        <>
        <Banner />
      <InfoBanner/>
      <SliderFilter title="NUESTRAS OFERTAS" offers={offers}/>
      <SliderFilter title="PRODUCTOS DESTACADOS" offers={featuredProducts}/>
      <div className='mt-3 container-fluid d-flex justify-content-center'>
      <Link to="/category/all">
      <Button className='button-to-products'>VER TODOS NUESTROS PRODUCTOS</Button>
      </Link>
      </div>
        </>
    )
}