let miNumero = "18";

let edad = Number(miNumero);
console.log(edad)

if(isNaN(edad)){
    console.log("No es número");
}
 else{
    if (edad>=18){
        console.log("puede votar")
    }
    else{
        console.log("no puede votar")
    }
 }
 if(isNaN(edad)){
    console.log("No es número");
}
else{
    let resultado =(edad>=18) ? "puede votar":"Muy joven para votar";
console.log(resultado);
}