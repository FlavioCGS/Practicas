//NO es posible crear objetos antes de declarar la clase
//NO se aplica el concepto de Hoisting
//let persona2 = new Persona("Karla","Juarez");


class Persona {
    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido =apellido;
        this._edad =edad;
    }
    get nombre(){
        return this._nombre;
    }
    get edad(){
        return this._edad
    }

    set nombre(nombre){
        this._nombre = nombre;
    }
    set edad(edad){
        this._edad =edad;
    }

}

let Persona1 = new  Persona("juan","perez",28);
Persona1.nombre="juan Carlos";
Persona1.edad =25;
console.log(Persona1._apellido);


/*
console.log(Persona1);

let persona2 = new Persona("inqui","cidor",73);
console.log(persona2)*/

let persona2 = new Persona("Karla","Juarez");
console.log(persona2);