const generacion18 = [
	{
		signature: 'Js',
		koders: ['ivan', 'Freddy'],
		mentor: 'ivan diaz',
	},
	{
		signature: 'HTML',
		koders: ['jason', 'penny', 'Freddy'],
		mentor: 'Alan ',
	},
	{
		signature: 'CSS',
		koders: ['arnold', 'ferald'],
		mentor: 'Alan ',
	},
	{
		signature: 'Introduccion',
		koders: ['steve', 'Charlie'],
		mentor: 'Elvira ',
	},
	{
		signature: 'React',
		koders: ['ivan', 'Harry', 'Freddy'],
		mentor: 'Alejandra',
	},
];

// - - -  Ejercicoo # 1 - - -
/* aplicar filtro por signature
input : 'Js'

output:
  {
       signature: 'Js',
       koders: [
          'ivan',
          'isra'
       ],
      mentor: 'ivan diaz'
  }
 */

console.log('\n- - - Ejercicio # 1 - - -');

function buscarEnMateria(search) {
	let indexW = 0;
	while (generacion18[indexW].signature != search) {
		indexW++;
	}
	console.log(generacion18[indexW]);
}

buscarEnMateria('Js');

// - - -  Ejercicoo # 2 - - -
/* input: "Freddy";
output: ["Js", "HTML", "React"]; */
console.log('\n- - - Ejercicio # 2 - - -');

function buscarPorAlumno(alumno) {
	for (let i = 0; i < generacion18.length; i++) {
		for (let j = 0; j < generacion18[i].koders.length; j++) {
			if (generacion18[i].koders[j] == alumno) {
				console.log(generacion18[i].signature);
			}
		}
	}
}

buscarPorAlumno('Freddy');
