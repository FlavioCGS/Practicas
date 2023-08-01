let persona ={
    nombre: "juan",
    apellido: "perez",
    email: "jperez@mail.com",
    edad:28,
    nombreCompleto: function(){
        return this.nombre + " "+ this.apellido;
    }
}
// agragar propiedades a objetos
persona.tel="789456132";

//eliminar propiedades aobjetos
delete persona.tel;

console.log(persona);

//Contatenar cada valor de cada propiedad
console.log(persona.nombre + "," +persona.apellido);

//for in
for(nombrePropiedad in persona){
    console.log(persona[nombrePropiedad]);
}

let personaArray = (Object.values(persona));
console.log(personaArray);

//combertir los datos a una Array

let personaString =JSON.stringify(persona);
console.log(personaString);