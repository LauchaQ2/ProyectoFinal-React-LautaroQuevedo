import React, {useState} from 'react';
import '../ItemCount/ItemCount.css';

export default function ItemCount({stock}){
        

        const [amount, setAmount] = useState(1);

        const addAmount = () => {
            if(amount<stock){
                setAmount(amount + 1);
            }
            
        }
        const subAmount = () => {
            if(amount>1){
                setAmount(amount - 1);
            }
            
        }

        return(
            <div>
            <h5>Stock: {stock}</h5>
            <button onClick={subAmount} className="btn btn2 bg-light border">-</button>
            <input type="text" className="btn btn1 bg-light border" readOnly value={amount}/>
            <button onClick={addAmount} className="btn btn2 bg-light border">+</button>
            <div className="justify-content-center input-group mt-2">
            <button className="btn chart border">AGREGAR</button>
            </div>
            </div>
        )
}