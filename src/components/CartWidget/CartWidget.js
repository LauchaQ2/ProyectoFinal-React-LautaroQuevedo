import React, {useState, useEffect, useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'
import CartContext from '../../context/CartContext';
import ModalCart from '../ModalCart/ModalCart'

const CartWidget = ({size}) => {
    const [showCart, setShowCart ] = useState(false)

    useEffect(() => {
    })
    const {productCarts, totalPrice,open, setOpen} = useContext(CartContext)

    const totalProducts = productCarts.map(productCart => productCart.quantity).reduce((prev, curr) => prev + curr, 0);

    
    


    const openCart = () => {
        setOpen(!open)
    }


    return(
        <>
        <ShoppingCartIcon className={size < 500 && "widget-mobile"} onClick={openCart} sx={{ color: "#000" }} fontSize="medium" />
        {open && <ModalCart showCart={showCart} total={totalPrice} totalProducts={totalProducts} products={productCarts}/>}
        <span className={size < 500 ? "number-cart-mobile" : "number-cart"}>{totalProducts}</span>
        </>
    )
}

export default CartWidget

   