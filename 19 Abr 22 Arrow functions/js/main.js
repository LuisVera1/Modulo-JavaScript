//- - - Ejercicio 1 - - -
console.log('\n- - - Ejercicio # 1 - - -');

let input = ['Jason Vorhees', 'Penny Wise', 'Freddy Krueger'];
let output1 = [];

/* output: 
[
  'koder 1: Jason Vorhees'
  'koder 2: Penny Wise',
  'koder 3: Freddy Krueger',
] */

input.forEach((name, i) => output1.push('Koder ' + (i + 1) + ': ' + name));
console.log(output1);

// Ejercicio 2
console.log('\n- - - Ejercicio # 2 - - -');
let input2 = [
	{
		koder: 'Arnold',
		score: 80,
	},
	{
		koder: 'Gerald',
		score: 80,
	},
	{
		koder: 'Gelga',
		score: 80,
	},
	{
		koder: 'Peer',
		score: 80,
	},
	{
		koder: 'Thomas',
		score: 80,
	},
];

/*
<60 F
<70 D
<80 C
<90 B
<100 A

output: {
  promedio del grupo: 90
  calificacion del grupo: A
} */

function devolverCalificacion(calf) {
	let CalfL = '';
	if (note >= 90 && note <= 100) {
		CalfL = 'La calificación del frupo es A';
	} else if (note >= 80) {
		CalfL = 'La calificación del frupo es B';
	} else if (note >= 70) {
		CalfL = 'La calificación del frupo es C';
	} else if (note >= 60) {
		CalfL = 'La calificación del frupo es D';
	} else if (note >= 0) {
		CalfL = 'La calificación del frupo es F';
	} else {
		CalfL = 'Ingresa calificaciones validas';
	}
	return CalfL;
}

let amount = 0;
let students = 0;
let note = 0;

input2.forEach((koder) => {
	amount += koder.score;
	students++;
});
note = amount / students;

let res = devolverCalificacion(note);
console.log(res);
