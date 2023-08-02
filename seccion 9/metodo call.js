let persona1={
    nombre:"juan",
    apellido:"perez",
    nombreCompleto: function(titulo,tel){
        return titulo + "" + this.nombre + " " + this.apellido + " ," + tel;
    }
}

let persona2={
    nombre:"juan",
    apellido:"perez",
     
}

//Uso de call para usar
// el metodo persona1.nombreCompleto con los datos de la persona2
console.log(persona1.nombreCompleto("lic ","789456132"));

console.log(persona1.nombreCompleto.call(persona2," ING ","78945631"));
