export const getProducts = async () => {
};

export const productosCalzado = [
    { id: 1, nombre: 'Zapatillas', precio: 20.99, categoria: 'calzado', },
    { id: 2, nombre: 'Botines de fútbol 5', precio: 29.99, categoria: 'calzado',  },
    { id: 3, nombre: 'Botines de futbol 11', precio: 39.99, categoria: 'calzado' },
    { id: 4, nombre: 'Botines de futbol 11, tapones combinados', precio: 50.99, categoria: 'calzado',  },
];


export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        resolve(productosCalzado.filter((producto) => producto.categoria === category));
    });
};


export const getProductById = (id) => {
    return productosCalzado.find((producto) => producto.id === parseInt(id));
};

export const fetchProducts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return productosCalzado;
};
