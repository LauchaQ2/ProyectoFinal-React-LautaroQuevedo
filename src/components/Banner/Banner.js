import React from "react";
import Carousel from 'react-elastic-carousel';
import '../Banner/Banner.css'

export default function Banner({size}){

    return(
        <div className="container mt-5 text-center">
        <Carousel  showArrows={size > 500 ? true : false} focusOnSelect={true} className="carousel" itemsToShow={1}>
                <img className="img-fluid" src="https://i.ibb.co/27J8Y0x/giftcard.png" alt="giftcard" border="0"/>
                <img className="img-fluid" src="https://i.ibb.co/6b6SDh8/3x2.png" alt="3x2" border="0"/>
                <img className="img-fluid" src="https://i.ibb.co/xXz8GD3/ahora12.png" alt="ahora12" border="0"/>
        </Carousel>
        </div>
    )
}
