import React, { useEffect, useContext} from 'react'
import PersonIcon from '@mui/icons-material/Person';
import CartContext from '../../context/CartContext';
import ModalLogin from '../ModalLogin/ModalLogin'

const Login = ({size}) => {

    useEffect(() => {
    })
    const {openLogin, setOpenLogin} = useContext(CartContext)

    const openCart = () => {
        setOpenLogin(!openLogin)
    }

    return(
        <>
        <PersonIcon className={size < 500 && "widget-mobile"} onClick={openCart} sx={{ color: "#000" }} fontSize="medium" />
        {openLogin && <ModalLogin />}
        </>
    )
}

export default Login
