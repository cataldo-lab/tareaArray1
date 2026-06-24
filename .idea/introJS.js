/*
Dentro de un HTML puedes agregar
<script
src="ruta/al/archivo/script.js">
</script>
 */

/*
Hay variables
    let
    const
    var (Ya no se usa).
 */

let nombre="Juan";
const nacionalidad="Chilena";

//Const fue intoducido en ES6

//Funciones nativas...

console.log("mensaje de prueba");
alert("¡Hola, mundo !");

//confirm()
//Una funcion de ventana emergente en el navegador

confirm("¿Esta seguro de eliminar este elemento");

//prompt:
//Es usado para la entrada de datos
prompt("Por favor, ingrese su nombre");

//Funcion conversion
// parseInt("10");
// parseFloat("3.14");

//La concatenacion se una un "+"

let apellido="Lopez";
let nombreCompleto= nombre + " " + apellido;

console.log(nombreCompleto);
//Resultado juan lopez;

// usar backStick

let mensaje =`Hola, ${nombreCompleto} !`;
console.log(mensaje);
//Resultado: "Hola, Juan Lopez ! "

//----------------------------

/*
Las expresiones matematicas basicas son
suma: +
resta -
multiplicacion: *
division: /
modulo: %
exponente: **
 */


/*
let x=10;

tradicional:
x=x+1;
x=x-1;

abreviada:
x++
x--
 */

/*
Operadores de asignacion
let z=10
z +=5;
z -=3
z *=2;
z /=4;
z %=2;


Operadores de comparacion
Igualdad (==): solo valor no tipo de dato
Igualdad estricta (===): valor y tipo de dato
desigualdad (!=): valor, no considera tipo
desigualdad estricta (!==), valor y tipo en la desigualdad

otros:
>
<
>=
<=


Operador logico:
Operador AND (&&)
Operador Or (||)
Operador Not (!)
 */

/*
Operador decision
if/ else if e else

switch
expresion: lo que se evalua
case: valores con que se compara la expresion
breack: quiebre
default: ningun caso es el por defecto
 */

let expresion

switch (expresion) {
    case valor1:
        break;

    case valor2:
        break;
    case valor3:
        break;

        default:
            break;
}

// condicion ?expresion1:expresion2;

let num1=7;
let num2=5;

let rta=num1>num2?"el 1":"el 2";

console.log(rta);

// Parte 2


//Elementos basicos
/*
mousemove: El movimiento del mouse activa el elemento
click: activa con el click mousedown o mouseup
mousedown/mouseup: oprime y suelta raton
mouseover/mouseout: el puntero entra y sale del elemento lo activa
keydown: cuando se presiona
keyup: cuando se suelta una tecla
 */

/*
getElementById(), querySelector(), createElement(), entre otros, para seleccionar,
crear y manipular elementos dentro del DOM.

getElementById():
El método getElementById() sirve para acceder a un elemento de la estructura HTML,
utilizando su atributo ID como identificación.

getElementsByTagName():
Este método permite seleccionar elementos por su etiqueta HTML. Recibe como argumento el
nombre de la etiqueta y devuelve una colección de elementos que coinciden con esa etiqueta.

getElementsByClassName():
Este método permite seleccionar elementos por su clase CSS. Recibe como argumento el
nombre de la clase y devuelve una colección de elementos que tienen esa clase.

Innet Text:
La propiedad innerText de un nodo nos permite modificar su nodo de texto. Es decir, acceder
y/o modificar el contenido textual de algún elemento del DOM.

Class Name
A través de la propiedad className de algún nodo seleccionado podemos acceder al
atributo class del mismo y definir cuáles van a ser sus clases:

remove()
El método remove() te permite eliminar un nodo seleccionado del DOM. puedes llamar a este
método en el nodo que deseas eliminar y se eliminará del árbol DOM.


 */