import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListConteiner';
import ItemDetailContainer from './components/itemdetailconteiner';

const MyApp = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const response = await fetch(`/api/products`);
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<ItemListContainer products={products} />} />
                <Route path="/category/:categoryId" element={<ItemListContainer />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyApp;
