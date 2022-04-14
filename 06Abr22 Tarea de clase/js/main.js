
/*
Ejercicio 1:
pedir 2 números al usuario y mostrar en consola el resultado de aplicar todas las operaciones aritméticas entre esos dos números

ejercicio 2:
pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo
*/

let num1 = prompt("Ingresa un numero");
let num2 = prompt("Ingresa un segundo numero");

//- - - - Ejercicio # 1 - - - -
let = resultado = 0;
console.log("- - - Ejercicio # 1 - - -");

resultado= num1 + num2;
console.log("Suma: " + resultado);

resultado= num1 - num2;
console.log("Resta: " + resultado);

resultado= num1 / num2;
console.log("División: " + resultado);

resultado= num1 * num2;
console.log("Multiplicacion: " + resultado);

//- - - - Ejercicio # 2 - - - - 
console.log("- - - Ejercicio # 2 - - -")

if(num1>num2){
  console.log("El primer número es mayor");
}else if (num1<num2){
  console.log("El segundo número es el  mayor") 
} else{
  console.log("Los núneros son iguales")
}
