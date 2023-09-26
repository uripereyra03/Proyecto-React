import React, { useState, useEffect } from 'react';



const ItemDetailContainer = ({ match }) => {
    const [product, setProduct] = useState(null);
    const productId = match.params.id; 

    useEffect(() => {
        
        if (productId) {
            fetch(`tu-api/productos/${productId}`)
                .then((response) => response.json())
                .then((data) => setProduct(data))
                .catch((error) => {
                    
                    console.error(error);
                    setProduct(null); 
                });
        } else {
            
            console.error("El productId no se ha proporcionado.");
            setProduct(null); 
        }
    }, [productId]);

    return (
        <div>
            {product ? (
                <div>
                    <h2>{product.nombre}</h2>
                    <p>Precio: ${product.precio}</p>
                    <p>Descripción: {product.descripcion}</p>
                </div>
            ) : (
                <p>No se pudo cargar los detalles del producto.</p>
            )}
        </div>
    );
};
export default ItemDetailContainer;