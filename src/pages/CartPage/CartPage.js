import React, {useState , useEffect} from 'react';
import Cart from '../../components/Cart/Cart';


export default function CartPage(){

    const [size, setSize] = useState(window.innerWidth);
    
    useEffect(()=>{
      const handleSize = () =>{
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", handleSize)
    },[])
    
    return(
        <div>
        <h1 className={size > 500 ? 'text-center containerBanner' : 'fs-1 text-center'}>DETALLE DE SU COMPRA</h1>
       <Cart/>
        </div>
    )
}