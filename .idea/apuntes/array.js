
//Almacenar lista de datos:
let usuarios = ["Ana","Carlos","Elena","Jorge"];
console.log(usuarios);

console.log("__________________________________________");

//Gestionar datos dinamicos:
let carrito=[]
carrito.push("Laptop");
carrito.push("Mouse");
console.log(carrito);

console.log("__________________________________________");

//Iterar sobre colecciones de datos:
//Mostrar una lista de productos en una tienda en línea.
let productos=["Camisa","Pantalon","Zapatos"];
productos.forEach(producto=>{
    console.log(producto);
})

console.log("__________________________________________");
console.log("Realizar operaciones masivas sobre datos");

let calificaciones = [80.90,100,70,85];
//Funcion Flecha
let promedio=calificaciones.reduce((a,b)=>a+b) /calificaciones.length;
console.log(`El promedio es: ${promedio}`);

console.log("__________________________________________");
console.log("Almacenar datos obtenidos de APIs");
async function obtenerUsuarios() {
    try {
        const res = await fetch('http://jsonplaceholder.typicode.com/users');
        const users = await res.json();
        console.log(users); // Corregido 'usuarios' por 'users'
    } catch (error) {
        console.error("Error al obtener datos:", error);
    }
}

obtenerUsuarios();
//Funcion asincrona.

console.log("__________________________________________");
console.log("Crear estructuras de datos más complejas")

let tareas =[
    {titulo:"Hacer ejercicio", prioridad:"Alta"},
    {titulo:"Comprar comida", prioridad:"Media"}
];
console.log(tareas[0].titulo);

console.log("__________________________________________");
let libros =["Cien años de soledad","1984",
"El señor de los anillos","Don Quijote"];
console.log(libros);

//Esto es una lista para un navegador
libros.forEach(libros=>{
    console.log(libros);
})