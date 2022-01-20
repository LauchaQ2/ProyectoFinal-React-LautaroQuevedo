import React, {useState} from 'react';
import '../ItemCount/ItemCount.css';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function ItemCount({stock, initial, onAdd, size}){
        


    const [counter,setCounter] = useState(initial);
    const [added, setAdded] = useState("hidden added-to-cart");

    const handleAdded = () =>{
        setAdded("visible added-to-cart");
        setTimeout( () => {
            setAdded("hidden added-to-cart")
          }, 1500);
          console.log(added)
    }
    
    const addAmount = () => {
        if (counter === stock){
            return;
        }
        setCounter(counter + 1);
    }
    const subAmount = () => {
        if (counter === 1){
            return;
        }
        setCounter(counter - 1);
    }


        return(
            <div>
            <button onClick={subAmount} className={size > 500 ? "btn btn2 bg-light border" : "btn count-mobile bg-light border"}>-</button>
            <input type="text" className={size > 500 ? "btn btn2 fw-bold bg-light border" : "btn count-mobile bg-light border"} readOnly value={counter}/>
            <button onClick={addAmount} className={size > 500 ? "btn btn2 bg-light border" : "btn count-mobile bg-light border"}>+</button>
            <div className="justify-content-center input-group mt-1 mb-1">
            <Button className="btn cart chart border" onClick={()=>{onAdd(counter)}}>
            <ShoppingCartIcon onClick={handleAdded} sx={{ color: "#fff" }} fontSize="medium" />
            <span className={added}>¡Agregado!</span>
            </Button>
            </div>
            </div>
        )
}