import React, { useEffect, useState } from 'react';
import NavBar from './components/NavBar';
import ContenidoCalzado from './components/ItemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListConteiner';
import ItemDetailContainer from './components/itemdetailconteiner';

const MyApp = () => {
    const [products, setProducts] = useState([]);

    // Fetch the products from the server
    const fetchProducts = async () => {
        const response = await fetch(`/api/products`);
        const data = await response.json();
        setProducts(data);
    };

    // Load the products when the component mounts
    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" exact element={<ItemListContainer products={products} />} />
                <Route path="/category/:id" component={ItemListContainer} />
                <Route path="/item/:id" component={ItemDetailContainer} />
            </Routes>
            <ContenidoCalzado greeting="¡Bienvenido a Uri App! Aquí vas a encontrar indumentaria deportiva" />
        </BrowserRouter>
    );
};

export default MyApp;
