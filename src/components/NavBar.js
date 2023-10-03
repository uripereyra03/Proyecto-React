import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cartwidget';

const  categories  = [
    { id: 1, name: 'Productos', link: "/", },
    { id: 2, name: 'Detalles de productos', link: "/item/:itemId", },

];

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/category/:categoryId" className="navbar-title navbar-title-inicio">Inicio</Link>
            {categories.map(category => (
                <Link key={category.id} to={category.link} className="navbar-category">
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-name">{category.name}</span>
                    <span className="category-description">{category.description}</span>
                </Link>
            ))}
            <CartWidget />
        </div>
    );
};

export default NavBar;
