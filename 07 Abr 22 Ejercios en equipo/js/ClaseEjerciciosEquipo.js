

// Ejercicio # 1
// 1. Pedir al usuario dos letras, y determinar si la primera aparece antes o después en el alfabeto.
let letra1 = prompt("Escribe una letra");
let letra2 = prompt("Escribe otra letra");

if(letra1<letra2){
  console.log("La primera letra aparece antes")
}else{
  console.log("La primera letra aparece después")
}

//Ejercicio # 2
/*2. Pedir 2 datos por prompt:
- Si a > b dividir a entre b
- Si a < b sumar a más b
- si a == b multiplicar ambos numeros
Imprimir el resultado en consola*/
let a = Number(prompt("Escribe un número"));
let b = Number(prompt("Escribe un segundo número"));

if(a>b){
  console.log(a/b);
} else if(a<b){
  console.log(a+b);
}else{
  console.log(a*b);
}

// Ejercicio # 3
/*3. Pedir al usuario por prompt un numero entre 1 y 100
- Verificar si es un par o impar e imprimir en resultado en consola*/
let numeroU = Number(prompt("Escribe un número entre 1 y 100"));

if(numeroU % 2 ==0){
  console.log("El número es par");
}else{
  console.log("El número es impar");
}

// Ejercicio # 4
/*4. Pedir al usuario los siguientes datos a un usuario (nombre, peso actual en kg):
- Calcular el peso que tendria esa persona en la luna en Imprimirlo en consola*/
 let nombre = prompt("Escribe tu nombre");
 let peso = prompt("Escribe tu peso en kg");

 let pesoLuna = peso * 0.165; //Conversión de peso 
 console.log("Hola " + nombre + ", tu peso en la luna sería de " + pesoLuna + " kg");


// - - - - Actividades en clase - - - - 

//
//Switch
//
let fruta = "ciruela";

switch (fruta){
  case "ciruela":
    console.log("es amarilla");
    console.log("y pequeña");
    break;
  case "Manzana":
    console.log("Es roja");
    break;
  default:
    console.log("No hay descripción");
    break;
}


//Operador terniario
let genero = "F"

const persona = genero == "F"? "Natalia":"Ramon";
console.log(persona);
