import React, {useState, useContext} from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import CartContext from '../../context/CartContext';
import { useParams } from 'react-router-dom';
import Slider from '../../components/Slider/Slider'

export default function ItemDetail({ data }) {

        const { addProducts , productCarts, setQuant} = useContext(CartContext)
        console.log("data item: ", data)

        const itemCart = {
            title: data.title,
            id: data.id,
            price: data.price,
            pictureURL: data.pictureURL,
            quantity: 1,
        }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    
    const onAdd = (quantity) => {
        addProducts(itemCart, quantity)
    }

    return(

        <div className="container mb-2 mt-2">
            <div className="row ">
                <div className="col-6 detail text-center">
                    <img className="img-fluid img-border" src={data.pictureURL} />
                </div>
                <div className="col-6 detail centrado justify-content-center text-center">
                    <h1 className='w'>{data.title}</h1>
                    <h5 className='w'>Descripción: {data.description}</h5>
                    <h3 className='w'>${data.price}</h3>
                    <div className='d-block'>
                    
                    <ItemCount item={itemCart} initial={1} onAdd={onAdd} stock={data.stock}/>
                    <div>
                    <Link to={"/cart"}>
                    <Button className='button-buy' variant="contained">Finalizar mi compra</Button>
                    </Link>
                    </div>
                    </div>
                    
                </div>
            </div>
            <Slider/>
        </div>
    )
}


//                    <h5 className='w'>Stock: {data.stock}</h5>
