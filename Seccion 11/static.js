class Persona {

    static contadorObejetosPersona = 0;//atributo de nuestra clase

    email="valor deafult email";//atributo de nuestra clase

    constructor(nombre,apellido,edad){
        this._nombre = nombre;
        this._apellido =apellido;
        this._edad =edad;
        Persona.contadorObejetosPersona++;
        console.log("se incrementa contador: " + Persona.contadorObejetosPersona )
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
    static saludar(){
    console.log("saludos desde static");       
    }
    static saludar2(persona){
        console.log(persona.nombre+" "+ persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, edad, Departamento){
        super(nombre, apellido,edad);//llamar al constructor  de clase padre
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
//persona1.saludar(); no es posible llamar un método static desde un objeto

Persona.saludar();
Persona.saludar2(persona1);

Empleado.saludar();
Empleado.saludar2(Empleado1);

console.log(persona1.contadorObejetosPersona);
console.log(Persona.contadorObejetosPersona);

console.log(Empleado.contadorObejetosPersona);

console.log(persona1.email);
console.log(Empleado1.email);
console.log(Persona.email);
console.log(Empleado.email);