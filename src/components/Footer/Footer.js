import React from 'react';
import '../Footer/Footer.css'

export default function Footer(){
return(
    <div className="container-fluid footer">
        <div>
            <ul className='text-footer'>
                <li>
                    <h2>Contacto</h2>
                </li>
                <li>📞 +234234233532</li>
                <li>📧 yotomo@gmail.com</li>
            </ul>
        </div>
        <img className="img-fluid" width="250px" height="190px" src="https://i.ibb.co/19JjhjR/Whats-App-Image-2021-12-13-at-9-55-52-PM.jpg"/>
    </div>
)
}