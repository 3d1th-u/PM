const readline = require('readline');

const productos = [
    { id: 1, nombre: "Cafe", precio: 30 },
    { id: 2, nombre: "Conchas", precio: 15 },
    { id: 3, nombre: "Te", precio: 25 },
    { id: 4, nombre: "Fresas", precio: 40 },
    { id: 5, nombre: "Hotcakes", precio: 50 }
];

const pedidos = [];

const interfaz = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function consultarProductos() {
    console.log(`\n--- PRODUCTOS ---`);
    for (let i = 0; i < productos.length; i++) {
        console.log(`[${productos[i].id}] ${productos[i].nombre} - $${productos[i].precio}`);
    }
}

function crearPedido(idProducto, cantidad) {
    let productoEncontrado = null;
    for (let i = 0; i < productos.length; i++) {
        if (productos[i].id === idProducto) {
            productoEncontrado = productos[i];
        }
    }

    if (productoEncontrado !== null) {
        pedidos.push({ nombre: productoEncontrado.nombre, cantidad: cantidad });
        console.log(`\nPedido agregado`);
    } else {
        console.log(`\nProducto no encontrado`);
    }
}

function listarPedidos() {
    console.log(`\n--- MIS PEDIDOS ---`);
    if (pedidos.length === 0) {
        console.log(`Sin pedidos`);
    } else {
        for (let i = 0; i < pedidos.length; i++) {
            console.log(`${pedidos[i].cantidad}x ${pedidos[i].nombre}`);
        }
    }
}

function mostrarMenu() {
    console.log(`\n--- MENU ---`);
    console.log(`1. Consultar Productos`);
    console.log(`2. Crear pedido productos`);
    console.log(`3. Listar pedidos`);
    console.log(`4. Salir`);
    interfaz.question(`Elige una opción: `, procesarOpcion);
}

function procesarOpcion(opcion) {
    if (opcion === "1") {
        consultarProductos();
        mostrarMenu();
    } else if (opcion === "2") {
        interfaz.question(`ID del producto: `, function(id) {
            interfaz.question(`Cantidad: `, function(cantidad) {
                crearPedido(parseInt(id), parseInt(cantidad));
                mostrarMenu();
            });
        });
    } else if (opcion === "3") {
        listarPedidos();
        mostrarMenu();
    } else if (opcion === "4") {
        console.log(`Saliendo...`);
        interfaz.close();
    } else {
        console.log(`no extiste esta opción`);
        mostrarMenu();
    }
}

mostrarMenu();