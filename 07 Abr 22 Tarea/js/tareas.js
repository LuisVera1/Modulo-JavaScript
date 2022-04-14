

/* - - - - - EJERCICIO # 1 - - - - -
1- Evaluar una calificacion
-Solicitar una calificacion al usuario de 0 a 100
-Evaluemos con un if si su calificacions es A, B, C, D, E, etc
-Mostremos con un switch su calificacion.
	
Calificaciónes
< 60  calificacion 'F'
< 70 calificacion 'D'
< 80 calificacion C
< 90 calificacion B
< 100 calificacion A*/

let calf =Number(prompt("Ingresa una calificación"));
let caso = ""

if(calf <= 100 && calf >= 90){
  caso = "A";
}else if (calf <90 && calf >=80){
  caso = "B";
}else if (calf <80 && calf >=70){
  caso = "C";
}else if (calf <70 && calf >=60){
  caso = "D";
}else if (calf <60 && calf >= 0){
  caso = "F";
}

console.log("Calificacion = " + calf)

switch (caso){
    case "A":
    console.log("Calificación: A");
    break;
    
    case "B":
    console.log("Calificación: B");
    break;

    case "C":
    console.log("Calificación: C");
    break;   
    
    case "D":
    console.log("Calificación: D");
    break;  

    case "F":
    console.log("Calificación: F");
    break;

    default:
    console.log("Ingresa una calificación válida"); 
}

/*  - - - - - EJERCICIO # 2 - - - - -
2- Casa de cambio

Crear una funcion que obtenga  una cantidad de  dinero a traves de prompt(), tambien debe  pedirle el nombre de un pais , investigar su moneda y el tipo de cambio para hacer la conversion de  la cantidad capturada. ejemplo: 

1-¿Que cantidad en MXN deseas convertir ?
R= 1500 MXN
2¿A que pais vas a viajar?
R= USA*/

let money = Number(prompt("¿Qué cantidad en MXN quieres cambiar?"));
let opcion = prompt("¿A qué país vas a viajar? (USA,Francia,Australia,Canada)");
let conversion = 0;

switch(opcion){
  case "USA":
    conversion = money * 0.05;
    console.log("$" + money +" MXN equivale a $" + conversion + " USD");
  break;
  
  case "Francia":
    conversion = money * 0.046;
    console.log("$" + money +" MXN equivale a $" + conversion + " EUR");
  break;
  
  case "Australia":
    conversion = money * 0.067;
    console.log("$" + money +" MXN equivale a $" + conversion + " AUD");
  break;
  
  case "Canada":
    conversion = money * 0.063;
    console.log("$" + money +" MXN equivale a $" + conversion + " CAD");
  break;

  default:
    console.log("Ingrese un país valido");
  break;
}
