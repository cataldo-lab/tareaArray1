// Funciones en Javascript
// Fundamentos de programación en JavaScript

//Sintasis Básica

function saludar1(){
    console.log("¡Hola, mundo!");
}
saludar1();

/*
Beneficios de usar funciones

-Reutilizacion del codigo: Evitar repeticion de codigo.
-Modularidad: Divide el codigo en partes más manejables.
-Facilitan la depuracion: Se pueden probar y conseguir errores en funciones individuales
-Legibilidad: Hacer que el codigo sea más claro y fácil de entender.

 */

//Funcion declarativas
//Aplica Hoisted
console.log(sumar(2,3));
function sumar(a,b){
    return a + b;
}

//Funciones expresivas
//Estas pueden ser anonimas
const restar= function(a,b){
    return a + b;
};
console.log(restar(5,3));

/*
-Funciones anonimas:
-Pueden ser Autoejecutables:
 */

//Ejemplo funcion anonima auto ejecutable

(function (){
    console.log("Esta funcion se ejecuta de inmedito.");
    }
)();

//Funciones de flecha
const multiplicar = (a, b) => a * b;
console.log(multiplicar(4,3));

/*
-Sintaxis más clara y limpia:
-No tienen su propio this: heredan valores del contexto que fueron creadas.
Hace más facil coservar el valor del this donde furon creadas.
-Ideal para funciones pequeñas y callbacks: Debe ser corta
y usar dentro metodos (map, filter, reduce, etc).
-No pueden ser usadas como constructoras: No necesitan un constructor
no necesitas operador new
 */

//--------------------------------------------------------------------------

//Funciones de primera Clase

//Funcion principal
//Operacion vien de otra funcion
//a y b lo toma de operacion
const saludar = function(nombre){
    return `Hola, ${nombre}`;
};
console.log(saludar("Benjamin"));


function ejecutarOperacion(operacion, a,b){
    return operacion(a,b);
}
console.log(ejecutarOperacion((x,y)=>x+y,5,3));

//--------------------------------------------------------------------------

//Una funcuin pueden ser retornadas desde otras funciones
// Ejemplica Closures

function multiplicador(factor){
    return function(x){
        return x *factor;
    };
}

const duplicar= multiplicador(2);
console.log(duplicar(4)); //8

//--------------------------------------------------------------------------
console.log("_______________________________________________________________")
const operaciones=[
    function(a,b){return a+b;},
    function(a,b){return a-b;},
    function(a,b){return a*b;}
];

console.log(`Suma: ${operaciones[0](5,3)}`);
console.log(`Resta: ${operaciones[1](5,3)}`);
console.log(`Multiplicacion: ${operaciones[2](5,3)}`);

//--------------------------------------------------------------------------
console.log("_______________________________________________________________");

//Funciones de Orden Superior:
let a=[1,2,3];

//a.map(x=>x*2)
console.log(a.map(x=>x*2));

//a.filter(x=>x%2 === 0)
console.log(a.map(x=>x*2));

console.log(a.reduce((acc,x)=>acc+x,0));
/*
a contiene el [1,2,3]
acc es acumulado... su valor inicial es 0, cero
x es el valor Actual mientras se recorre la lista [1,2,3]
 */

//--------------------------------------------------------------------------
console.log("_______________________________________________________________");

/*
Ventajas funcion tradicional:
-Facil lectura y mantenimiento.
-Soportan hoisting
-pueden ser reutilizadas multiples veces en el programa.
 */

console.log("_______________________________________________________________");
console.log("Funciones anidadas");

function externa(){
    let mensaje="Hola desde la funcion externa";
    function interna(){
        console.log(mensaje + " y la funcion interna");
    }
    interna();
}
externa();

console.log("_______________________________________________________________");
console.log("Hoisting");

//Necesita una funcion tradicional
//No funciona con funciones anonimas o flecha

console.log("_______________________________________________________________");

const calcularAreaRectangulo = (base, altura) => base * altura;
console.log(calcularAreaRectangulo(2,3));
console.log(calcularAreaRectangulo(4,14));

console.log("_______________________________________________________________");

const esPar = (numero)=> (numero%2===0);
console.log(esPar(10));
console.log(esPar(15));

