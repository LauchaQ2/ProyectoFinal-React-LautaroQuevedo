import React, {useEffect, useState} from 'react';
import '../CategoriesBanner/CategoriesBanner.css';
import { Link } from "react-router-dom";


export default function CategoriesBanner({products}){


    return(
        <div className="container-fluid">
            <div className="row d-flex flex-wrap">
                <div className="col-md-12 d-flex justify-content-center flex-wrap">
                    <h2 className="C">CERVEZAS</h2>
                    <Link to={`/categories/${2}`}>
                    <img className="img-fluid " src="https://i.ibb.co/whSFBtB/cerveza-banner.png"></img>
                    </Link>
                </div>
                <div className="col-md-12 d-flex justify-content-center flex-wrap">
                    <h2 className="C">VINOS</h2>
                    <Link to={`/categories/${1}`}>
                    <img className="img-fluid " src="https://i.ibb.co/FbrxVHp/vinos-banner.png"></img>
                    </Link>
                </div>
            </div>
        </div>
    )
}