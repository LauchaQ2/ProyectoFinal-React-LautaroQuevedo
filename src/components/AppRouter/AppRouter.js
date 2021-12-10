import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import HomePage from '../../pages/HomePage/HomePage.js';
import ContactPage from '../../pages/ContactPage/ContactPage.js';

export default function AppRouter(){
    return(
        <BrowserRouter>
            <NavBar/>
                <Routes>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/product/:id" element={<ItemDetailContainer/>}/>
                <Route path="/" element={<HomePage/>}/>
                </Routes>
            <Footer/>
      </BrowserRouter>
    )
}