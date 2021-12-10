import React, {useEffect, useState} from 'react';
import '../ItemListContainer/ItemListContainer.css';
import '../ItemList/ItemList.css';
import Item from '../Item/Item.js';
import Container from 'react-bootstrap/Nav';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Col from 'react-bootstrap/Col'
import {Link} from 'react-router-dom';


export default function ItemList(){

const [loader, setLoader] = useState(true)
const [products, setProducts] = useState([])
const dataProducts = [
    {
      id: "1",
      title: "Club de los Psicopatas",
      description: "tapa dura",
      price: 2000,
      pictureUrl: "https://i.ibb.co/NS1g4Lq/libro1.jpg"
    },
    {
      id: "2",
      title: "El Italiano",
      description: "tapa blanda",
      price: 4000,
      pictureUrl: "https://i.ibb.co/w7J5SJJ/libro2.jpg"
    },
    {
      id: "3",
      title: "Billy Summers",
      description: "tapa dura",
      price: 5000,
      pictureUrl: "https://i.ibb.co/z8SGSVf/libro3.jpg"
    },
    {
      id: "4",
      title: "Y el mundo se detuvo",
      description: "tapa blanda",
      price: 7000,
      pictureUrl: "https://i.ibb.co/kGNXSr1/libro4.jpg"
    }
];

const getProducts = new Promise((response, reject)=> {
    setTimeout(() =>{
     response(dataProducts);
    }, 2000);
});

useEffect(() => {
    getProducts.then((data) => {
        console.log("respuesta de promesa:", data)
        setProducts(data)
        //Ocultar loader
        setLoader(false)
    })
}, [])



    return(
        
        <div className="container-fluid d-flex flex-wrap justify-content-around">
          {
                    loader
                        ?
                        <CircularProgress />
                        :
                        <>
                            {products.map(product => {
                                return (
                                        <Item data={product} />
                                )
                            })}
                            </>
          }
        </div>
    )
}