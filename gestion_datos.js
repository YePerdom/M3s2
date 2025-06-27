// inicialización del proyecto
console.log("\nbienvenid@");

//objeto conformado por productos
const productos = {
    1:{ id: 1, nombre: "Laptop", precio: 2500000},
    2:{ id: 2, nombre: "Mouse", precio: 25000},
    3:{ id: 3, nombre: "Teclado", precio: 30000}
};
console.log();
console.table(productos);

// set de con los nombres de los productos
const setProductos = new Set(Object.values(productos).map(producto => producto.nombre));

//Map para agreagar categorias a los productos
const mapProductos = new Map([
    ["Laptop","Electronica"],
    ["Mouse","Accesorios"],
    ["Teclado","Accesorios"]
]);

//listado de pproductos por id más detalles
console.log(`\nProductos detallados:`);
for (const id in productos){
    console.log(`Producto ID: ${id}, Detalles: `, productos[id]);
}
console.log(`\nlistado de productos manejados`)
//Listado de productos únicos
for (const producto of setProductos){
    console.log(`- ${producto}`);
}
console.log("\nCategorias y productos:");
//Listado de categorias y productos
mapProductos.forEach((categoria,producto) => {
    console.log(`Categoria: ${categoria}, Producto: ${producto}`);
});
console.log()
