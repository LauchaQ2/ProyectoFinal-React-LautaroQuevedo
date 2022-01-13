import React, {useState,useContext} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import db from '../../firebaseconfig';
import { collection, addDoc } from 'firebase/firestore';
import CartContext from '../../context/CartContext';
import '../Checkout/Checkout.css'

export default function Checkout({open, handleClose, products, total}) {
    
    const {productCarts, totalPrice} = useContext(CartContext)

     const [formData, setFormData] = useState({
        nombre : '',
        telefono : '',
        mail: ''
    })
    const [orderId, setOrderId] = useState(null)

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name] : value})
    }

    const sendOrder = () => {
        let fechaActual = new Date();
        let order = {}
        order.buyer = formData
        order.items = productCarts
        order.total = totalPrice
        order.date = fechaActual

        pushOrder(order)
    }

    const pushOrder = async(order) => {
        const orderFirebase = collection(db, 'ordenes')
        const orden = await addDoc(orderFirebase, order)
        setOrderId(orden.id)
    }
    
  
    return (
        <div>
        
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open} 
            className="modal-contact-data"
        >
            {orderId != null ? 
                <DialogContent>
                            <Box className="form-container">
                            <h2>La orden se generó con éxito {orderId}</h2>
                            <h4>Te hemos enviado a tu correo información de la compra</h4>
                            </Box>
                    </DialogContent>
             :
                <>
                    <DialogTitle>Completa tus datos para finalizar tu compra</DialogTitle>
                        <DialogContent>
                            <Box component="form" noValidate autoComplete="off" className="form-container">
                                <TextField label="Nombre" name="nombre" variant="outlined" value={formData.nombre} onChange={handleChange}/>
                                <TextField label="Telefono" name="telefono" variant="outlined" value={formData.telefono} onChange={handleChange}/>
                                <TextField label="Mail" name="mail" variant="outlined" value={formData.mail} onChange={handleChange}/>
                                <Button variant="outlined" onClick={sendOrder}>Finalizar Compra</Button>
                            </Box>
                    </DialogContent>
                </>
            }
            
        </Dialog>
    </div>
    );
  }
