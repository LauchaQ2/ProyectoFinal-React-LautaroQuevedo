import React, {useState, useEffect, useContext} from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CartContext from '../../context/CartContext';
import ModalLogin from '../ModalLogin/ModalLogin'

const Login = () => {
    const [showCart, setShowCart ] = useState(false)

    useEffect(() => {
    })
    const {productCarts, totalPrice, openLogin, setOpenLogin} = useContext(CartContext)

    const totalProducts = productCarts.map(productCart => productCart.quantity).reduce((prev, curr) => prev + curr, 0);

    
    


    const openCart = () => {
        setOpenLogin(!openLogin)
    }

    return(
        <>
        <PersonIcon onClick={openCart} sx={{ color: "#000" }} fontSize="medium" />
        {openLogin && <ModalLogin showCart={showCart} total={totalPrice} totalProducts={totalProducts} products={productCarts}/>}
        </>
    )
}

export default Login
