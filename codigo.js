alert("Bienvenido/a!")

let nombre = prompt("Ingrese su nombre y apellido");
console.log("el nombre del usuario es " + nombre);

let juego = prompt("Ingrese cuantos juegos desea comprar");
if (juego > 5) {
    alert("El maximo de juegos que puede seleccionar es 5");

}
else {
    alert("Juegos seleccionados : " + juego);
}

//nombre del juego//

const game = [
    {
        nombre: "Spiderman",
        precio: "6000",
        stock: "60",
    },

    {
        nombre: "fifa",
        precio: "8000",
        stock: "120",

    },
    {
        nombre: "God of war",
        precio: "7000",
        stock: "48",
    },
    {
        nombre: "NBA",
        precio: "6500",
        stock: "96",
    }
];
game.forEach((game => console.log("Nombre del juego:" + game.nombre)));
game.forEach((game => console.log("El precio establecido como " + game.precio + " de el juego " + game.nombre + " puede cambiar en proximos meses")));
game.forEach((game => console.log("El stock disponible de " + game.nombre + " es:" + game.stock)));

const gameBarato = game.filter((game) => game.precio < 8000);
console.log(gameBarato);



let videojuego = prompt("¿Que juego desea comprar? ( seleccione 0 para salir)");
while (videojuego > "0") {
    switch (videojuego) {
        case "spiderman":
            alert("El costo de este videojuego es de 6000 pesos");
            break;
        case "fifa":
            alert("El costo de este videojuego es de 8000 pesos");
            break;
        case "God of war":
            alert("El costo de este videojuego es de 7000 pesos");
            break;
        case "NBA":
            alert("El costo de este videojuego es de 6500 pesos");
    }
    videojuego = prompt("¿Que juego desea comprar? ( seleccione 0 para salir)");
}

const Juegos = ["fifa", "nba", "spiderman", "god of war"]
console.log(Juegos)
console.log(Juegos[0] + " y " + Juegos[1] + " sacan distintas versiones cada año")
console.log("El juego " + Juegos[2] + " es la version de 2018")

let nuevo = prompt("Que otro juego le interesa?")
Juegos.push(nuevo)
console.log(Juegos)

let envio = prompt("1-Envio a domicilio \n2-Retirar por local");
let domicilio;
if (envio == 1) {
    domicilio = true;
}

else if (envio == 2) {
    domicilio = false;
}
else {
    alert("error")

}

let total = prompt("Ingrese monto total correspondido");

function Entrega(eleccionEnvio, montoFinal) {
    if (eleccionEnvio == true) {
        alert("Su envio llegara entre 2-3 dias habiles con un costo de " + montoFinal);
    } else {
        alert("Puede retirar por locar de lunes a sabados entre 9-18 hrs con un costo de " + montoFinal);
    }
}

Entrega(domicilio, total)

function calcularDescuento(total, porcentaje) {
    let descuento = total * (porcentaje / 100);
    return descuento;
}



let modoDePago = prompt('Modo de pago\n1-Efectivo\n2-Debito\n3-Credito');
switch (modoDePago) {
    case '1':
        let descuentoEfectivo = calcularDescuento(total, 30);
        alert('Tienes un descuento de $' + descuentoEfectivo);
        break;
    case '2':
        let descuentoDebito = calcularDescuento(total, 15);
        alert('Tienes un descuento de $' + descuentoDebito);

        break;
    case '3':
        let descuentoCredito = 0;
        alert('Tienes un descuento de $' + descuentoCredito);
        break;
    default:
        alert('Error');
        break;
}

function Consola(modelo, color, precio) {
    this.modelo = modelo
    this.color = color;
    this.precio = precio;

}


const consola1 = new Consola("Playstation 5", "negro", "$60.000")
console.log(consola1)
const consola2 = new Consola("Playstation 4", "negro", "$30.000")
console.log(consola2)
const consola3 = new Consola("Xbox 360", "blanco", "$25.000")
console.log(consola3)

