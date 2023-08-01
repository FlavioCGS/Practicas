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

let persona2 = new Object();
persona2.nombre ="carlos";
persona2.direccion ="saturno15";
persona2.tel= "55443322";

console.log(persona2.tel);

