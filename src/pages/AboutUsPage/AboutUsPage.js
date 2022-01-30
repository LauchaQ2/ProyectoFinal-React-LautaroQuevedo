import React, {useState,useEffect} from 'react';

export default function AboutUsPage(){

    const [size, setSize] = useState(window.innerWidth);
    
           useEffect(()=>{
            const handleSize = () =>{
                setSize(window.innerWidth);
            }
            window.addEventListener("resize", handleSize)
            },[])


    return(
        <><h1 className={size > 500 ? 'text-center' : 'text-center fs-1'}>NOSOTROS</h1>
        <div className={size > 500 ? 'contvoid container-fluid' : 'container-fluid d-block'}>
            <h1 className={size > 500 ? 'text-center containerBanner' : 'text-center fw-bold fs-2'}>¿Quiénes somos?</h1>
            <p className='text-center fs-2 p-4'>Somos YoTomo y queremos ser el mejor espacio para que puedas comprar bebidas de todo tipo.</p>
            <p className='text-center fs-2 p-4'>Hace 5 años que no hemos parado de crecer. Gracias por ser parte de nuestra comunidad.</p>

        </div></>
    )
}