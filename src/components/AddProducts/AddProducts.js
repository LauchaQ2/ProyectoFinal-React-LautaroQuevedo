import React, {useState,useContext, useRef, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import db from '../../firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';
import CartContext from '../../context/CartContext';
import '../Checkout/Checkout.css'
import {FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';

export default function AddProducts({open, handleClose, size}) {
    
    const {productCarts, totalPrice, dataCredit} = useContext(CartContext)

     const [newProduct, setNewProduct] = useState({
        category : '',
        title : '',
        price : '',
        stock : '',
        description : '',
        pictureURL: ''
    })
    const [orderId, setOrderId] = useState(null)

    


    const handleChange = (e) => {
        const {name, value} = e.target
        setNewProduct({...newProduct, [name] : value})
    }



    const sendOrder = (e) => {
        let producto = {}
        producto.category = newProduct.category
        producto.title = newProduct.title
        producto.price = newProduct.price
        producto.stock = newProduct.stock
        producto.description = newProduct.description
        producto.pictureURL = newProduct.pictureURL
        pushOrder(producto)
        }

    const pushOrder = async(producto) => {
        const productFirebase = collection(db, 'productos')
        const product = await addDoc(productFirebase, producto)
        setOrderId(product.id)
    }
       
  
    return (
        <div>
        
        <div>
            {orderId != null ? 
                <DialogContent>
                            <Box className={size > 500 ? "form-container" : "w-100 form-mobile text-center"}>
                            <DialogTitle>El producto se generó con éxito {orderId}</DialogTitle>
                            <h4 className={size > 500 ? null : "text-wrap"}>Se ha subido un nuevo producto a la DB</h4>
                            </Box>
                    </DialogContent>
             :
                <>
                    <DialogTitle>Completa los datos del nuevo producto</DialogTitle>
                        <DialogContent>
                            <Box className={size > 500 ? "form-container" : "w-100 form-mobile text-center"} noValidate autoComplete="off" >
                                <TextField className={size > 500 ? null : "w-100"} label="Categoría" required type="text" name="category" variant="outlined" value={newProduct.category.trim()} onChange={handleChange}/>
                                <TextField className={size > 500 ? null : "w-100"} label="Titulo" required type="text" name="title" variant="outlined" value={newProduct.title.trim()} onChange={handleChange}/>
                                <TextField className={size > 500 ? null : "w-100"} label="Precio" required type="number" name="price" variant="outlined" value={newProduct.price.trim()}  onChange={handleChange}/>
                                <TextField className={size > 500 ? null : "w-100"} label="Stock" required type="number" name="stock" variant="outlined"  value={newProduct.stock.trim()} onChange={handleChange}/>
                                <TextField className={size > 500 ? null : "w-100"} label="Descripción" required type="text" name="description" variant="outlined"  value={newProduct.description.trim()} onChange={handleChange}/>
                                <TextField className={size > 500 ? null : "w-100"} label="URL" required type="text" name="pictureURL" variant="outlined"  value={newProduct.pictureURL.trim()} onChange={handleChange}/>
                            <Button variant="outlined" onClick={sendOrder}>Agregar Producto</Button>
                            </Box>
                    </DialogContent>

                    
                    
                </>
            }
            
        </div>
    </div>
    
    );
  }
