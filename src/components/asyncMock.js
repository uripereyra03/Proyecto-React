export const getProducts = async () => {
};

export const productosCalzado = [
    { id: 1, nombre: 'Zapatillas', precio: 30.99, categoria: 'calzado', descripcion: "Comodas, resistentes y esteticas." },
    { id: 2, nombre: 'Botines de futbol', precio: 49.99, categoria: 'calzado', descripcion: "Comodas, resistentes y esteticas." },
    { id: 3, nombre: 'Remeras', precio: 39.99, categoria: 'Ropa', descripcion: "Buena calidad, comodas y de todos los equipos." },
    { id: 4, nombre: 'Shorts', precio: 29.99, categoria: 'Ropa', descripcion: "Comodos, resistentes y de todos los equipos." },
];


export const getProductsByCategory = (category) => {
    return new Promise((resolve) => {
        resolve(productosCalzado.filter((producto) => producto.categoria === category));
    });
};


export const getProductById = (id) => {
    return new Promise((resolve) => {
        resolve(productosCalzado.find((producto) => producto.id === parseInt(id)));
    });
};

export const fetchProducts = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return productosCalzado;
};

