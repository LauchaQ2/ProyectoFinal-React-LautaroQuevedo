import React, {useState, useEffect} from "react";
import Carousel from 'react-elastic-carousel';
import '../Slider/Slider.css'
import Item from '../Item/Item.js';
import db from '../../firebaseconfig';
import { collection, getDocs } from 'firebase/firestore';



export default function Slider(){

    const [products, setProducts] = useState([])

    async function getProducts(db){
      const productosCol = collection(db, 'productos');
      const productosSnapshot = await getDocs(productosCol);
      const productosList = productosSnapshot.docs.map(doc => {
        let producto = doc.data();
        producto.id = doc.id;
       return producto
      });
    return productosList;
   }




    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]

    useEffect(() => {
      getProducts(db)
        .then(data =>{
          setProducts(data)
        })
    },[])


    return(
        <div className="container mt-5 text-center">
        <h3 className="mt-3 mb-3">PRODUCTOS RELACIONADOS</h3>
        <Carousel breakPoints={breakPoints} itemsToShow={4}>
        {products.map(product => {
                                              return (
                                              <Item data={product} />

                                              )
                                              }
                                  )
          }
        </Carousel>
        </div>
    )
}

/*<div className="container mt-5">
        <Carousel breakPoints={breakPoints} itemsToShow={4}>
        {products.map(product => 
                <div className="d-flex flex-wrap b justify-content-center align-content-center" key={product.id}>
                <img className="img-item-slider" src={product.pictureURL} alt={product.title} />
                {product.title}
                </div>)
                }
        </Carousel>
        </div>*/