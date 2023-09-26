import React from 'react';
import { useParams } from 'react-router-dom';

const [carrito, setCarrito] = useState([]);

const agregarAlCarrito = (producto) => {
    setCarrito([...carrito, producto]);
};

function DetalleProducto() {
    const { id } = useParams();
    const productos = [
        { id: '1', nombre: 'Zapatillas', precio: 19.98 },
        { id: '2', nombre: 'Botines de fútbol 5', precio: 29.99 },
        { id: '3', nombre: 'Botines de fútbol 11', precio: 39.99 },
        { id: '4', nombre: 'Botines de fútbol 11, tapones combinados', precio: 50.99 },
    ];

    const producto = productos.find((p) => p.id === id);

    if (!producto) {
        return <p>Producto no encontrado</p>;
    }

    return (
        <div>
            <h2>Detalle del Producto</h2>
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio.toFixed(2)}</p>
            <img src={producto.imagen} alt={producto.nombre} />
            <p>{producto.descripcion}</p>
            <button
                className="btn btn-primary"
                onClick={() => agregarAlCarrito(producto)}
            >
                Agregar al Carrito
            </button>

        </div>
    );
}

export default DetalleProducto;
