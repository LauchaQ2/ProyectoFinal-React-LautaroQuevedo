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
    
    const {productCarts, totalPrice, dataCredit, clearCart} = useContext(CartContext)

     const [formData, setFormData] = useState({
        nombre : '',
        telefono : '',
        email : '',
        validationEmail : ''
    })
    const [orderId, setOrderId] = useState(null)
    const [payMethod, setPayMethod] = useState("")
    const [invalid, setInvalid] = useState(false)

    const handlePayment = (event) => {
        setPayMethod(event.target.value);
      };
    

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name] : value})
        if(formData.email === formData.validationEmail){
            setInvalid(true);
        }
    }

    console.log(formData)


    const sendOrder = (e) => {
        if(formData.email === formData.validationEmail && formData.nombre != "" && formData.telefono != "" && formData.email != "" && formData.validationEmail != "" && payMethod != ""){
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
            setInvalid(true)
            console.log("nombre incompleto")
        }
    }
    const form = useRef();

    const mensaje = productCarts.map(productCart => {
        return `${productCart.title + " - Cantidad: " + productCart.quantity + " - $" + productCart.price * productCart.quantity + " | "}`;
    }).join();
    console.log(mensaje);

    console.log(dataCredit)

    const pushOrder = async(order) => {
        const orderFirebase = collection(db, 'ordenes')
        const orden = await addDoc(orderFirebase, order)
        setOrderId(orden.id)
    }
    const formPreventDefault = (e) =>{
        e.preventDefault();
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
                            <Box noValidate autoComplete="off" >
                            <form ref={form} onSubmit={formPreventDefault} className="form-container">
                                <TextField label="Nombre" required name="nombre" variant="outlined" value={formData.nombre} onChange={handleChange}/>
                                <TextField label="Telefono" required name="telefono" variant="outlined" value={formData.telefono} onChange={handleChange}/>
                                <TextField label="Mail" required type="email" name="email" variant="outlined" value={formData.email} onChange={handleChange}/>
                                <TextField label="Mail" required type="email" name="validationEmail" variant="outlined" value={formData.validationEmail} onChange={handleChange}/>
                                {invalid && <p>Los e-mails no coinciden</p>}
                                <TextField label="message" className="messageToMail" name="message" value={mensaje}/>
                                <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Método de Pago</InputLabel>
                            <Select required
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
                                <Button variant="outlined" type="submit" onClick={sendOrder}>Finalizar Compra</Button>
                                </form>
                            </Box>
                    </DialogContent>

                    
                    
                </>
            }
            
        </Dialog>
    </div>
    
    );
  }
