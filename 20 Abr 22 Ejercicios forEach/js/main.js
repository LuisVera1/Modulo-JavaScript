// -obtener el score promeddio de cada materia (HTML, CSS, JS, ReactJS)

// -obtener el promedio individual de cada mentor

// -crear un array de strings con la siguiente forma:
//     "Mi nombre es {nombre} y mi promedio es de {promedio}"

// -obtener la lista de mentores cuyo promedio sea mayor a 9.5

const mentorsArray = [
	{
		name: 'Ivan',
		scores: [
			{
				signature: 'HTML',
				score: 8,
			},
			{
				signature: 'CSS',
				score: 10,
			},
			{
				signature: 'JS',
				score: 8,
			},
			{
				signature: 'ReactJS',
				score: 8,
			},
		],
	},
	{
		name: 'Alejandra',
		scores: [
			{
				signature: 'HTML',
				score: 8,
			},
			{
				signature: 'CSS',
				score: 7,
			},
			{
				signature: 'JS',
				score: 10,
			},
			{
				signature: 'ReactJS',
				score: 10,
			},
		],
	},
	{
		name: 'Alan',
		scores: [
			{
				signature: 'HTML',
				score: 9,
			},
			{
				signature: 'CSS',
				score: 9,
			},
			{
				signature: 'JS',
				score: 10,
			},
			{
				signature: 'ReactJS',
				score: 9,
			},
		],
	},
	{
		name: 'Oscar',
		scores: [
			{
				signature: 'HTML',
				score: 8,
			},
			{
				signature: 'CSS',
				score: 10,
			},
			{
				signature: 'JS',
				score: 9,
			},
			{
				signature: 'ReactJS',
				score: 10,
			},
		],
	},
];

// - - - Ejercicio # 1 - - -
console.log('\n- - - Ejercicio # 1 - - -');

let amountPSignature = [0, 0, 0, 0];
let nameSignature = [];

mentorsArray.forEach((mentor) => {
	mentor.scores.forEach((note) => {
		let signatureS = note.signature;
		let scoreS = note.score;

		switch (signatureS) {
			case 'HTML':
				amountPSignature[0] += scoreS;
				break;
			case 'CSS':
				amountPSignature[1] += scoreS;
				break;
			case 'JS':
				amountPSignature[2] += scoreS;
				break;
			case 'ReactJS':
				amountPSignature[3] += scoreS;
				break;
			default:
				// Funciones para cuando exista una nueva materia...
				break;
		}
	});
});

amountPSignature.forEach((sum, i) => {
	console.log('El promedio de ' + mentorsArray[0].scores[i].signature + ' es de ' + sum / 4);
});



// - - - Ejercicio # 2 - - -
console.log('\n- - - Ejercicio # 2 - - -');

let meanPMentor = [];
mentorsArray.forEach((mentor, index) => {
	let amount = 0;
	let nSignatures = 0;
	mentor.scores.forEach((scoreI, index2) => {
		amount += scoreI.score;
		nSignatures++;
	});
	meanPMentor.push(amount / nSignatures);
	console.log(mentor.name + ' tiene de promedio ' + amount / nSignatures);
});



// - - - Ejercicio # 3 - - -
console.log('\n- - - Ejercicio # 3 - - -');

let resE3 = [];
mentorsArray.forEach((mentor, index, arr) => {
	resE3.push('Mi nombre es ' + mentor.name + ' y mi promedio es de ' + meanPMentor[index]);
});
console.log(resE3);



// - - - Ejercicio # 4 - - -
console.log('\n- - - Ejercicio # 4 - - -');

meanPMentor.forEach((item, index, arr) => {
	if (item >= 9.5) {
		console.log(mentorsArray[index].name + ' tiene 9.5 o más');
	} else {
		console.log(mentorsArray[index].name + ' no tiene el promedio necesario');
	}
});
