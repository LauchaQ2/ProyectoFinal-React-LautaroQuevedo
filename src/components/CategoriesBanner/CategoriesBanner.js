import React, {useEffect, useState} from 'react';
import './CategoriesBanner.css';
import { Link } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';


export default function CategoriesBanner({products}){

    const [loader, setLoader] = useState(true)
    
    useEffect(() => {
        setTimeout( () => {
            setLoader(false)
          }, 2000);
        }
    , [])

    return(


        <div>
            {
                
            loader
                  ?
                    <div className='text-center'>
                    <CircularProgress />
                    </div>
                  :
                  <>
                <div className="container-fluid containerBanner d-flex justify-content-center align-items-center">
                    <div className="row d-flex flex-wrap">
                        <div className="col-md-6 d-flex justify-content-center flex-wrap">
                            <h2 className="C">CERVEZAS</h2>
                            <Link to={`/category/${2}`}>
                            <img className="img-fluid " src="https://i.ibb.co/whSFBtB/cerveza-banner.png"></img>
                            </Link>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center flex-wrap">
                            <h2 className="C">VINOS</h2>
                            <Link to={`/category/${1}`}>
                            <img className="img-fluid " src="https://i.ibb.co/FbrxVHp/vinos-banner.png"></img>
                            </Link>
                        </div>
                    </div>
                </div>
                  </>
            }
            
        </div>


        
    )
}