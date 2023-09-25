import React from 'react';

const CartWidget = ({ cantidadEnCarrito }) => {
    return (
        <div>
            <i className="fas fa-shopping-cart"></i> 
            <span>{cantidadEnCarrito}</span>
        </div>
    );
};


export default CartWidget;

