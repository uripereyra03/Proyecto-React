import React from 'react';
import UriApp from './components/NavBar';
import ContenidoCalzado from './components/ItemListConteiner';


function App() {
    return (
        <div>
            <UriApp />
            <ContenidoCalzado greeting="¡Bienvenido a Uri App! Aqui vas a encontrar indumentaria deportiva" />
        </div>
    );
}

export default App;

