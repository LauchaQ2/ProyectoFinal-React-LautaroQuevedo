import { createContext, useState } from "react";
import { useParams } from 'react-router-dom';

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [productCarts, setProducts] = useState([])
    const [quant, setQuant] = useState();
    const [open, setOpen] = useState(false);

    const isInCart = id => productCarts.some(productCart => productCart.id === id);

    
    const addProducts = (productCart, quantity) => {
        if (isInCart(productCart.id)){
            const newAddProducts = productCarts.map(currentElement=>{
                if(currentElement.id === productCart.id){
                    console.log("el current tiene",currentElement.quantity)
            return{...currentElement, quantity: currentElement.quantity + quantity}                 
        }else return currentElement
                })
            setProducts(newAddProducts)
        }else{
            setProducts(prev => [...prev, {...productCart, quantity}]);   
            }
     }

     const totalPrice = productCarts.reduce(function (acc, curr) {
        return acc + curr.quantity * curr.price;
    },0);

    const clearCart = () => setProducts([]);

    const removeItem = (id) => setProducts(productCarts.filter(productCart=>productCart.id !==id));
    const data = {
        clearCart,
        setQuant,
        productCarts,
        addProducts,
        removeItem,
        totalPrice,
        open, 
        setOpen
    }
    
    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext