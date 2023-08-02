let persona1={
    nombre:"juan",
    apellido:"perez",
    nombreCompleto: function(titulo,tel){
        return titulo +":"+ this.nombre + " " + this.apellido + "" + tel;
    }
}
let persona2 ={
    nombre:"Carlos",
    apellido:"Lara "
}
//uso de metodo apply
console.log(persona1.nombreCompleto("lic",789456));

let arreglo=["ing","456123"];
console.log(persona1.nombreCompleto.apply(persona2,arreglo));
