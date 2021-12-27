import React, {useState, useContext} from 'react';
import './ItemDetail.css';
import imgProduct from '../../assets/fragile.svg'
import ItemCount from '../ItemCount/ItemCount'
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'
import CartContext from '../../context/CartContext';


export default function ItemDetail({data}){
    console.log(data);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [handleItemCount, sethandleItemCount] = useState(true)
    const handleShow = () => setShow(true);
       
    const [quantityItem,setQuantityItem] = useState(0)
    const {addProducts, products} = useContext(CartContext)
    const [itemCart,setItemCart]= useState(
        {
            id:data.id,
            title:data.title,
            img:data.pictureURL,
            quantity:0,
            price:data.price
        }
    )
    console.log(itemCart);

    const onAdd =(value) =>{
        console.log("items add ",value)
        itemCart.quantity=value
    }

const sendItem = () => {
    addProducts(itemCart)
    console.log("add products ",products)
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
                    { handleItemCount ?
                    <ItemCount onAdd={onAdd} stock={data.stock}/>
                    :
                    <></>
                    }
                    <Button className="btn cart chart border" onClick={sendItem}>Agregar</Button>
                    <div>
                    <Link to={`/cart`}>
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
                        <h4>Total: {itemCart.total}</h4>
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
