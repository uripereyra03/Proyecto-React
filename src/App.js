import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListConteiner';
import ItemDetailContainer from "./components/itemdetailconteiner"
import { getProducts as fetchProducts } from './components/asyncMock';

const MyApp = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer products={products} fetchProducts={fetchProducts} />} />
                <Route path="/category/:categoryId" element={<ItemListContainer products={products} fetchProducts={fetchProducts} />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyApp;
