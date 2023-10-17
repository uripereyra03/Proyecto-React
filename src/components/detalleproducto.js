import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function DetalleProducto() {
    const { id } = useParams();
    const [carrito, setCarrito] = useState([]);
    const productos = [
        { id: '1', nombre: 'Zapatillas', precio: 40.98, imagen: 'url_de_la_imagen', descripcion: 'Descripción de las zapatillas' },
        { id: '2', nombre: 'Botines de futbol', precio: 60.99, imagen: 'url_de_la_imagen', descripcion: 'Descripción de los botines de fútbol 5' },
        { id: '3', nombre: 'Remeras', precio: 39.99, imagen: 'url_de_la_imagen', descripcion: 'Descripción de los botines de fútbol 11' },
        { id: '4', nombre: 'Shorts', precio: 29.99, imagen: 'url_de_la_imagen', descripcion: 'Descripción de los botines de fútbol 11, tapones combinados' },
    ];

    const producto = productos.find((p) => p.id === id);

    if (!producto) {
        return <p>Producto no encontrado</p>;
    }

    const agregarAlCarrito = () => {
        setCarrito([...carrito, producto]);
        console.log(`Agregado al carrito: ${producto.nombre}`);
    };

    return (
        <div>
            <h2>Detalle del Producto</h2>
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio.toFixed(2)}</p>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.descripcion}</p>
            <button className="btn btn-primary" onClick={agregarAlCarrito}>
                Agregar al Carrito
            </button>
        </div>
    );
}

export default DetalleProducto;
