import React, {useState} from 'react';
import '../ItemCount/ItemCount.css';

export default function ItemCount(){
        
        var stock = 10;

        const [amount, setAmount] = useState(0);

        const addAmount = () => {
            if(amount<stock){
                setAmount(amount + 1);
            }
            
        }
        const subAmount = () => {
            if(amount>0){
                setAmount(amount - 1);
            }
            
        }

        return(
            <div>
            <h5>Stock: {stock}</h5>
            <div className="justify-content-center input-group mb-3">
            <input type="text" className="btn btn1 bg-light border" readOnly value={amount}/>
            </div>
            <button onClick={subAmount} className="btn btn2 bg-light border">-</button>
            <button onClick={addAmount} className="btn btn2 bg-light border">+</button>
            </div>
        )
}