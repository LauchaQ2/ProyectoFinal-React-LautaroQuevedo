import React, {useEffect, useState} from 'react';
import '../ItemListContainer/ItemListContainer.css';
import Item from '../Item/Item.js';
import Container from 'react-bootstrap/Nav';
import CircularProgress from '@mui/material/CircularProgress';
import Grid from '@mui/material/Grid';
import Col from 'react-bootstrap/Col'

export default function ItemList(){

const [loader, setLoader] = useState(true)
const [products, setProducts] = useState([])
const dataProducts = [
    {
      id: "1",
      title: "Club de los Psicopatas",
      description: "tapa dura",
      price: 2000,
      pictureUrl: "libro1.png"
    },
    {
      id: "2",
      title: "El Italiano",
      description: "tapa blanda",
      price: 4000,
      pictureUrl: "libro2.png"
    },
    {
      id: "3",
      title: "Billy Summers",
      description: "tapa dura",
      price: 5000,
      pictureUrl: "libro3.png"
    },
    {
      id: "4",
      title: "Y el mundo se detuvo",
      description: "tapa blanda",
      price: 7000,
      pictureUrl: "libro4.png"
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
        
        <Container fluid className="justify-content-center d-flex flex-wrap">
          {
                    loader
                        ?
                        <CircularProgress />
                        :
                        <>
                            {products.map(product => {
                                return (
                                    <Grid item xs={3} key={product.id}>
                                        <Item data={product} />
                                    </Grid>
                                )
                            })}
                            </>
          }
        </Container>
    )
}