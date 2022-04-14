
// Ejercicio 1:

// Solicitar al usuario ingresar un numero
// Crear una funcion que genere un string con caracteres aleatorios, 
// la longitud del string debe ser igual que el numero que ingreso el usuario
// input : 6
// output: '6AQX>H'

console.log("- - - Ejercicio # 1 - - - ")
//- - - Ejercicio # 1 - - - 
let number = Number(prompt("Ingresa la logitud del string"))
let stringRes = ""

for (let i = 0; i < number; i++){
  stringRes += String.fromCharCode(Math.floor(Math.random()*(126-33))+33);
  //console.log(stringRes);
}
console.log(stringRes);


// Ejercicio 2:
// Pedir al usuario usuario un numero entre 1 y 10

// Imprimir la tabla de multiplicar de ese número
// p.ej.
// 3 x 1 = 3
// 3 x 2 = 6

console.log("\n- - - Ejercicio # 2 - - - ")
// - - - Ejercicio # 2 - - - 
let table = Number(prompt("Escribe un numero"));
let res = 0;

for(let i = 1; i <= 10; i++){
  res = i * table;
  console.log(table + " x " + i + " = " + res)
}