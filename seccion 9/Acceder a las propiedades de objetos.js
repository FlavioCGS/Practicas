let persona ={
    nombre: "juan",
    apellido: "perez",
    email: "jperez@mail.com",
    edad:28,
    nombreCompleto: function(){
        return this.nombre + " "+ this.apellido;
    }
}

console.log(persona.nombre);
console.log(persona["apellido"]);

//for in
for( nombrePropiedad in persona){
console.log(nombrePropiedad);
console.log(persona[nombrePropiedad]);
}