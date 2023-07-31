//Hoisting
//miFuncion(4,1,3,5)

//declaracion de funcion
function miFuncion(a,b,c,d){
    console.log(arguments.length)
   return a+b;
}
//Llamada a la funcion 
let resultado =miFuncion(2,3,6,10);
console.log(resultado);

//Declaración  Función de tipo Expresión
let x =function(a,b){return a+b};

resultado = x(1,2);
console.log(resultado);

(function (a,b){
    console.log("Ejecutando la funcion " + ( a + b));
})(3,4);

console.log( typeof miFuncion);

var miFuncionTexto =miFuncion.toString();
console.log(miFuncionTexto);
