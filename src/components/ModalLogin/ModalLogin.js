import React, {useState,useContext, useRef, useEffect} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import db from '../../firebaseconfig';
import {doc, collection, addDoc, setDoc  } from 'firebase/firestore';
import CartContext from '../../context/CartContext';
import '../Checkout/Checkout.css'
import './ModalLogin.css'
import { Link } from 'react-router-dom';

export default function ModalLogin({products,showCart}){
      

    const {logged, setLogged, username, setUsername} = useContext(CartContext)
    const [noUser, setNoUser] = useState(false)

    const [size, setSize] = useState(window.innerWidth);
    
    useEffect(()=>{
    const handleSize = () =>{
        setSize(window.innerWidth);
    }
    window.addEventListener("resize", handleSize)
    },[])

    const [newUser, setNewUser] = useState({
       usuario : '',
       contraseña : '',
   })
   const [orderId, setOrderId] = useState(null)

   


   const handleChange = (e) => {
       const {name, value} = e.target
       setNewUser({...newUser, [name] : value})
       console.log(newUser)
   }



   const sendOrder = (e) => {
       let usuario = {}
       usuario.usuario = newUser.usuario
       usuario.contraseña = newUser.contraseña
       pushOrder(usuario)
       setLogged(true)
       setUsername(usuario.usuario)
       }

   const pushOrder = async(usuario) => {
       const docRef = doc(db, 'users', usuario.usuario)
       const user = usuario
       await setDoc(docRef,user);
       setOrderId(user.id)
   }

   const closeSession = () =>{
       setLogged(false)
   }
    
    return(

    <div className={size < 500 ? 'modalLoginMobile background-page' :'modalLogin background-page'}>
                { noUser === false 
                ?
                <>
                {logged === false ? 
                    <>
                            <DialogTitle>Inicio de Sesión</DialogTitle>
                        <DialogContent className={size < 500 ? "d-block text-center" : "d-flex justify-content-center"}>
                            <Box className={size > 500 ? "form-container" : "w-100 form-mobile text-center"} noValidate autoComplete="off" >
                                <TextField className={size > 500 ? null : "w-100"} label="Usuario" required type="text" name="usuario" variant="outlined" value={newUser.usuario.trim()} onChange={handleChange}/>
                                <TextField className={size > 500 ? null : "w-100"} label="Contraseña" required type="password" name="contraseña" variant="outlined" value={newUser.contraseña} onChange={handleChange}/>
                                <span onClick={() => {setNoUser(true)}} className={size < 500 ? "mb-3 fs-6" :'mb-3'}>¿No tienes cuenta? Registrate aquí</span>
                            <Button variant="outlined" onClick={sendOrder}>Ingresar</Button>
                            </Box>
                    </DialogContent>
                    </>
                        :
                                <DialogContent className="h-100">
                                        <Box className={size > 500 ? "d-block h-100" : "h-100"}>
                                        <Link to={`/myaccount`}>
                                        <Button variant="outlined">ir a mi cuenta</Button>
                                        </Link>
                                        <Button variant="outlined" onClick={closeSession}>Cerrar Sesión</Button>
                                        </Box>
                                </DialogContent>   
                }
                </>
                :
                <>
                { noUser === true 
                ?
                <><DialogTitle>Registrate</DialogTitle><DialogContent className={size < 500 ? "d-block text-center" : "d-flex justify-content-center"}>
                    <Box className={size > 500 ? "form-container" : "w-100 form-mobile text-center"} noValidate autoComplete="off">
                        <TextField className={size > 500 ? null : "w-100"} label="Usuario" required type="text" name="usuario" variant="outlined" value={newUser.usuario.trim()} onChange={handleChange} />
                        <TextField className={size > 500 ? null : "w-100"} label="Contraseña" required type="password" name="contraseña" variant="outlined" value={newUser.contraseña} onChange={handleChange} />
                        <Button variant="outlined" onClick={sendOrder}>Crear cuenta</Button>
                    </Box>
                </DialogContent></>
                :
                                <DialogContent className="h-100">
                                        <Box className={size > 500 ? "d-block h-100" : "h-100"}>
                                        <Link to={`/myaccount`}>
                                        <Button variant="outlined">ir a mi cuenta</Button>
                                        </Link>
                                        <Button variant="outlined" onClick={closeSession}>Cerrar Sesión</Button>
                                        </Box>
                                </DialogContent>   
                }
                </>
            }
    </div>
        )
}
