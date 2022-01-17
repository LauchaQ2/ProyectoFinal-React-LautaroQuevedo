import React, {useState,useContext, useRef} from 'react';
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
import { MenuItem, Select, FormControl } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import PayModal from '../PayModal/PayModal';
import emailjs from 'emailjs-com';

export default function Checkout({open, handleClose, products, total}) {
    
    const {productCarts, totalPrice, dataCredit} = useContext(CartContext)

     const [formData, setFormData] = useState({
        nombre : '',
        telefono : '',
        mail: '',
        validation: ''
    })
    const [orderId, setOrderId] = useState(null)
    const [payMethod, setPayMethod] = useState();

    const handlePayment = (event) => {
        setPayMethod(event.target.value);
      };
    

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name] : value})
        console.log(formData.mail)
        console.log(formData.validation)
    }

    const sendOrder = (e) => {
        if(formData.mail === formData.validation){
        let fechaActual = new Date();
        let order = {}
        order.buyer = formData
        order.items = productCarts
        order.total = totalPrice
        order.date = fechaActual
        order.payment = dataCredit

        pushOrder(order)

        e.preventDefault();
  
      emailjs.sendForm('service_obghm38', 'template_u9c1xzq', form.current, 'user_YCFq6W7ZeLhBZ6dFS68j4')
      .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });}
        else{
            console.log("mail no coincide")
        }
    }
    const form = useRef();

    const sendEmail = (e) => {
      
    };


    console.log(dataCredit)
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
                            <DialogTitle>La orden se generó con éxito {orderId}</DialogTitle>
                            <h4>Te hemos enviado a tu correo información de la compra</h4>
                            </Box>
                    </DialogContent>
             :
                <>
                    <DialogTitle>Completa tus datos para finalizar tu compra</DialogTitle>
                        <DialogContent>
                            <Box component="form" noValidate autoComplete="off" className="form-container">
                            <form ref={form} onSubmit={sendEmail}>
                                <TextField label="Nombre" name="nombre" variant="outlined" value={formData.nombre} onChange={handleChange}/>
                                <TextField label="Telefono" name="telefono" variant="outlined" value={formData.telefono} onChange={handleChange}/>
                                <TextField label="Mail" name="mail" variant="outlined" value={formData.mail} onChange={handleChange}/>
                                <TextField label="Mail" name="validation" variant="outlined" value={formData.validation} onChange={handleChange}/>
                                <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Método de Pago</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={payMethod}
                                label="Método de Pago"
                                onChange={handlePayment}
                            >
                                <MenuItem value={1}>Transferencia Bancaria</MenuItem>
                                <MenuItem value={2}>Tarjeta de crédito</MenuItem>
                                <MenuItem disabled value={3}>Cripto</MenuItem>
                            </Select>
                            </FormControl>
                            {payMethod === 2 && <PayModal/>}
                            {payMethod === 1 && 
                            <div className='d-block'> 
                            <p>CBU: 23113243546543423423535</p>
                            <p>Al finalizar su compra, dentro de las próximas 2hs deberá realizar la transferencia sino su orden será denegada.</p>
                            </div>}
                                <Button variant="outlined" onClick={sendOrder}>Finalizar Compra</Button>
                                </form>
                            </Box>
                    </DialogContent>
                </>
            }
            
        </Dialog>
    </div>
    );
  }
