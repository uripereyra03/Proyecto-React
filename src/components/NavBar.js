import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cartwidget';

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-title navbar-title-inicio">Inicio</Link>
            <Link to="/productos" className="navbar-title">Productos</Link>
            <CartWidget></CartWidget>
        </div>
    );
};

export default NavBar;


