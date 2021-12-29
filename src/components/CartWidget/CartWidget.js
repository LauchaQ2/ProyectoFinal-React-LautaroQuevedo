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
    const {productCarts} = useContext(CartContext)

    const openCart = () => {
        setShowCart(!showCart)
    }

    console.log("products desde agregados al carrito: ", productCarts)

    return(
        <>
        <ShoppingCartIcon onClick={openCart} sx={{ color: "#000" }} fontSize="medium" />
        {showCart && <ModalCart products={productCarts}/>}
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