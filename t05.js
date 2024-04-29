// 5. Escribe un programa que realice las operaciones básicas de suma, resta, multiplicación y división. El programa debe solicitar al usuario dos números y la operación que desea realizar.


let operacionDelUsuario = prompt("Que operacion desea realizar: suma, resta, multiplicación o división");

let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));

const suma = num1 + num2;
const resta = num1 - num2;
const multiplicación = num1 * num2;
const division = num1 / num2;

if (operacionDelUsuario == "suma"){
    console.log(`Su resultado de la suma es ${suma}`);
}

else if (operacionDelUsuario == "resta"){
    console.log(`Su resultado de la resta es ${resta}`);
}

else if (operacionDelUsuario == "multiplicacion"){
    console.log(`Su resultado de la multiplicación es ${multiplicación}`);
}

else if (operacionDelUsuario == "division") {
    console.log(`Su resultado de la división es ${division}`);
}

else (
    alert("Por favor ingrese una opcion valida: suma, resta, multiplicacion o division")
);