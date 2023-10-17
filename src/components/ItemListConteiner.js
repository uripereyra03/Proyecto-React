import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Itemlist from "./itemlist";
import {fetchProducts, getProductsByCategory} from "./asyncMock";

const ItemListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (categoryId) {
            getProductsByCategory(categoryId) .then((el) =>setProducts(el));
        } else {
            fetchProducts().then((el) => setProducts(el)); 
        }
    }, [categoryId]);
    console.log (products);
    return (
        <div>
            <h2>Tienda UriApp</h2>
            <Itemlist products={products} />
            <p>Bienvenidos, esta es mi tienda en linea, te podremos ofrecer calzado para hombre, zapatillas y botines de futbol, tambien tenemos remeras y shorts ,si quieres mas informacion puedes ir a la seccion de prodcutos donde encontraras los precios y demas, muchas gracias por confiar en nosotros.</p>
        </div>
    );
};

export default ItemListContainer;
