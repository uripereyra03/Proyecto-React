import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListConteiner';
import ItemDetailContainer from "./components/itemdetailconteiner"

const MyApp = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element= {<ItemListContainer/>}/>
                <Route path="/category/:categoryId" element={<ItemListContainer/>} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyApp;
