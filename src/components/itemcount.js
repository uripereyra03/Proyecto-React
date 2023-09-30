import React, { useState } from 'react';

const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <div>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
            </div>
            <button onClick={() => onAdd(count)}>Agregar al Carrito</button>
        </div>
    );
};

export default ItemCount;
