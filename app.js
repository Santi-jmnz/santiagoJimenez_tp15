// Importar el módulo peliculas.js
const peliculas = require('./peliculas.js');
let fs = require("fs");
let mensaje = fs.readFileSync("./mensaje.txt");
let leerMensaje = mensaje.toString();
console.log(leerMensaje);


// Mostrar el detalle de cada película usando un bucle for
console.log("Listado de películas favoritas:\n");

for (let i = 0; i < peliculas.length; i++) {
    console.log(`ID: ${peliculas[i].id}`);
    console.log(`Título: ${peliculas[i].name}`);
    console.log(`Rating: ${peliculas[i].rating}`);
    console.log(`Premios: ${peliculas[i].awards}`);
    console.log(`Duración: ${peliculas[i].length} minutos`);
    console.log(`Precio: $${peliculas[i].price}`);
    console.log(`Género: ${peliculas[i].genre}`);
    console.log("---------------");
}
