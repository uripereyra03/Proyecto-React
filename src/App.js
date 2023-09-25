import React from 'react';
import UriApp from './components/NavBar';
import ContenidoCalzado from './components/ItemListConteiner';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Importa Switch solo una vez
import ItemListContainer from './components/ItemListConteiner';
import ItemDetailContainer from './components/itemdetailconteiner';

function App() {
    return (
        <Router>
            <UriApp />
            <Switch>
                <Route path="/" exact component={ItemListContainer} />
                <Route path="/category/:id" component={ItemListContainer} />
                <Route path="/item/:id" component={ItemDetailContainer} />
            </Switch>
            <ContenidoCalzado greeting="¡Bienvenido a Uri App! Aquí vas a encontrar indumentaria deportiva" />
        </Router>
    );
}

export default App;

