import React, { useEffect, useState } from 'react';

const ItemDetailContainer = ({ match }) => {
    const [product, setProduct] = useState(null);
    const productId = match.params.id; 

    useEffect(() => {
        // Aquí puedes realizar una solicitud a tu API para obtener los detalles del producto
        // Reemplaza la siguiente línea con tu código de solicitud
        fetch(`tu-api/productos/${productId}`)
            .then((response) => response.json())
            .then((data) => setProduct(data));
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
                <p>Cargando detalles del producto...</p>
            )}
        </div>
    );
};

export default ItemDetailContainer;
