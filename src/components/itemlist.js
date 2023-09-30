import React from 'react';
import Item from './item';

const ItemList = ({ products }) => {
    console.log('Estado products en ItemList:', products);
    return (
        <div className="row">
            {products.map((producto) => (
                <Item key={producto.id} producto={producto} />
            ))}
        </div>
    );
};

export default ItemList;
