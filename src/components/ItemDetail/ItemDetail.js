import React, {useState, useContext} from 'react';
import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount'
import { Button } from '@mui/material';
import {Link} from 'react-router-dom';
import CartContext from '../../context/CartContext';
import Slider from '../../components/Slider/Slider'
import CircularProgress from '@mui/material/CircularProgress';

export default function ItemDetail({ data }) {
        const [loader, setLoader] = useState(true)
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

    setTimeout( () => {
        setLoader(false)
      }, 1500);


    
    const onAdd = (quantity) => {
        addProducts(itemCart, quantity)
    }

    return(
        <div className={loader ? "container contvoid mb-2 mt-2" : "container mb-2 mt-2"}>
        {loader
            ?
            <div className='text-center'>
              <CircularProgress />
            </div>
            :
            <><div className="row ">
                    <div className="col-6 detail text-center">
                        <img className="img-fluid img-border" src={data.pictureURL} />
                    </div>
                    <div className="col-6 detail centrado justify-content-center text-center">
                        <h1 className='w'>{data.title}</h1>
                        <h5 className='w'>Descripción: {data.description}</h5>
                        <h3 className='w'>${data.price}</h3>
                        <div className='d-block'>

                            <ItemCount item={itemCart} initial={1} onAdd={onAdd} stock={data.stock} />
                            <div>
                                <Link to={"/cart"}>
                                    <Button className='button-buy' variant="contained">Finalizar mi compra</Button>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div><Slider /></>
        }
        </div>
    )
}


//                    <h5 className='w'>Stock: {data.stock}</h5>
