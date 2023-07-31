//Ejemplo AND(&&)
let a = 10;
let valMin =0, valMax=10;

if( a >=valMin && a <=valMax){
    console.log("Dentro del rango");
}
else{
    console.log("Fuera de rango");
}

//Ejemplo de OR (||),regresa true si cualquiera operado es true
let vacaciones = false, disDescanso=true;

if(vacaciones||  disDescanso){
    console.log("Padre puede asistir al juego del hijo");
}
else{
    console.log("El padre esta ocupado");
}
