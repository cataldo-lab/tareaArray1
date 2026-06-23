//Algebra con arreglos

let a =[1,2,3];
let b =[3,4,5];

let union = [... new Set([...a,...b])];
console.log(union);
//Patron de union de arreglos

/*
Se utiliza en ECMASScript 6
    [...a,...b](concatenacion): Utiliza el operador de propagacion

    new Set(...) : Eliminacion de duplicados.

    [...new Set(...)] : (Convension a arreglo).

    ... : Spread Operador : operador de propagacion
 */

console.log("______________________________________");
console.log("______________________________________");

let interseccion = a.filter(valor => b.includes(valor));
console.log(interseccion);

console.log("______________________________________");
console.log("______________________________________");

let diferencia = a.filter(valor => !b.includes(valor));
console.log(diferencia);

console.log("______________________________________");
console.log("______________________________________");

let diferencia2 = b.filter(valor => !a.includes(valor));
console.log(diferencia2);

//Depende el orden de diferencia que entrega el resultado.

console.log("______________________________________");
console.log("______________________________________");

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(matriz[1][2]);

for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i]);
}
console.log("Recorrer matriz 2D");
console.log("______________________________");
console.log("______________________________");

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Elemento en fila ${i}, columna ${j}:${matriz[i][j]}`);
    }
}

console.log("______________________________");
console.log("______________________________");

console.log("Inicio de objeto");

let usuario ={
    nombre: "Sofia",
    edad:28,
    bandaFavorita: "Almas Perdidas"
}

console.log(usuario["nombre"]);
console.log(usuario["edad"]);

