import React from 'react';
import { Link } from 'react-router-dom';

function Item({ producto }) {
    return (
        <div className="col-md-4">
            <div className="card mb-4">
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">${producto.precio.toFixed(2)}</p>
                    <Link to={'/item/' + producto.id} className="btn btn-primary">
                        Ver Detalles
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Item;