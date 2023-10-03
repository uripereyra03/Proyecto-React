import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cartwidget';

const categories = [
    { id: 1, name: 'Zapatillas', link: '/item/1', icon: '👟' },
    { id: 2, name: 'Botines Futbol 5', link: '/item/2', icon: '⚽' },
    { id: 3, name: 'Botines Futbol 11', link: '/item/3', icon: '⚽' },
    { id: 4, name: 'Botines Futbol 11 Combinados', link: "/item/4" , icon: '⚽' },
];

const NavBar = () => {
    return (
        <div className="navbar">
            <Link to="/" className="navbar-title navbar-title-inicio">Inicio</Link>
            {categories.map(category => (
                <Link key={category.id} to={category.link} className="navbar-category">
                    <span className="category-icon">{category.icon}</span>
                    <span className="category-name">{category.name}</span>
                </Link>
            ))}
            <CartWidget />
        </div>
    );
};

export default NavBar;
