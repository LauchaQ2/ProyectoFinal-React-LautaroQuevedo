import React, {useState,useContext, useEffect} from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import db from '../../firebaseconfig';
import {doc,getDoc, collection, getDocs, setDoc , query, where } from 'firebase/firestore';
import CartContext from '../../context/CartContext';
import '../Checkout/Checkout.css'
import './ModalLogin.css'
import { Link } from 'react-router-dom';


export default function ModalLogin({products}){
      

    const {logged, setLogged, username, setUsername, ordersByUser, setOrdersByUser,requestOrders, setRequestOrders,setItemsByOrder} = useContext(CartContext)
    const [noUser, setNoUser] = useState(false)
    const [userIncorrect, setUserIncorrect] = useState(false)

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
   const [userRegistered, setUserRegistered] = useState({
    usuario : '',
    contraseña : '',
})
   const [orderId, setOrderId] = useState(null)

   
    var id = userRegistered.usuario;

   const handleChange = (e) => {
       const {name, value} = e.target
       setNewUser({...newUser, [name] : value})
       setUserRegistered({...userRegistered, [name] : value})
       console.log(newUser)
   }

   async function getUser(){
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
        }
        if(userRegistered.usuario === docSnap.data().usuario && userRegistered.contraseña === docSnap.data().contraseña){
            setLogged(true)
            setUsername(docSnap.data().usuario)
        }
        else{
            console.log("No coinciden")
            setUserIncorrect(true);
        }
    }

    



   const sendUser = (e) => {
       let usuario = {}
       usuario.usuario = newUser.usuario
       usuario.contraseña = newUser.contraseña
       pushUser(usuario)
       setLogged(true)
       setUsername(usuario.usuario)
       setNoUser(false)
       }

   const pushUser = async(usuario) => {
       const docRef = doc(db, 'users', usuario.usuario)
       const user = usuario
       await setDoc(docRef,user);
       setOrderId(user.id)
   }

   const closeSession = () =>{
       setLogged(false)
       setUserIncorrect(false)
       setOrdersByUser([])
       setUsername("")
       setRequestOrders(false)
       setItemsByOrder([])
   }

   async function getOrderByUsername(){
    const q = query(collection(db, "ordenes"), where("username", "==", username));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        if(requestOrders === false){
        console.log(doc.id)
        const obj = doc.id
        ordersByUser.push(obj)
        console.log(ordersByUser)
        setRequestOrders(true)
        console.log(requestOrders)
    }else{
        return null;
    }
    
    });
  
}
    useEffect(()=>{
        if(requestOrders===false){
            getOrderByUsername()
        }
    },[])
    
    console.log(requestOrders)
    console.log(ordersByUser)
   
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
                                { userIncorrect ?
                                    <span className={size < 500 ? "mb-3 fs8-red" :' fs8-red mb-3'}>Usuario o contraseña incorrecta</span>
                                    :
                                    null
                                    }
                                <span onClick={() => {setNoUser(true)}} className={size < 500 ? "mb-3 fs-6" :'mb-3'}>¿No tienes cuenta? Registrate aquí</span>
                            <Button variant="outlined" onClick={getUser}>Ingresar</Button>
                            </Box>
                    </DialogContent>
                    </>
                        :
                                <DialogContent className="h-100">
                                        <Box className={size > 500 ? "d-block h-100" : "h-100"}>
                                        <Link to={`/myaccount`}>
                                        <Button onClick={getOrderByUsername} variant="outlined">ir a mi cuenta</Button>
                                        </Link>
                                        <Button variant="outlined" onClick={closeSession}>
                                        <Link to={`/`}>Cerrar Sesión</Link>
                                        </Button>
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
                        <Button variant="outlined" onClick={sendUser}>Crear cuenta</Button>
                    </Box>
                </DialogContent></>
                :
                                <DialogContent className="h-100">
                                        <Box className={size > 500 ? "d-block h-100" : "h-100"}>
                                        <Link to={`/myaccount`}>
                                        <Button onClick={getOrderByUsername} variant="outlined">ir a mi cuenta</Button>
                                        </Link>
                                        
                                        <Button variant="outlined" onClick={closeSession}>
                                        <Link to={`/`}>Cerrar Sesión</Link>
                                        </Button>
                                        
                                        </Box>
                                </DialogContent>   
                }
                </>
            }
    </div>
        )
}
