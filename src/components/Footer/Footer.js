import React, {useState, useEffect} from 'react';
import '../Footer/Footer.css'

export default function Footer(){
    const [size, setSize] = useState(window.innerWidth);
    
    useEffect(()=>{
    const handleSize = () =>{
        setSize(window.innerWidth);
    }
    window.addEventListener("resize", handleSize)
    },[])

return(
    <footer className={size > 500 ? "text-center mb-0" : 'd-block text-center'}>
        <p><strong>YoTomo ®</strong> - 2001-2021 Todos los derechos reservados</p>
        <p>📧 contacto@yotomo.com.ar</p>
        <p>📱 +54 9 11-6666-6666</p>
    </footer>
)
}