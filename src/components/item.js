import React from 'react';

function Item({ producto }) {
    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">${producto.precio.toFixed(2)}</p>
                    <button className="btn btn-primary">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    );
}

export default Item;
