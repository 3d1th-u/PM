export class Cliente {
    constructor(referenciaCocina, referenciaCaja) {
        this.cocina = referenciaCocina;
        this.caja = referenciaCaja;
    }

    consultarProductos() {
        this.cocina.listarProductosPublico();
    }

    crearPedido(id, cantidad) {
        this.caja.agregarPedido(id, cantidad);
    }

    listarPedidos() {
        this.caja.listarPedidos();
    }

    verPromociones() {
        console.log("\n--- PROMOCIONES VIGENTES ---");
        const enOferta = this.cocina.productos.filter(p => p.promocion > 0);
        if (enOferta.length === 0) {
            console.log("No hay promociones por ahora.");
        } else {
            enOferta.forEach(p => {
                console.log(`* ${p.nombre}: ${p.promocion}% OFF. Llévatelo por $${p.precioConDescuento().toFixed(2)}`);
            });
        }
        console.log("----------------------------\n");
    }
}

// --- INTERFAZ DE CONSOLA PARA CLIENTE ---
export function uiAgregarPedidoCliente(rl, cliente, callbackMenu) {
    rl.question("ID del producto: ", id => {
        rl.question("Cantidad: ", cantidad => {
            cliente.crearPedido(Number(id), Number(cantidad));
            callbackMenu();
        });
    });
}