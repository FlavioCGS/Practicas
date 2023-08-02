//Funcion de constructor de tipo persona
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre+ " " +this.apellido;
    }
}

let padre = new Persona("juan","perez","jperez@email.com");
console.log(padre.nombreCompleto());

let madre = new Persona ("inqui","cidor","@outlook");
console.log(madre.nombreCompleto());

padre.nombre = "carlos"

console.log(padre);
console.log(madre);

//Como crear distintos objetos
let miObjeto = new Object
let miObjeto2 ={};

let miCadena = new String("holo");
let miCadena2 ="Hola";

let miNumero = new Number(1);
let miNumero2 =1

let miBoolean = new Boolean(false);
let MIboolean2 = false;

let miArreglo = new Array();
let miArreglo2 =[];

let miFuncion = new Function ();
let miFuncion2 = function(){};