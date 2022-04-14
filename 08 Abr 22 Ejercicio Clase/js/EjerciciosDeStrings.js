
/*
Ejercicio 1:
    Solicitar el nombre completo de un usuario e indicarle cuantos caracteres tiene su nombre
*/
let fullName = prompt("Escribe tu nombre completo");
count(fullName);

function count(name){
  let caracters = fullName.replace(/ /g,"").length;
  console.log(fullName + " tiene " + caracters + " letras");
}

/*
Ejercicio 2:
    Solicitar el nombre completo a un usuario e indicarle cuantas vocales tiene.
*/

let nameLowerCase = fullName.toLowerCase();
let nameWOVocals = quitVocal(nameLowerCase);
let diference = fullName.length - nameWOVocals.length;

console.log(fullName + " tiene " + diference + " vocales");

function quitVocal(string){
  let name = string
  name = name.replace(/a/g,"");
  name = name.replace(/e/g,"");
  name = name.replace(/i/g,"");
  name = name.replace(/o/g,"");
  name = name.replace(/u/g,"");
  return name;
}
