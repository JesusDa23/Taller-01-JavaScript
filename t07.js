// 7. Escribe un programa que tome un string como entrada y cuente el número de vocales que contiene

let palabra = prompt("ingresa una palabra con vocales: ");
const vocales = "aeiou";
let contar = 0;

for(i = 0; i < palabra.length; i++)
if (palabra[i] === vocales[i]){
    contar++
}

console.log(contar)


// let resultado = palabra.includes(vocales.length);

// console.log(resultado)