import {BrowserRouter, Routes, Route} from 'react-router-dom';
import NavBar from '../NavBar/NavBar.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';
import HomePage from '../../pages/HomePage/HomePage.js';
import ContactPage from '../../pages/ContactPage/ContactPage.js';
import AboutUsPage from '../../pages/AboutUsPage/AboutUsPage.js';
import ProductsPage from '../../pages/ProductsPage/ProductsPage.js';
import CategoriesContainer from '../CategoriesContainer/CategoriesContainer.js';
import CategoriesDetail from '../CategoriesDetail/CategoriesDetail.js';
import ItemListContainer from '../ItemListContainer/ItemListContainer.js';

export default function AppRouter(){
    return(
        <BrowserRouter>
            <NavBar/>
                <Routes>
                <Route path="/category/:category" element={<ItemListContainer/>}/>
                <Route path="/aboutus" element={<AboutUsPage/>}/>
                <Route path="/contact" element={<ContactPage/>}/>
                <Route path="/product/:id" element={<ItemDetailContainer/>}/>
                <Route path="/" element={<HomePage/>}/>
                <Route index element={<HomePage />}/> 
                </Routes>
            <Footer/>
      </BrowserRouter>
    )
}