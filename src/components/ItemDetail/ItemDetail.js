import React, {useState, useContext} from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import CartContext from '../../context/CartContext';
import { useParams } from 'react-router-dom';


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
                    <h5 className='w'>Stock: {data.stock}</h5>
                    <div className='d-block'>
                    
                    <ItemCount item={itemCart} initial={1} onAdd={onAdd} stock={data.stock}/>
                    <div>
                    <Link to={"/cart"}>
                    <Button style={{background: "red"}} variant="contained">Finalizar mi compra</Button>
                    </Link>
                    </div>

                    <svg id='eye' onClick={handleShow} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M15 12c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3zm9-.449s-4.252 8.449-11.985 8.449c-7.18 0-12.015-8.449-12.015-8.449s4.446-7.551 12.015-7.551c7.694 0 11.985 7.551 11.985 7.551zm-7 .449c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5z"/></svg>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                        <Modal.Title>{itemCart.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <p>Código: {itemCart.id}</p>
                        <p>Precio unitario: {itemCart.price}</p>
                        <p>Cantidad: {itemCart.quantity}</p>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
