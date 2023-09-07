import React from 'react';
import UriApp from './components/UriApp';
import ContenidoCalzado from './components/ContenidoCalzado';
import CartWidget from './components/cartwidget';

function App() {
    return (
        <div>
            <UriApp />
            <ContenidoCalzado greeting="¡Bienvenido a Uri App! Aqui vas a encontrar indumentaria deportiva" />
            <CartWidget/>
        </div>
    );
}

export default App;

