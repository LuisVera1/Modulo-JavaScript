// - - - Ejercicio # 1 - - -
/*  -Pedir al usuarui un numero entre el 1 y el 10
 -imprimir todos los numeros pares que existen entre 1 y el numero selccionado */

console.log('- - - Ejercicio # 1 - - -');
let entryE1 = Number(prompt('Escribe un número entre 1 y 10'));
console.log('Los números pares entre 1 y ' + entryE1 + ' son:');

for (let i = 1; i <= entryE1; i++) {
	if (i % 2 == 0) {
		console.log(i);
	}
}

// - - - Ejercicio # 2 - - -
/* imprimir en consla la sumaa total de todos los digitos de una cantidad
input: 1234
output: 10 */
console.log('\n- - - Ejercicio # 2 - - -');
let entryE2 = prompt('Escribe un número de más de dos cifras');
let suma = 0;
console.log('Número ingresado: ' + entryE2);

for (let k = 0; k < entryE2.length; k++) {
	suma += Number(entryE2[k]);
}
console.log('La suma de los dígitos del número ingresado es: ' + suma);

// - - - Ejercicio # 3 - - -
/* mostar en consola el sigueinte patron
 *
 **
 ***
 ****
 *****
 ******
 ******* */
console.log('\n- - - Ejercicio # 3 - - -');
let cadenaE3 = '';

for (let j = 0; j < 7; j++) {
	cadenaE3 += '*';
	console.log(cadenaE3);
}

// - - - Ejercicio # 4 - - -
/*

input
let koders = [
  ['jose', 'de anda'],
  ['danny', 'vazquez'],
  ['Aaron', 'Enciso']
];

output
let result = [
  {
      nombre: 'jose',
      apellido: 'de anda'
  },
  {
      nombre: 'danny',
      apellido: 'vazquez'
  },
  {
      nombre: 'Aaron',
      apellido: 'Enciso'
  }
];
*/
console.log('\n- - - Ejercicio # 4 - - -');

let koders = [
	['Jose', 'de Anda'],
	['Danny', 'Vazquez'],
	['Aaron', 'Enciso'],
	['Alan', 'Guerrero'],
	['Daniel', 'Aguilar'],
	['Nestor', 'Ramirez'],
	['Noemi', 'Gutierrez'],
	['Jonathan', 'Flores'],
	['Peter', 'Roblez'],
];

//Se crea objeto vacio
let result = [];

//Llamada a la funcion
createObj(result, koders);

// Array para el resultado (salida), arrary de entrada
function createObj(res, arrayEnt) {
	for (let i = 0; i < arrayEnt.length; i++) {
		let objTemp = new Object();

		objTemp.nombre = arrayEnt[i][0];
		objTemp.apellido = arrayEnt[i][1];
		result.push(objTemp);
	}
}

console.log(result);
