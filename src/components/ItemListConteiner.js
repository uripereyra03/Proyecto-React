import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Item from './item';

const ItemList = ({ products }) => {
    products = products || []; 
    console.log('Estado products en ItemList:', products);
    return (
        <div className="row">
            {products.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </div>
    );
};


const ItemListContainer = ({ fetchProducts }) => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchProducts();
                setProducts(data);

                console.log('Estado products en ItemListContainer:', data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [categoryId]);

    return (
        <div>
            <h2>Calzado</h2>
            <ItemList products={products} />
            <p>Esta es mi tienda en línea</p>
        </div>
    );
};

export default ItemListContainer;
