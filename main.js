const menu = [
    { nombre: "Hamburguesa Simple", precio: 1000 },
    { nombre: "Hamburguesa Doble", precio: 1500 },
    { nombre: "Hamburguesa Triple", precio: 2000 },
];

// Función para mostrar el menú
function mostrarMenu() {
    alert("¡Bienvenido a nuestro Negocio de Hamburguesas!\n\nMenú de Hamburguesas:");
    menu.forEach((hamburguesa, index) => {
        alert(`${index + 1}. ${hamburguesa.nombre} - $${hamburguesa.precio}`);
    });
}

// Función para tomar la orden del cliente
function tomarOrden() {
    const orden = [];
    let total = 0;

    mostrarMenu(); // Saludo al inicio

    while (true) {
        const eleccion = prompt("Ingrese el número de la hamburguesa que desea (o '0' para finalizar):");

        if (eleccion === "0") {
            break;
        }

        const indice = parseInt(eleccion) - 1;

        if (indice >= 0 && indice < menu.length) {
            const hamburguesa = menu[indice];
            orden.push(hamburguesa);
            total += hamburguesa.precio;
            alert(`Hamburguesa ${hamburguesa.nombre} agregada a la orden. Total: $${total}`);
        } else {
            alert("Opción no válida. Por favor, elija un número del menú.");
        }
    }

    const metodoDePago = prompt("Elija el método de pago: Tarjeta, Efectivo o Criptomonedas");

    if (metodoDePago) {
        if (metodoDePago.toLowerCase() === "criptomonedas") {
            total = aplicarDescuento(total); // Aplicar descuento del 10% si paga con criptomonedas
        }

        const resumenOrden = obtenerResumenOrden(orden, total, metodoDePago);
        alert("Resumen de la orden:\n" + resumenOrden);
        alert("¡Gracias por su compra! Vuelva pronto."); // Mensaje de agradecimiento al finalizar la compra
    } else {
        alert("Método de pago no especificado. La orden ha sido cancelada.");
    }
}

// Función para aplicar descuento del 10% si paga en criptomonedas
function aplicarDescuento(total) {
    return total * 0.9; // Reducir el total en un 10%
}

// Función para obtener un resumen de la orden con el método de pago
function obtenerResumenOrden(orden, total, metodoDePago) {
    let resumen = "Orden:\n";
    orden.forEach((hamburguesa) => {
        resumen += `${hamburguesa.nombre} - $${hamburguesa.precio}\n`;
    });
    resumen += `Total: $${total}\n`;
    resumen += `Método de Pago: ${metodoDePago}`;
    return resumen;
}

// Tomar la orden del cliente
tomarOrden();