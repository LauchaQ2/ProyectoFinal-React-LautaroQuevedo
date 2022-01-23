import React, {useState, useEffect} from 'react';
import '../InfoBanner/InfoBanner.css';
import Carousel from 'react-elastic-carousel';


export default function InfoBanner(){

    const [size, setSize] = useState(window.innerWidth);
    
    useEffect(()=>{
      const handleSize = () =>{
        setSize(window.innerWidth);
      }
      window.addEventListener("resize", handleSize)
    },[])
    

return(
    
    <>{size > 550 ?
        <div className='container-fluid d-flex justify-content-center mb-3 mt-3'>
        <div className='container-info'>
            <div className='row box1 d-flex flex-wrap'>

                <div className='col-sm-4 box d-flex justify-content-around align-content-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <a target="_blank" href='https://walink.co/63cb67'>
                            <img className='logo-wp' src="https://i.ibb.co/chfL26G/whatsapp-1.png" />
                        </a>
                    </div>
                    <div className='text-center mt-2'>
                        <p className='text-center d-flex align-items-center'>¿Tenés una consulta?</p>
                        <p className='text-center d-flex align-items-center'>Envianos tu mensaje..</p>
                    </div>
                </div>

                <div className='col-sm-4 box d-flex justify-content-around align-content-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className='logo-wp' src="https://i.ibb.co/KKZ5FF5/debit-card.png" />
                    </div>
                    <div className='text-center mt-2'>
                        <p className='text-center d-flex align-items-center'>Pagá como quieras</p>
                        <p className='text-center d-flex align-items-center'>Tarjeta o efectivo..</p>
                    </div>
                </div>
                
                <div className='col-sm-4 box d-flex justify-content-around align-content-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className='logo-wp' src="https://i.ibb.co/wh3JCxH/shield.png" />
                    </div>
                    <div className='text-center mt-2'>
                        <p className='text-center d-flex align-items-center'>Comprá con seguridad</p>
                        <p className='text-center d-flex align-items-center'>Tus datos siempre protegidos..</p>
                    </div>
                </div>
            </div>
        </div>
    </div> :
        <Carousel showArrows={false} autoPlaySpeed={5000} pagination={true} focusOnSelect={true} className="carousel mt-4  mb-4" itemsToShow={1}>
            <div className='box2'>
            <a target="_blank" href='https://walink.co/63cb67'>
            <div className='col-sm-4 box d-flex justify-content-around align-content-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className='logo-wp' src="https://i.ibb.co/chfL26G/whatsapp-1.png" />
                    </div>
                    <div className='text-center mt-2'>
                        <p className='text-center d-flex align-items-center'>¿Tenés una consulta?</p>
                        <p className='text-center d-flex align-items-center'>Envianos tu mensaje..</p>
                    </div>
                
            </div>
            </a>
            </div>
            <div className='box2'>
            <div className='col-sm-4 box d-flex justify-content-around align-content-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className='logo-wp' src="https://i.ibb.co/KKZ5FF5/debit-card.png" />
                    </div>
                    <div className='text-center mt-2'>
                        <p className='text-center d-flex align-items-center'>Pagá como quieras</p>
                        <p className='text-center d-flex align-items-center'>Tarjeta o efectivo..</p>
                    </div>
                </div>
            </div>
            <div className='box2'>
            <div className='col-sm-4 box d-flex justify-content-around align-content-center'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className='logo-wp' src="https://i.ibb.co/wh3JCxH/shield.png" />
                    </div>
                    <div className='text-center mt-2'>
                        <p className='text-center d-flex align-items-center'>Comprá con seguridad</p>
                        <p className='text-center d-flex align-items-center'>Tus datos siempre protegidos..</p>
                    </div>
                </div>
            </div>
        </Carousel>}</>
    
)
}