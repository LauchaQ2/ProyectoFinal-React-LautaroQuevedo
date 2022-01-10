import React, {useState} from 'react';
import '../ItemCount/ItemCount.css';
import { Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export default function ItemCount({stock, initial, onAdd}){
        


    const [counter,setCounter] = useState(initial);


    
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
            <button onClick={subAmount} className="btn btn2 bg-light border">-</button>
            <input type="text" className="btn btn1 bg-light border" readOnly value={counter}/>
            <button onClick={addAmount} className="btn btn2 bg-light border">+</button>
            <div className="justify-content-center input-group mt-1 mb-1">
            <Button className="btn cart chart border" onClick={()=>onAdd(counter)}>
            <ShoppingCartIcon sx={{ color: "#000" }} fontSize="medium" />
            </Button>
            </div>
            </div>
        )
}