// Challenger 16 - Tablas Matematicas

let numero = Number(prompt("Ingrese Su Numero"));
let x = 0;

console.log(`La Tabla del ${numero} es:`);
if(!isNaN(numero)){
for(x=1; x<=10;x++){
        tabla=numero*x;
    console.log(`${numero} x ${x} = ${tabla}`);
}
}else console.log("INGRESE SOLO NUMEROS");
