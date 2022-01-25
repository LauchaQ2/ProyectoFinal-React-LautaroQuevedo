import React, {useState, useEffect,useContext} from 'react';
import '../Footer/Footer.css'
import CartContext from '../../context/CartContext';
import { getDoc, doc } from 'firebase/firestore';
import db from '../../firebaseconfig';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



export default function UserProfile(){
    const [size, setSize] = useState(window.innerWidth);
    const { username, ordersByUser,requestOrders , getOrderByUsername,itemsByOrder, setItemsByOrder} = useContext(CartContext)

    const [orderID, setOrderID] = useState({
        orderID : ''
        })
    const [orderByID, setOrderByID] = useState([""])
    
    var id = orderID.orderID;
    
    console.log(id)
    useEffect(()=>{
    const handleSize = () =>{
        setSize(window.innerWidth);
    }
    window.addEventListener("resize", handleSize)
    },[])

    const getOrders = () =>{
        if(requestOrders===false){
            getOrderByUsername()
        }
    }
    
    async function getOrderByID(){
        const docRef = doc(db, "ordenes", id);
        const docSnap = await getDoc(docRef);
        let orden = docSnap.data();
        setOrderByID(orden)
        setItemsByOrder(orden.items)
        console.log(orderByID)
        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        } else {
        console.log("No such document!");
        }
    }
      
      const handleChange = (e) => {
        const {name,value} = e.target
        setOrderID({...orderID, [name] : value})
        console.log(orderID.orderID)
    }

    console.log(orderByID)

return(
    <div className={size > 500 ? "mb-3" : ' h-100 d-block text-center'}>
    <h1 className={size > 500 ? 'w-100 text-center' : 'w-100 text-center fs-2'}>Bienvenido a tu perfil {username}</h1>
    <Button onClick={getOrders}>Refrescar historial de ordenes</Button>
    <h3 className='w-100 ms-2 mt-5'>Tus ordenes por ID:</h3>
    
    {
        ordersByUser.length === 0
        ?
        <p>No tienes ordenes realizadas</p> 
        :
        <><div className='h-100 container-fluid d-block flex-wrap'>
                    <ul className='list-group'>
                        <div className={size > 500 ? 'h-100 d-flex flex-wrap' : 'h-100 d-block'}>
                        {ordersByUser.map(orderByUser => {
                            return (

                                <li className={size > 500 ? 'text-center w-25 list-group-item' : 'text-center w-100 list-group-item'}>{orderByUser}</li>

                            );
                        })}
                        </div>
                        <form className='mt-4'>
                        <TextField className={size > 500 ? null : "w-100"} label="Orden ID" required type="text" value={orderID.orderID} onChange={handleChange} name="orderID" variant="outlined"/>
                        <Button onClick={getOrderByID}>Buscar orden</Button>
                        </form>
                        { orderByID != ""
                        ?

                        <div className='h-100 container-fluid'>
                            <div className='col-md-6'>
                        <p className='fw-bold fs-4'>Información de tu orden</p>
                        <li className='list-group-item'>Usuario: {orderByID.username}</li>
                        <li className='list-group-item'>Total de la orden: ${orderByID.total}</li>
                        </div>
                        <div className='h-100 col-md-12'>
                        <p className='fw-bold fs-4'>Detalle de productos</p>
                        {  itemsByOrder.map(item=>{
                            return(
                                <div className='container-fluid detail border-box mb-2 d-flex justify-content-between align-items-center' key={item.id}>
                                <img className="img-fluid img-cart" src={item.pictureURL} alt="imagen del producto" />
                                <p className={size > 500 ? 'fontsizeCart bold' : 'fs-7 w-25 text-center text-wrap'}>{item.title}</p>
                                <p className={size > 500 ? 'fontsizeCart bold' : 'fs-7 w-25 text-center text-wrap'}>{item.quantity}</p>
                                <p className={size > 500 ? 'fontsizeCart bold' : 'fs-7 w-25 text-center text-wrap'}>${item.quantity*item.price}</p>
                                </div>
                            )
                        })
                        }
                        </div>
                        </div>
                        :
                        null
                          }
                    </ul>
                </div>
                </>
}
    
    </div>
)
}


/*
*/