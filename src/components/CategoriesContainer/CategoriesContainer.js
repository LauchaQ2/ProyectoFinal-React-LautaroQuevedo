import React, {useEffect, useState} from 'react';
import '../CategoriesContainer/CategoriesContainer.css';
import { Link } from "react-router-dom";
import { apiURL } from '../../config';
import CategoriesBanner from '../CategoriesBanner/CategoriesBanner';


export default function CategoriesContainer(){

    return(
        <CategoriesBanner/>
    )
}