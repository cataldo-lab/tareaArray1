//Nombre y prototipo

function Persona(nombre){
    this.nombre=nombre;
}
Persona.prototype.saludar= function(){
    console.log("Hola, soy " + this.nombre + " y estoy aprendiendo JavaScript");
};

let juan=new Persona("Juan");
juan.saludar();

/*
-Permiten compartir metodos entre multiples instancias sin duplicar memoria
-mejorar la eficiencia al no definir metodos dentro de cada objeto.
-Facilitan la extension de funcionalidad en objetos ya existentes
 */


//Verificacion de propiedades:
console.log(juan.hasOwnProperty("nombre"));
console.log(juan.hasOwnProperty("saludar"));

//Exploracion de cadena de prototipos:

console.log(Object.getPrototypeOf(juan));