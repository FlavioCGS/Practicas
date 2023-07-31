let sumar = function(a,b,c){
    console.log(arguments[0]);
    console.log(arguments[1])
    console.log(arguments[2])
    return a+b+ arguments[2];

};


resultado = sumar(12,10,7);
console.log(resultado)

/*FUNCION TIPO FLECHA

const SumarFuncionTipoFlecha = (a,b) => a + b;
resultado = SumarFuncionTipoFlecha(3,5);
console.log(resultado);
*/
