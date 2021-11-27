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
            <div className="justify-content-center input-group">
            <input type="text" className="btn btn1 bg-light border" readOnly value={amount}/>
            </div>
            <button onClick={subAmount} className="btn btn2 bg-light border">-</button>
            <button onClick={addAmount} className="btn btn2 bg-light border">+</button>
            <div className="justify-content-center input-group mb-3">
            <button className="btn chart bg-light border">AGREGAR</button>
            </div>
            </div>
        )
}