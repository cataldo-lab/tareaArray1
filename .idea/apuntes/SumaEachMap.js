const number=[10,20,30,40,50];


function suma(){

    let sumaEach= number.forEach((acc,numero)=>acc + numero,0);

    let sumaMap= number.map((acc,numero)=>acc+numero,0)

    console.log(`Suma Each: ${sumaEach}`);
    console.log(`Suma Map: ${sumaMap}`);
}

suma();