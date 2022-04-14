//Ejercicio # 1

let parrafo = "Cada estudiante tiene su ritmo, cada estudiante tiene su talento, y cada estudiante complementa al estudiante que tiene a su lado";

let numeroEstudiante = parrafo.match(/estudiante/gi).length;
console.log(numeroEstudiante);

console.log(parrafo.replace(/estudiante/g,"koder"));


// Ejercicio # 2
let string1 = "string 1";
let string2 = "Some large string";

if(string1.length>string2.length){
  console.log("el string " + string1 +" es el más largo")
}else{
  console.log("el string \"" + string2 +"\" es el más largo")
}

//Ejercicio # 3
let stringTwoWords = "Programación Javascript"
let sliced = stringTwoWords.split(" ");

if(sliced[0]>sliced[1]){
  console.log(sliced[0]);
}else{
  console.log(sliced[1]);
}

//Ejercicio # 4
let entrada = prompt("Escoge una operacion y dos numeros separados por una , ");
let elementoSplit = entrada.split(",");
console.log(elementoSplit);
let operacion = elementoSplit[0]
elementoSplit[1] =Number(elementoSplit[1])
elementoSplit[2] =Number(elementoSplit[2])
switch (operacion) {
    case "suma":
        console.log(elementoSplit[1]+elementoSplit[2])
        break;
    case "resta":
            console.log(elementoSplit[1]-elementoSplit[2])
         break;
    case "multiplicacion":
                console.log(elementoSplit[1]*elementoSplit[2])
         break;
    case "division":
            console.log(elementoSplit[1]/elementoSplit[2])
        break;
    default: console.log("Introduce una operacion,  numero1 , numero2")
        break;
}