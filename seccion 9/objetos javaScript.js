let x=10;
console.log(x.length);

let persona ={
    nombre: "juan",
    apellido: "perez",
    email: "jperez@mail.com",
    edad:28,
    nombreCompleto: function(){
        return this.nombre + " "+ this.apellido;
    }
}

console.log(persona.nombre)
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.nombreCompleto());
console.log(persona);