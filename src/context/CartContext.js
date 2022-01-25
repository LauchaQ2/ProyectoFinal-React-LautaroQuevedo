import { createContext, useState } from "react";
import { collection, getDocs , query, where } from 'firebase/firestore';
import db from '../../src/firebaseconfig';


const CartContext = createContext();

const CartProvider = ({children}) => {
    const [productCarts, setProducts] = useState([])
    const [open, setOpen] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [checkOutModal, setCheckOutModal] = useState(false);
    const [logged, setLogged] = useState(false)
    const [username, setUsername] = useState("")
    const [ordersByUser, setOrdersByUser] = useState([])
    const [itemsByOrder, setItemsByOrder] = useState([])
    const [requestOrders, setRequestOrders] = useState(false)
    const [dataCredit, setDataCredit] = useState({
        nombre : '',
        numero : '',
        fecha: '',
        cvc: ''
    })
    

    function isInCart(id) {
        return productCarts.some(productCart => productCart.id === id);
    }

    
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
    
    const removeItem = (id, quantity) => {
        const ProductExist = productCarts.find(productCart=>productCart.id === id)
        if (ProductExist.quantity === 1){
        setProducts(productCarts.filter(productCart=>productCart.id !==id));
    }else{
        setProducts(productCarts.map(productCart => productCart.id === id 
            ? {...ProductExist, quantity: ProductExist.quantity - 1}:
            productCart))
    }
    }

    const addItem = (id, quantity) => {
        const ProductExist = productCarts.find(productCart=>productCart.id === id)
        if (ProductExist.quantity > 0){
            setProducts(productCarts.map(productCart => productCart.id === id 
                ? {...ProductExist, quantity: ProductExist.quantity + 1}:
                productCart))
    }
    }

    async function getOrderByUsername(){
        const q = query(collection(db, "ordenes"), where("username", "==", username));
    
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            if(requestOrders === false){
            console.log(doc.id)
            const obj = doc.id
            ordersByUser.push(obj)
            console.log(ordersByUser)
            setRequestOrders(true)
            console.log(requestOrders)
        }else{
            return null;
        }
        
        });
      
    }


    const data = {
        clearCart,
        productCarts,
        addProducts,
        removeItem,
        totalPrice,
        open, 
        setOpen,
        checkOutModal, 
        setCheckOutModal,
        addItem,
        dataCredit,
        setDataCredit,
        openLogin,
        setOpenLogin,
        logged,
        setLogged,
        username,
        setUsername,
        ordersByUser, 
        setOrdersByUser,
        itemsByOrder,
        setItemsByOrder,
        requestOrders, 
        setRequestOrders,
        getOrderByUsername
    }
    
    return(
        <CartContext.Provider value={data} >
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider }
export default CartContext