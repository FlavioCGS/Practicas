//Funcion de constructor de tipo persona
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new Persona("juan","perez","jperez@email.com");
console.log(padre);

let madre = new Persona ("inqui","cidor","@outlook");
console.log(madre);

padre.nombre = "carlos"