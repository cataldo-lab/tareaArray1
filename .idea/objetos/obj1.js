//Objetos

//this: es usado en el metodo constructor.

let persona={
        nombre:"Juan",
        edad: 30,
        saludar: function (){
            console.log(`Nombre: ${persona.nombreApellido}`);
    }
};


//Creacion con constructor Object

let usuario=new Object();
usuario.numbre="Ana";
usuario.edad=25;

console.log(persona);

//Uso de una Funcion Constructora

function Persona(nombre, edad){
    this.nombre=nombre;
    this.edad=edad;
}

let personal=new Persona("Carlos",40);

//Los objetos son variables de referencia

console.log(personal);

//Usuario Objeto.create():

let prototipo={
    saludar(){
        return("Hola!");

    },

    saludobkn(){
        return("Hola mi bro, QU");
    }

};

let nuevoObjeto=Object.create(prototipo);
console.log(nuevoObjeto.saludobkn());
console.log(nuevoObjeto.saludar());

//Usando Clases (ES6+)

class Animal{
    constructor(nombre, tipo){
        this.nombre=nombre;
        this.tipo=tipo;
    }
}

let perro=new Animal("Rex","Perro");
console.log(`${perro.nombre} es mi ${perro.tipo}, lo amo !`);