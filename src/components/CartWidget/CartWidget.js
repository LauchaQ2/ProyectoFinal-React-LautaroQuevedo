import React, {useState, useEffect, useContext} from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './CartWidget.css'
import CartContext from '../../context/CartContext';
import ModalCart from '../ModalCart/ModalCart'

const CartWidget = () => {
    const [showCart, setShowCart ] = useState(false)

    useEffect(() => {
        //console.log("products cartWidget" , products)
    })
    const {productCarts, totalPrice} = useContext(CartContext)

    const totalProducts = productCarts.map(productCart => productCart.quantity).reduce((prev, curr) => prev + curr, 0);

    


    const openCart = () => {
        setShowCart(!showCart)
        setTimeout( () => {
            setShowCart(!showCart)
          }, 100);
    }

    console.log("products desde agregados al carrito: ", productCarts)

    return(
        <>
        <ShoppingCartIcon onClick={openCart} sx={{ color: "#000" }} fontSize="medium" />
        {showCart && <ModalCart showCart={showCart} total={totalPrice} totalProducts={totalProducts} products={productCarts}/>}
        <span className="number-cart">{totalProducts}</span>
        </>
    )
}

export default CartWidget

    /*
    return(
        <>
        <ShoppingCartIcon onClick={showCart} sx={{ color: "#000" }} fontSize="medium" />
        {showModal && <ModalCart products={productCarts}/>}
        </>
    )

}*/