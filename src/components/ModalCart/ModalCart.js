import React, {useState, useContext, useEffect} from 'react';
import '../ModalCart/ModalCart.css';
import { Button } from '@mui/material';
import CartContext from '../../context/CartContext';
import RemoveIcon from '@mui/icons-material/Remove';
import { Link } from "react-router-dom";


export default function ModalCart({products}){
      
    const {clearCart,removeItem, totalPrice,open, setOpen, addItem} = useContext(CartContext)

    const totalProducts = products.map(product => product.quantity).reduce((prev, curr) => prev + curr, 0);

    const [size, setSize] = useState(window.innerWidth);
    
   useEffect(()=>{
   const handleSize = () =>{
       setSize(window.innerWidth);
   }
   window.addEventListener("resize", handleSize)
   },[])

    const clear = () =>{
        clearCart();
    }

    const handleClose = () => {
        setOpen(!open);
    }
    

    
    
    return(

    <div className='modalCart background-page'>
        <div className='d-flex background-page header-modal mb-2 justify-content-between align-content-center p-3 rounded'>
         <p className='text-center background-page d-flex align-items-center ms-3 mb-0 title-cart'>Tienes {totalProducts} productos agregados</p>
         <button className='btn background-page' onClick={handleClose}>X</button>
        </div>
        <div>
        {products.map(product => {
                return(
                    <div className='container-fluid detail border-box mb-2 d-flex justify-content-between align-items-center' key={product.id}>
                        <img className="img-fluid img-cart" src={product.pictureURL} alt="imagen del producto" />
                        <p className={size > 500 ? 'fontsizeCart bold' : 'fs-7 w-25 text-center text-wrap'}>{product.title}</p>
                        <p className={size > 500 ? 'fontsizeCart bold' : 'fs-7 w-25 text-center text-wrap'}>${product.quantity*product.price}</p>
                        <Button className={size> 500 ? 'button-remove' : 'button-remove-mobile'} onClick={()=>removeItem(product.id,product.quantity)} variant="contained">
                        <RemoveIcon fontSize="small"/>
                        </Button>
                        <input type="text" className={size> 500 ? 'button-remove' : 'button-remove-mobile'} readOnly value={product.quantity}/>
                        <Button className={size> 500 ?'button-remove' : 'button-remove-mobile'} onClick={()=>addItem(product.id,product.quantity)} variant="contained">
                        +
                        </Button>
                    </div>
                )
            })}
            { products.length === 0 ?
                <></>
            :
            <div className={size > 500 ? 'container-fluid d-flex justify-content-around align-items-center mb-3 mt-2' : 'container-fluid d-block'}>
            <h6 className={size > 500 ? 'total-style': 'fs-2 mt-2'}>Total: ${totalPrice}</h6>
                     <Link to={"/cart"}>
                         <Button className={size > 500 ? 'button-cart': 'button-cart-mobile mt-2'} onClick={handleClose} variant="contained">INICIAR COMPRA</Button>
                    </Link>
                <Button className={size > 500 ? 'button-cart' : 'button-cart-mobile mt-2'} onClick={clear} variant="contained">Vaciar Carrito</Button>
                </div>
            }
            </div>

            </div>
        )
}
