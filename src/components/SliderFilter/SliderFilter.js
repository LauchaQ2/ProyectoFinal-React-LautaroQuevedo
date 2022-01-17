import React, {useState, useEffect} from "react";
import Carousel from 'react-elastic-carousel';
import '../SliderFilter/SliderFilter.css'
import Item from '../Item/Item.js';
import './SliderFilter.css'

export default function SliderFilter({offers, title}){
    console.log(offers)

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
      ]


    return(
        <div className="container mt-3 text-center">
        <h3 className="titlehome text-left mb-2">{title}</h3>
        <Carousel breakPoints={breakPoints} itemsToShow={4}>
        {offers.map(offer => {
                                              return (
                                              <Item data={offer} />

                                              )
                                              }
                                  )
          }
        </Carousel>
        </div>
    )
}