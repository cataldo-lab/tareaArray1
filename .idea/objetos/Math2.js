function numeroAleatorio(min, max) {
    console.log( Math.random()*(max - min) + min);
}

function numeroEnteroAleatorio(min, max) {
    console.log(Math.floor(Math.random() * (max - min) + min));
}

numeroAleatorio(5, 5);
numeroAleatorio(3, 5);
numeroAleatorio(4, 5);

numeroEnteroAleatorio(6, 5);
numeroAleatorio(7, 5);
numeroAleatorio(8, 5);

//Metodo
/*
toLowercase()

trim()

Este método es fundamental para limpiar el
texto introducido por los usuarios. Elimina los espacios en
 blanco (incluyendo tabulaciones y saltos de línea) de ambos
 extremos de un string, pero no toca los espacios que
 están entre las palabras.

normalize("NFD").remplace(/'word'/g,'word2')

replace se puede usar para normalizar

localeCompare()
localeCompare respeta el alfabeto de tu idioma.
Usada para ordenar los alfabetos de un
idioma.

const palabras = ['zapato', 'árbol', 'banco'];
palabras.sort((a, b) => a.localeCompare(b));
// Resultado correcto: ['árbol', 'banco', 'zapato']


String.match

match() se usa para extraer información que coincide con una expresión regular.
 */
