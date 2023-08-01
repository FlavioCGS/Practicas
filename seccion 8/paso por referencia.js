let x =10;

function cambiarValor(a){
    a=20;
    return;
}

//paso por valor
cambiarValor(x);10
console.log(x);

const persona ={
    nombre:"juan",
    apellido:"perez",
    apellido2:"diaz"
}

function cambiarValorObjeto(p1){
    p1.nombre="carlos";
    p1.apellido ="lara"
}

cambiarValorObjeto(persona);
console.log(persona);