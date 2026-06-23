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