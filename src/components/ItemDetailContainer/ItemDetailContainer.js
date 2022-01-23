import React, {useEffect, useState} from 'react';
import '../ItemListContainer/ItemListContainer.css';
import '../ItemList/ItemList.css';
import ItemDetail from '../ItemDetail/ItemDetail.js';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';
import db from '../../firebaseconfig';
import { doc, getDoc } from 'firebase/firestore';


export default function ItemDetailContainer(){

const {id} = useParams();

const [loader, setLoader] = useState(true)
    const [products, setProducts] = useState([])
    
    async function getProducts(db){
      const docRef = doc(db, "productos", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      let producto = docSnap.data();
      producto.id = docSnap.id;
      setProducts(producto);
      setTimeout( () => {
        setLoader(false)
      }, 500);
      return producto;
    } else {
      console.log("No such document!");
    }
    }
    


    useEffect(() => {
      getProducts(db)
    }, [id])


    return(
        
        <div className="container-fluid d-flex flex-wrap justify-content-center">
          {loader ?
          <CircularProgress/>
          :
            <ItemDetail data={products}/>
            }
        </div>
    )
}