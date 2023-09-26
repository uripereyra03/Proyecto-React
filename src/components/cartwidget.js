import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = ({ cantidadEnCarrito }) => {
    return (
        <div className="cart-widget">
            <Link to="/cart">
                <i className="fas fa-shopping-cart fa-2x"></i>
                <span>{cantidadEnCarrito}</span>
            </Link>
        </div>
    );
};

export default CartWidget;
