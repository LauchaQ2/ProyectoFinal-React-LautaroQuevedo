import React, {useState, useEffect,useContext} from 'react';
import '../Footer/Footer.css'
import CartContext from '../../context/CartContext';


export default function UserProfile(){
    const [size, setSize] = useState(window.innerWidth);
    const {logged, setLogged, username, setUsername} = useContext(CartContext)

    
    useEffect(()=>{
    const handleSize = () =>{
        setSize(window.innerWidth);
    }
    window.addEventListener("resize", handleSize)
    },[])

return(
    <div className={size > 500 ? "text-center mb-0" : 'd-block text-center'}>
    <h1>Bienvenido a tu perfil, {username}</h1>
    </div>
)
}