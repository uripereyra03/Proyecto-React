import React from 'react';
import ItemCount from './itemcount'; 

const ItemDetail = ({ product }) => {

    const onAdd = (quantity) => {
        console.log(`Agregado al carrito: ${quantity} unidades`);
    };

    return (
        <div>
            {product ? (
                <div>
                    <h2>{product.nombre}</h2>
                    <p>Precio: ${product.precio}</p>
                    <p>Descripción: {product.descripcion}</p>
                    <ItemCount onAdd={onAdd} /> 
                </div>
            ) : (
                <p>Error al cargar los detalles del producto:</p>
            )}
        </div>
    );
};

export default ItemDetail;
