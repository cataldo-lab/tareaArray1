// Funciones en Javascript
// Fundamentos de programación en JavaScript

//Sintasis Básica

function saludar(){
    console.log("¡Hola, mundo!");
}
saludar();

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



