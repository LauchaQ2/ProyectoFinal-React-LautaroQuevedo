import React from 'react';
import '../CategoriesBanner/CategoriesBanner.css';
import './CategoryTitle.css';


export default function CategoryTitle({title}){


    return(
        <h2 className='titleCat text-left ms-4 mt-2 mb-2'>{title}</h2>
    )
}