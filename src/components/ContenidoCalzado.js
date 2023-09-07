import React from 'react';

function ContenidoCalzado({ greeting }) {
    const productosCalzado = [
        { id: 1, nombre: 'Zapatillas', precio: 19.99 },
        { id: 2, nombre: 'Botines de fútbol 5 ', precio: 29.99 },
        { id: 3, nombre: 'Botines de futbol 11', precio: 39.99 },
        { id: 4, nombre: 'Botines de futbol 11, tapones combinados', precio: 50.99 },
    ];

    return (
        <div>
            <h2>Calzado</h2>
            <div className="row">
                {productosCalzado.map((producto) => (
                    <div key={producto.id} className="col-md-4">
                        <div className="card mb-4">
                            <div className="card-body">
                                <h5 className="card-title">{producto.nombre}</h5>
                                <p className="card-text">${producto.precio.toFixed(2)}</p>
                                <button className="btn btn-primary">Agregar al Carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <p>{greeting}</p>
        </div>
    );
}

export default ContenidoCalzado;


