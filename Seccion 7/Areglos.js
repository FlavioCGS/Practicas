//let autos = new Array("BMW","MERCEDES","vOLVO");
const AUTOS =["BMW","MERCEDES","vOLVO"];
console.log(AUTOS);

console.log(AUTOS[0]);
console.log(AUTOS[2]);

for (let i=0; i < AUTOS.length ; i++){
    console.log(i + ":" + AUTOS[i]);
}

AUTOS[1]="MercedesBenz";
console.log(AUTOS[1])

AUTOS.push("audi");
console.log(AUTOS)

console.log(AUTOS.length)
AUTOS[AUTOS.length]="cadillac";

console.log(AUTOS)

AUTOS[5]="porshe"//Agragar datos a una array en el lugar indicado
console.log(AUTOS)

console.log(typeof AUTOS);

console.log(Array.isArray(AUTOS)); //forma de comprabar si es una array
console.log(AUTOS instanceof Array)