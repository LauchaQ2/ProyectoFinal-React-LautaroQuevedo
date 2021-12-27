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
    const {products} = useContext(CartContext)

    const openCart = () => {
        setShowCart(!showCart)
    }

    console.log("products desde agregados al carrito: ", products)

    return(
        <>
        <ShoppingCartIcon onClick={openCart} sx={{ color: "#000" }} fontSize="medium" />
        {showCart && <ModalCart products={products}/>}
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