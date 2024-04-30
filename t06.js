// 6.Escribe un programa que tome como entrada tus nombres y apellidos completos y cuente cuantos caracteres tiene, sin tener en cuenta los espacios.

let nombreCompleto = prompt("Introduce tu nombre completo: ")
let contar = 0;

for(i = 0; i < nombreCompleto.length; i++)
if (nombreCompleto[i] !== ' '){
    contar++;
}

console.log(contar)

