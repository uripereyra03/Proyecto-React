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
            <h2>Calzado</h2>
            <Itemlist products={products} />
            <p>Esta es mi tienda en línea</p>
        </div>
    );
};

export default ItemListContainer;
