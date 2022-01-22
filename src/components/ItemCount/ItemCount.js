import React, {useState} from 'react';
import '../ItemCount/ItemCount.css';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function ItemCount({stock, initial, onAdd, size}){
        


    const [counter,setCounter] = useState(initial);
    const [added, setAdded] = useState("hidden added-to-cart");
    const [addedMobile, setAddedMobile] = useState("hidden added-to-cart-mobile");

    const handleAdded = () =>{
        setAdded("visible added-to-cart");
        setAddedMobile("visible added-to-cart-mobile")
        setTimeout( () => {
            setAdded("hidden added-to-cart")
            setAddedMobile("hidden added-to-cart-mobile")
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
            <div className='d-flex justify-content-around'>
            <div className="justify-content-center w-auto input-group mt-1 mb-1">
                <button onClick={subAmount} className={size > 500 ? "btn btn2 bg-light border" : "btn count-mobile bg-light border"}>-</button>
                <input type="text" className={size > 500 ? "btn btn2 fw-bold bg-light border" : "btn count-mobile bg-light border"} readOnly value={counter} />
                <button onClick={addAmount} className={size > 500 ? "btn btn2 bg-light border" : "btn count-mobile bg-light border"}>+</button>
            </div>
            <div className='d-flex justify-content-around'>
                   <Button className="btn chart border" onClick={() => { onAdd(counter); } }>
                        <ShoppingCartIcon onClick={handleAdded} sx={{ color: "#fff" }} fontSize="medium" />
                        <span className={size > 500 ? added : addedMobile}>¡Agregado!</span>
                    </Button>
                </div>
                </div>
            
        )
}