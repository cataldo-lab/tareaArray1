class Animal{
    constructor(nombre, tipo, sonido){
        this.nombre = nombre;
        this.tipo = tipo;
        this.sonido=sonido;
    }
    hacerSonido(){
        console.log(`Este animal hace un sonido que es: ${this.sonido}`);
    }
}

const miLobo = new Animal("Lobo", "Canino","Aulla");
const miGallo = new Animal("Gallo", "Ave", "Cacarea");
console.log(miLobo);
console.log(miGallo);

miGallo.hacerSonido();
miLobo.hacerSonido();

/*
class >>> { constructor(...)

           }
           {Fs(){}...
           }

 */