/*
Ejemplos de tipos de datos
*/
//tipo de string
var nombre = "inqui";
console.log (nombre);

nombre = 109.51;
console.log (typeof nombre);



var numero = 1000;

console.log(numero);

//Tipo de dato
var objecto = { 
    nombre: "juan",
    apellido: "perez",
    telefono: "7821231223"
}
console.log(typeof objecto);

//tipo de dato boblean (true,false)

var bandera = false;
console.log(typeof bandera);

//tipo de de dato function
function miFuncion(){}
console.log(typeof miFuncion)

//tipo de dato symbol
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//tipo clase es una funcion 
class persono{
    constructor(nombre,apellido){
        this.nombre =nombre;
        this.apellido = apellido;
    }
}
console.log(typeof persono);

//tipo undefined
var x;
console.log(x);
//null = ausencia de valor
var y = null;
console.log(typeof y);

var autos = ["BMW","AUDI","VOLVO"];
console.log(autos);
console.log(typeof autos);

var z = "";
console.log(z);
console.log(typeof z);