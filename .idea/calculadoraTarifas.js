

const terceraEdad=65;
const estudiante=false;
const valorPasaje=7000;
const Destino="Rancagua"




let datosPasajero = [
    {
        nombreApellido: "Juan Pérez",
        edad: 66,
        estudiante: false,
        destino:"Rancagua"
    },
    {
        nombreApellido: "María Gómez",
        edad: 42,
        estudiante: false,
        destino:"Rancagua"
    },
    {
        nombreApellido: "Carlos López",
        edad: 15,
        estudiante: true,
        destino:"Concepcion"
    }
];


function calculadora(datosPasajero){
    let emisionPasaje=1000+valorPasaje;
    for (let i = 0; i < datosPasajero.length; i++) {

        if (datosPasajero[i].destino !== "Rancagua"){
            console.log("No va a destino");
            console.log(`Nombre y apellido: ${datosPasajero[i].nombreApellido},
            No va a Rancagua`);
            continue;
        }

        if(datosPasajero[i].edad >= terceraEdad && datosPasajero[i].estudiante==true){
            datosPasajero[i].estudiante=false;
        }


        if(datosPasajero[i].edad>=terceraEdad){
            let terceraPasaje=emisionPasaje*0.5;
            console.log(`Pasajero ${datosPasajero[i].nombreApellido}, paga ${terceraPasaje} pesos`);
        }
        else if(datosPasajero[i].estudiante === true){
            let estudiantePasaje=emisionPasaje*0.2;
            console.log(`Pasajero ${datosPasajero[i].nombreApellido}, paga ${estudiantePasaje} pesos`);

        }else{
            console.log(`Pasajero ${datosPasajero[i].nombreApellido}, paga ${emisionPasaje} pesos (Tarifa Normal)`);
        }


    }
}

calculadora(datosPasajero);