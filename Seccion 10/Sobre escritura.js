class Persona {
    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido =apellido;
        this._edad =edad;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    //Sobreescribiendo el metodo  de la clase padre(object)
    nombreCompleto(){
        return this._nombre + " " +this._apellido;
    }
    //Seaplica poliformismo(multiples formas en tiempo de ejecucion)
    //el metodo que se ejecuta depende si es una referencia de tipoo padre
    //o de tipo hijo
    toString(){
        return this.nombreCompleto();
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, edad, Departamento){
        super(nombre, apellido,edad);//llakmar al constructor  de clase padre
        this._Departamento = Departamento;
    }
    get Departamento(){
        this._Departamento;
    }
    set Departamento(Departamento){
        this._Departamento = Departamento
    }
    // Sobre escritura
    nombreCompleto(){
            return super.nombreCompleto() +", "+ this._Departamento;
        }
    
}

let persona1 = new Persona("juan","Perez");
console.log(persona1);

let Empleado1 = new Empleado("Maria", "gimenes",28 ,"Sistemas")
console.log(Empleado1);
console.log(Empleado1.nombreCompleto());
console.log(Empleado1.toString());