import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from './asyncMock'; 
import ItemDetail from './itemdetail'; 


const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [product, setProduct] = useState(null);
    const [stockValue ] = useState(10); 
    const [initialValue] = useState(1); 
    useEffect(() => {
        if (itemId) {
            const fetchData = async () => {
                try {
                    const productData = await getProductById(itemId);
                    setProduct(productData);
                } catch (error) {
                    console.error(error);
                    setProduct(null);
                }
            };

            fetchData();
        } else {
            console.error("El itemId no se ha proporcionado.");
            setProduct(null);
        }
    }, [itemId]);

    return (
        <div>
            <h2>Detalles del Producto</h2>
            <ItemDetail product={product} stock={stockValue} initial={initialValue} />
        </div>
    );
};

export default ItemDetailContainer;