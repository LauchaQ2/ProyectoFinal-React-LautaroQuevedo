import { createContext, useState} from "react";

const CartContext = createContext();

 const CartProvider = ({children}) => {
    const [products, setProducts] = useState([])
    const showProducts = () =>{
        console.log("Vengo del CartContext")
    }
    const addProducts = ({product}) =>{
        setProducts(...products, product)
    }

    const data = {
        products,
        showProducts
    }


    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export {CartProvider};
export default CartContext;
