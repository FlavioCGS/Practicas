//FORMA 1 
let Hora =15;

let saludo;

if(Hora==6 ||Hora==7 ||Hora==8 ||Hora==9 ||Hora==10 ||Hora==11 ){
    saludo="Buenos Dias";
}
else if(Hora==12 ||Hora==13 ||Hora==14 ||Hora==15 ||Hora==16 ||Hora==17 ||Hora==18){
    saludo="Buenos Tardes"
}
else if(Hora==19 ||Hora==20 ||Hora==21 ||Hora==22 ||Hora==23 ||Hora==24 ){
    saludo="Buenos Noches"
}
else if(Hora==0 ||Hora==1 ||Hora==2 ||Hora==3 ||Hora==4 ||Hora==5 ||Hora==6){
    saludo="Durmiendo"
}
else{
    saludo="los datos no son correctos"
}
console.log(saludo);

//FORMA 2 

let horaDia =21;
let Mensaje;

if(horaDia>=6 && horaDia<=11){
    Mensaje="Buenos Dias";
}
else if(horaDia>=12 && horaDia<=18){
    Mensaje="Buenos Tardes";
}
else if(horaDia >= 19 && horaDia <= 24){
    Mensaje="Buenos Noches";
}
 else if (horaDia>=0 && horaDia<=6){
    Mensaje="Durmiendo"
 }
 else{
    Mensaje="dato invalido"
 }
 console.log(Mensaje);