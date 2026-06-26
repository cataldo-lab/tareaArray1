//metodos de Arreglos

/*
Metodos de modificacion del Arreglo
    push(): Agregar al final
    pop(): Eliminar al final

    unshift(): Agregar al inicio
    shift(): Eliminar al inicio

    splice() : Agregar, remover o reemplazar elementos.
-------------------------------------
 */
console.log("Agregar final: push")

let frutas=["Manzana","Banana"];
frutas.push("Naranja");
console.log(frutas);

console.log("________________________________");
console.log("");
console.log("Eliminar final: pop()");
console.log("");

let numeros=[1,2,3];
let eliminado=numeros.pop();
console.log(numeros);
console.log(eliminado);

console.log("________________________________");
console.log("");
console.log("unshift() : Agregar al inicio")

let colores=["Azul", "verde"];
colores.unshift("rojo");
console.log(colores);

console.log("");
console.log("________________________________");
console.log("");
console.log("shift(): Eliminar al inicio");
let letras=["A","B","C","D","E","F"];
let eliminado1=letras.shift();
console.log(letras);
console.log(eliminado1);

console.log("");
console.log("________________________________");
console.log("");
console.log("splice(): Agregar remover o reemplazar elementos");

let numeros1 = [1,2,3,4,5];
//Eliminar dos elementos desde la posicion 1
let eliminados=numeros1.splice[1.2];
console.log(numeros1);
console.log(eliminados);