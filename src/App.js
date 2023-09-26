import React from 'react';
import UriApp from './components/NavBar';
import ContenidoCalzado from './components/ItemListConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListConteiner';
import ItemDetailContainer from './components/itemdetailconteiner';

function App() {
    return (
        <BrowserRouter>
            <UriApp />
            <Routes>
                <Route path="/" exact element={<ItemListContainer />} />
                <Route path="/category/:id" component={ItemListContainer} />
                <Route path="/item/:id" component={ItemDetailContainer} />
            </Routes>
            <ContenidoCalzado greeting="¡Bienvenido a Uri App! Aquí vas a encontrar indumentaria deportiva" />
        </BrowserRouter>
    );
}

export default App;